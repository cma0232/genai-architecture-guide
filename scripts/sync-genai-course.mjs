import fs from "node:fs";
import path from "node:path";

const handbookRoot = process.argv[2];
if (!handbookRoot) {
  console.error("Usage: node scripts/sync-genai-course.mjs /path/to/fde-interview-handbook");
  process.exit(1);
}

const chapterFile = path.join(handbookRoot, "src/lib/genai-chapters.ts");
const contentDir = path.join(handbookRoot, "src/content/genai-architecture");
const source = fs.readFileSync(chapterFile, "utf8");

const chapterPattern = /\{ id: "[^"]+",\s+slug: "([^"]+)",\s+title: "(\d+\.\d+) ([^"]+)",\s+section: "([^"]+)" \}/g;
const memberBlock = source.match(/MEMBER_GENAI_CHAPTER_SLUGS = new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? "";
const memberSlugs = new Set([...memberBlock.matchAll(/"([^"]+)"/g)].map((match) => match[1]));

const folders = new Map([
  ["Foundations of GenAI Systems", "01-foundations-of-genai-systems"],
  ["Building Blocks of GenAI Systems", "02-building-blocks-of-genai-systems"],
  ["GenAI Architecture Patterns", "03-genai-architecture-patterns"],
  ["Reliable AI Systems", "04-reliable-ai-systems"],
  ["Production-Grade GenAI Engineering", "05-production-grade-genai-engineering"],
]);

function gatedPreview(mdx) {
  const starts = [...mdx.matchAll(/^##\s+/gm)].map((match) => match.index);
  const cutoff = starts[2] ?? starts[1] ?? starts[0] ?? 0;
  return `${mdx.slice(0, cutoff).trimEnd()}\n\n---\n`;
}

function gateCopy(access, slug) {
  const url = `https://www.fdehandbook.com/learn/genai-architecture/${slug}?utm_source=github&utm_medium=referral&utm_campaign=genai_field_guide`;
  if (access === "member") {
    return `\n> **Member chapter**\n>\n> **Continue with the complete chapter.** Unlock advanced GenAI architecture, reliability, security, and production engineering chapters.\n>\n> [View membership](${url})\n`;
  }
  return `\n> **Continue the course**\n>\n> **Create a free account to keep reading.** Continue learning and keep your progress synced across the platform.\n>\n> [Create a free account](${url})\n`;
}

function blockquote(content, label) {
  const prefix = label ? `**${label}:** ` : "";
  return `${prefix}${content.trim()}`
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
}

function quizToMarkdown(block) {
  const question = block.match(/question="([^"]+)"/)?.[1] ?? "Check your understanding";
  const explain = block.match(/explain="([^"]+)"/)?.[1] ?? "";
  const options = [...block.matchAll(/\{ label: "([^"]+)", text: "([^"]+)"(?:, correct: true)? \}/g)]
    .map((match) => ({
      label: match[1],
      text: match[2],
      correct: match[0].includes("correct: true"),
    }));
  const correct = options.find((option) => option.correct);
  const choices = options.map((option) => `- **${option.label}.** ${option.text}`).join("\n");
  const answer = correct ? `**Answer: ${correct.label}.** ${explain}` : explain;

  return `<details>\n<summary><strong>Check your understanding:</strong> ${question}</summary>\n\n${choices}\n\n${answer}\n\n</details>`;
}

function githubMarkdown(mdx) {
  return mdx
    .replace(/<ReadingTime minutes=\{(\d+)\} \/>/g, "_Estimated reading time: $1 minutes._")
    .replace(/<p className="lead">([\s\S]*?)<\/p>/g, "$1")
    .replace(/<Callout([^>]*)>([\s\S]*?)<\/Callout>/g, (_, attrs, content) => {
      const label = attrs.match(/label="([^"]+)"/)?.[1];
      return blockquote(content, label);
    })
    .replace(/<Analogy>([\s\S]*?)<\/Analogy>/g, (_, content) => blockquote(content, "Analogy"))
    .replace(/<Quiz[\s\S]*?\/>/g, quizToMarkdown)
    .replace(/<MiniFlow>\s*\{\`([\s\S]*?)\`\}\s*<\/MiniFlow>/g, (_, content) => "```text\n" + content.trim() + "\n```")
    .replace(/<FlowBox>([\s\S]*?)<\/FlowBox>/g, (_, content) => `**${content.trim()}**`)
    .replace(/\s*<FlowArrow \/>\s*/g, " → ")
    .replace(/<Col title="([^"]+)">/g, "### $1")
    .replace(/<\/?(?:Takeaway|TwoCol|Col|Flow|Checklist)>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

for (const match of source.matchAll(chapterPattern)) {
  const [, slug, number, title, section] = match;
  const folder = folders.get(section);
  if (!folder) continue;

  const targetDir = path.join(folder);
  const existing = fs.readdirSync(targetDir).find((name) => name.startsWith(`${number}-`));
  const filename = existing ?? `${number}-${slug}.md`;
  const mdx = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf8").trimStart();
  const access = section === "Foundations of GenAI Systems"
    ? "public"
    : memberSlugs.has(slug) ? "member" : "account";
  const visibleSource = access === "public" ? mdx : gatedPreview(mdx) + gateCopy(access, slug);
  const body = githubMarkdown(visibleSource);

  fs.writeFileSync(path.join(targetDir, filename), `${body.trimEnd()}\n`);
}

console.log("Synced GenAI course content using the Handbook access boundaries.");
