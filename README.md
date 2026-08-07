# FDE Interview Handbook 🐙

> The complete interview prep guide for **Forward Deployed Engineer** roles at Palantir, Databricks, Scale AI, Anduril, Google, and beyond.

[![Website](https://img.shields.io/badge/Full%20Question%20Bank-fdehandbook.com-black?style=flat-square)](https://fdehandbook.com)
[![Discord](https://img.shields.io/badge/Community-Discord-5865F2?style=flat-square&logo=discord)](https://discord.gg/GnUdge3k3)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/cma0232/fde-interview-prep/pulls)

---

## What is a Forward Deployed Engineer?

A **Forward Deployed Engineer (FDE)** is a hybrid role: part software engineer, part solutions architect, part customer-facing consultant. FDEs embed directly with enterprise clients to deploy, customize, and extend complex software and AI systems.

Unlike traditional SWEs, FDEs are expected to:
- Write production code **on-site at customer locations**
- Run live technical demos and architecture reviews
- Translate ambiguous business problems into working systems
- Manage relationships with technical and non-technical stakeholders

FDE interviews test a unique combination of skills: **agentic system design, live demo readiness, customer-facing communication, and LLM deployment** — not just algorithms.

---

## Table of Contents

- [Free Learning Paths](#-free-learning-paths)
- [Behavioral](#-behavioral)
- [System Design](#-system-design)
- [Coding](#-coding)
- [GenAI Architecture](#-genai-architecture)
- [Customer-Facing Case Study](#-customer-facing-case-study)
- [Company Guides](#-company-guides)
- [Contributing](#-contributing)

---

## 📚 Free Learning Paths

Use the question bank below to test yourself, then use these structured courses to build the underlying skills.

### GenAI Architecture

Learn how to design, evaluate, secure, and operate production GenAI systems—from foundation models and RAG to agents, MCP, guardrails, and deployment.

| Module | What you will learn |
|--------|---------------------|
| 1. Foundations of GenAI Systems | How GenAI software differs from traditional systems, what makes a system agentic, and the engineer's changing role |
| 2. Building Blocks of GenAI Systems | Models, prompts, context, retrieval, structured output, tools, MCP, state, memory, identity, and permissions |
| 3. GenAI Architecture Patterns | Direct LLM apps, RAG, deterministic and agentic workflows, skills, multi-agent systems, and human approval |
| 4. Reliable AI Systems | Evaluation, threat modeling, guardrails, observability, incident evidence, governance, and readiness reviews |
| 5. Production-Grade GenAI Engineering | Reference architectures, model gateways, deployment, data, CI/CD, scaling, rollout, and ownership |

→ **[Start the free GenAI Architecture course](https://fdehandbook.com/learn/genai-architecture?utm_source=github&utm_medium=referral&utm_campaign=fde_interview_prep)**

### End-to-End Engineering

Learn how a tech lead or FDE turns an ambiguous customer request into a scoped, estimable project—and owns delivery through rollout and measurable results.

| Module | What you will learn |
|--------|---------------------|
| 1. Course Overview | The end-to-end engineering mindset and delivery model |
| 2. From Request to Plan | Mapping the problem, defining scope, reading complexity, and finding hidden production work |
| 3. Estimate and Execute | Estimating AI work, cutting scope, building a defensible estimate, planning delivery, and proving results |
| 4. Apply the Method | Booking and support-copilot case studies, a field guide, a 30-minute workshop, and a pre-estimate checklist |

→ **[Start the free End-to-End Engineering course](https://fdehandbook.com/learn/end-to-end-engineering?utm_source=github&utm_medium=referral&utm_campaign=fde_interview_prep)**

---

## 🧠 Behavioral

FDE behavioral interviews use STAR format but focus on **customer impact, ambiguity, and cross-functional influence** — not just internal team work.

| # | Question |
|---|----------|
| 1 | Tell me about a time you had to push back on a client request. |
| 2 | Tell me about a time you explained a technical issue to a non-technical audience. |
| 3 | Tell me about a time you earned customer trust after something went wrong. |
| 4 | Tell me about a time you had to balance customer customization with product scalability. |
| 5 | Tell me about a time you handled ambiguity. |
| 6 | Tell me about a time you worked with a difficult stakeholder. |
| 7 | Tell me about a time you had to prioritize between multiple urgent customer requests. |
| 8 | Tell me about a time you had to make a trade-off between speed, quality, and scope. |
| 9 | Tell me about a time you built something with incomplete information. |
| 10 | Tell me about a time you led without formal authority. |
| 11 | Tell me about a time you improved a process, not just a piece of code. |
| 12 | Tell me about a time you handled missing, messy, or inconsistent data. |
| 13 | Give an example of when you influenced without authority. |
| 14 | How would you plan a 30-day pilot for an enterprise GenAI assistant? |
| 15 | How would you present architecture trade-offs between accuracy, latency, cost, and safety to a non-technical exec? |
| 16 | How would you communicate that the system is not ready for production? |
| 17 | How would you align security, legal, product, and engineering stakeholders? |
| 18 | How would you handle a customer who wants full automation but has no evaluation data? |
| 19 | How would you manage scope when a customer asks the assistant to do everything? |
| 20 | How would you structure a customer workshop for GenAI workflow discovery? |
| 21 | How would you create an implementation roadmap from prototype to production? |
| 22 | How would you convert interview ambiguity into a clear answer without asking endless questions? |

→ **[See all 34 behavioral questions + frameworks at fdehandbook.com](https://fdehandbook.com/practice/behavioral)**

---

## 🏗️ System Design

FDE system design questions emphasize **observability, security, multi-tenancy, and cost control** — the real constraints of enterprise deployments.

| # | Question |
|---|----------|
| 1 | Design a real-time supply chain visibility platform for a Fortune 500. |
| 2 | Design an audit logging system that is tamper-proof. |
| 3 | How would you design permission-aware retrieval for enterprise documents? |
| 4 | How would you defend a RAG system against prompt injection hidden inside retrieved documents? |
| 5 | How would you prevent cross-tenant data leakage in a multi-tenant GenAI platform? |
| 6 | A customer asks whether the LLM provider can train on their data. How do you respond architecturally? |
| 7 | How would you handle PII in prompts, logs, and evaluation datasets? |
| 8 | How would you design least-privilege access for model, retrieval, and tool layers? |
| 9 | How would you prepare a GenAI system for a security review by a regulated enterprise customer? |
| 10 | Design tool permissions for an agent that can read tickets, draft responses, and update records. |
| 11 | A GenAI assistant has p95 latency of 18 seconds. How would you reduce it? |
| 12 | A customer is worried about unpredictable LLM cost. How would you control it? |
| 13 | How would you design model routing between small and large models? |
| 14 | How would you use caching safely in a permission-sensitive enterprise assistant? |
| 15 | An agentic workflow costs too much because of repeated tool and model calls. What do you do? |
| 16 | How would you design graceful degradation when the LLM provider is slow or unavailable? |
| 17 | How would you scale a RAG system for thousands of concurrent users? |
| 18 | How would you instrument traces across retrieval, prompt construction, model calls, and tools? |
| 19 | How would you debug a customer report that the assistant gave a hallucinated answer? |
| 20 | How would you monitor cost, latency, and quality together? |
| 21 | How would you design alerting for a GenAI system without creating noise? |
| 22 | How would you build a production support playbook for a GenAI pilot? |

→ **[See all 30 system design questions + sample answers at fdehandbook.com](https://fdehandbook.com/practice/system-design)**

---

## 💻 Coding

FDE coding questions are **practical and deployment-focused** — less LeetCode, more real engineering challenges you'll face on-site.

| # | Question |
|---|----------|
| 1 | Write a SQL query to find the top 3 SKUs by revenue per region. |
| 2 | Given a CSV of IoT sensor readings, detect anomalies in Python. |
| 3 | Deduplicate webhook events — same event delivered multiple times. |
| 4 | Normalize messy CRM records with inconsistent name/email formats. |
| 5 | Validate JSON tool-call arguments before executing a write operation. |
| 6 | Sanitize PII from documents before sending to an LLM. |
| 7 | Detect prompt injection patterns in user input. |
| 8 | Implement conversation memory trimming when context exceeds the token limit. |
| 9 | Merge streaming partial responses from multiple concurrent LLM calls. |
| 10 | Calculate token cost per customer across a multi-tenant deployment. |
| 11 | Chunk documents with configurable overlap for a RAG ingestion pipeline. |
| 12 | Filter RAG chunks by user permissions before returning results. |
| 13 | Rate-limit model calls per tenant with a sliding window. |
| 14 | Implement retry with exponential backoff for failed LLM API calls. |
| 15 | Build a simple LRU cache for identical prompt + context pairs. |
| 16 | Score hallucination risk from a model response against a retrieved context. |
| 17 | Implement agent tool execution safety — validate arguments before any write. |
| 18 | Implement a multi-step workflow state machine for an agentic pipeline. |
| 19 | Implement model fallback logic — switch providers on timeout or error. |
| 20 | Build a human-in-the-loop approval queue for high-risk agent actions. |
| 21 | Reconcile CRM and data warehouse records with conflicting update timestamps. |
| 22 | Implement a rate limiter with a sliding window in TypeScript. |

→ **[See all 50 coding questions + solutions at fdehandbook.com](https://fdehandbook.com/practice/coding)**

---

## 🤖 GenAI Architecture

The most FDE-specific category. These questions test your ability to **design, debug, and evaluate LLM systems in production enterprise environments**.

| # | Question |
|---|----------|
| 1 | Design a RAG pipeline for a customer support chatbot with 10M documents. |
| 2 | How would you evaluate and prevent hallucination in a production LLM app? |
| 3 | A customer needs on-premise deployment for sensitive documents. How does your architecture change? |
| 4 | Design the backend for a customer-facing AI support copilot serving multiple enterprise tenants. |
| 5 | How would you design a model gateway supporting multiple LLM providers, prompt versions, and safety controls? |
| 6 | How would you choose chunking, metadata, and retrieval strategy for long policy documents? |
| 7 | A RAG assistant gives plausible answers but often cites irrelevant sources. How would you fix it? |
| 8 | Design a multi-tenant RAG system with isolated data and per-tenant embedding configurations. |
| 9 | How would you evaluate whether hybrid search is better than vector-only search for a customer corpus? |
| 10 | A customer wants citations that legal reviewers can trust. How would you design citation handling? |
| 11 | How would you handle queries where the answer is not present in the knowledge base? |
| 12 | Design an agent that triages support tickets, searches knowledge, drafts replies, and escalates risky cases. |
| 13 | A customer wants an agent to update CRM records after meetings. How would you make it safe? |
| 14 | Design an agentic workflow for invoice exception handling with human approval. |
| 15 | How would you prevent an agent from taking unauthorized actions through tools? |
| 16 | How would you implement memory for an enterprise agent without creating privacy or correctness problems? |
| 17 | An agent gets stuck in loops and calls tools repeatedly. How would you fix the design? |
| 18 | When would you choose a deterministic workflow instead of an agent? |
| 19 | How would you design an evaluation framework for a GenAI solution before production? |
| 20 | How would you build a golden dataset for a RAG-based enterprise assistant? |
| 21 | How would you measure hallucination and groundedness in production? |
| 22 | A model upgrade improves fluency but worsens policy accuracy. How do you decide whether to ship? |
| 23 | A prompt-injection test succeeds against your RAG assistant. What is your incident response? |
| 24 | A tool-using agent updates the wrong record. How would you investigate and prevent recurrence? |
| 25 | A customer pilot has low adoption despite good technical metrics. How do you diagnose it? |

→ **[See all 50 GenAI architecture questions + deep-dive answers at fdehandbook.com](https://fdehandbook.com/practice/genai-architecture)**

---

## 📋 Customer-Facing Case Study

FDE case studies simulate the real job: **decompose a vague business problem, propose a system, and defend it to a mixed technical/non-technical audience**.

| # | Question |
|---|----------|
| 1 | A logistics company wants to reduce detention fees by 20%. How do you approach this? |
| 2 | Your client's ops team refuses to adopt the software you deployed. What do you do? |
| 3 | A sales leader asks for a GenAI tool to summarize every customer call and auto-update Salesforce. What do you build? |
| 4 | A legal team wants a contract-review assistant but can't define what decisions it should make. What do you do? |
| 5 | An executive asks for an agent that can answer any business question across all company data. What do you do? |
| 6 | A bank wants an AI assistant to help relationship managers prep for client meetings using CRM, emails, and policy docs. |
| 7 | A healthcare ops team wants to automate prior-authorization review using internal guidelines and patient notes. |
| 8 | A manufacturing customer wants an AI system to diagnose machine downtime from tickets, sensor data, and manuals. |
| 9 | An insurance team wants claim handlers to use an AI assistant for coverage questions and next-step recommendations. |
| 10 | A support org wants to reduce ticket volume with an internal knowledge assistant for agents. |
| 11 | Design an Enterprise Sales Assistant using CRM data, call transcripts, emails, and RAG. |
| 12 | Design a Customer Support Agent for Zendesk / ServiceNow. |
| 13 | Design a Financial Document Analysis Assistant with strict compliance controls. |
| 14 | Design a Legal Contract Review Copilot with human approval gates. |
| 15 | Design an AI Incident Triage Bot for SRE / DevOps teams. |
| 16 | Design a multi-tenant SaaS GenAI assistant with per-customer data isolation. |
| 17 | A recruiter tells you the final round will focus on building an agentic workflow for a customer problem. How do you prep? |
| 18 | Prioritize a backlog of 12 feature requests from 3 different enterprise clients. |

→ **[See all 31 case study questions + structured frameworks at fdehandbook.com](https://fdehandbook.com/practice/case-study)**

---

## 🏢 Company Guides

Deep-dive interview guides for the companies most known for FDE hiring:

| Company | Guide |
|---------|-------|
| Palantir | [Palantir FDE Interview Guide](https://fdehandbook.com/companies/palantir) |
| Databricks | [Databricks FDE Interview Guide](https://fdehandbook.com/companies/databricks) |
| Scale AI | [Scale AI FDE Interview Guide](https://fdehandbook.com/companies/scale-ai) |
| Anduril | [Anduril FDE Interview Guide](https://fdehandbook.com/companies/anduril) |
| Google | [Google FDE Interview Guide](https://fdehandbook.com/companies/google) |

---

## 🤝 Contributing

**Recently interviewed for an FDE role?** Submit a debrief — anonymously share the questions you were asked.

- Open an [Issue](https://github.com/cma0232/fde-interview-prep/issues) with the title `[Debrief] Company Name`
- Include: interview stage, question topics (not verbatim), difficulty, and outcome (optional)

All community contributions help keep this resource current.

---

## Full Question Bank

This repo contains a curated sample. The complete handbook at **[fdehandbook.com](https://fdehandbook.com)** includes:

- ✅ 195 questions across all 5 categories
- ✅ Detailed answer frameworks and sample responses
- ✅ Free GenAI Architecture and End-to-End Engineering courses
- ✅ Company-specific prep guides (Palantir, Databricks, Scale AI, Anduril, Google)
- ✅ Weekly FDE job market data
- ✅ Discord community

---

*Built for engineers preparing for FDE, Solutions Engineer, Customer Engineer, Field Engineer, and Applied AI Engineer roles at top tech companies.*
