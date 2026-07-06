# FDE Interview Handbook 🐙

> The complete interview prep guide for **Forward Deployed Engineer** roles at Palantir, Databricks, Scale AI, Anduril, Google, and beyond.

[![Website](https://img.shields.io/badge/Full%20Question%20Bank-fdehandbook.com-black?style=flat-square)](https://fdehandbook.com)
[![Discord](https://img.shields.io/badge/Community-Discord-5865F2?style=flat-square&logo=discord)](https://discord.gg/GnUdge3k3)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/cma0232/fde-interview-handbook/pulls)

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

- [Behavioral](#-behavioral)
- [System Design](#-system-design)
- [Coding](#-coding)
- [GenAI Architecture](#-genai-architecture)
- [Customer-Facing Case Study](#-customer-facing-case-study)
- [Company Guides](#-company-guides)
- [Contributing](#-contributing)

---

## 🧠 Behavioral

FDE behavioral interviews use STAR format but focus on **customer impact, ambiguity, and cross-functional influence** — not just internal team work.

| # | Question |
|---|----------|
| 1 | Tell me about a time you had to push back on a client request. |
| 2 | Tell me about a time you explained a technical issue to a non-technical audience. |
| 3 | Tell me about a time you earned customer trust after something went wrong. |
| 4 | Tell me about a time you had to balance customer customization with product scalability. |
| 5 | Tell me about a time you led without formal authority. |
| 6 | How would you plan a 30-day pilot for an enterprise GenAI assistant? |
| 7 | How would you present architecture trade-offs between accuracy, latency, cost, and safety to a non-technical exec? |
| 8 | How would you communicate that the system is not ready for production? |
| 9 | How would you align security, legal, product, and engineering stakeholders? |
| 10 | How would you convert interview ambiguity into a clear answer without asking endless questions? |

→ **[See all 34 behavioral questions + frameworks at fdehandbook.com](https://fdehandbook.com/practice/behavioral)**

---

## 🏗️ System Design

FDE system design questions emphasize **observability, security, multi-tenancy, and cost control** — the real constraints of enterprise deployments.

| # | Question |
|---|----------|
| 1 | Design a real-time supply chain visibility platform for a Fortune 500. |
| 2 | Design an audit logging system that is tamper-proof. |
| 3 | How would you defend a RAG system against prompt injection hidden inside retrieved documents? |
| 4 | How would you prevent cross-tenant data leakage in a multi-tenant GenAI platform? |
| 5 | A GenAI assistant has p95 latency of 18 seconds. How would you reduce it? |
| 6 | How would you design graceful degradation when the LLM provider is slow or unavailable? |
| 7 | How would you design model routing between small and large models? |
| 8 | A customer is worried about unpredictable LLM cost. How would you control it? |
| 9 | How would you instrument traces across retrieval, prompt construction, model calls, and tools? |
| 10 | How would you design alerting for a GenAI system without creating noise? |

→ **[See all 30 system design questions + sample answers at fdehandbook.com](https://fdehandbook.com/practice/system-design)**

---

## 💻 Coding

FDE coding questions are **practical and deployment-focused** — less LeetCode, more real engineering challenges you'll face on-site.

| # | Question |
|---|----------|
| 1 | Write a SQL query to find the top 3 SKUs by revenue per region. |
| 2 | Detect prompt injection patterns in user input. |
| 3 | Implement conversation memory trimming when context exceeds the token limit. |
| 4 | Rate-limit model calls per tenant with a sliding window. |
| 5 | Implement agent tool execution safety — validate arguments before any write operation. |
| 6 | Score hallucination risk from a model response against a retrieved context. |
| 7 | Chunk documents with configurable overlap for a RAG ingestion pipeline. |
| 8 | Filter RAG chunks by user permissions before returning results. |
| 9 | Implement retry with exponential backoff for failed LLM API calls. |
| 10 | Build a simple LRU cache for identical prompt + context pairs. |

→ **[See all 50 coding questions + solutions at fdehandbook.com](https://fdehandbook.com/practice/coding)**

---

## 🤖 GenAI Architecture

The most FDE-specific category. These questions test your ability to **design, debug, and evaluate LLM systems in production enterprise environments**.

| # | Question |
|---|----------|
| 1 | Design a RAG pipeline for a customer support chatbot with 10M documents. |
| 2 | How would you evaluate and prevent hallucination in a production LLM app? |
| 3 | A customer needs on-premise deployment for sensitive documents. How does your architecture change? |
| 4 | Design an agent that triages support tickets, searches knowledge, drafts replies, and escalates risky cases. |
| 5 | How would you prevent an agent from taking unauthorized actions through tools? |
| 6 | A prompt-injection test succeeds against your RAG assistant. What is your incident response? |
| 7 | Design a multi-tenant RAG system with isolated data and per-tenant embedding configurations. |
| 8 | A RAG assistant gives plausible answers but often cites irrelevant sources. How would you fix it? |
| 9 | A customer pilot has low adoption despite good technical metrics. How do you diagnose it? |
| 10 | When would you choose a deterministic workflow instead of an agent? |

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
| 8 | A support org wants to reduce ticket volume with an internal knowledge assistant for agents. What do you build? |
| 9 | A recruiter tells you the final round will focus on building an agentic workflow for a customer problem. How do you prep? |
| 10 | Prioritize a backlog of 12 feature requests from 3 different enterprise clients. |

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

- Open an [Issue](https://github.com/cma0232/fde-interview-handbook/issues) with the title `[Debrief] Company Name`
- Include: interview stage, question topics (not verbatim), difficulty, and outcome (optional)

All community contributions help keep this resource current.

---

## Full Question Bank

This repo contains a curated sample. The complete handbook at **[fdehandbook.com](https://fdehandbook.com)** includes:

- ✅ 195 questions across all 5 categories
- ✅ Detailed answer frameworks and sample responses
- ✅ Company-specific prep guides (Palantir, Databricks, Scale AI, Anduril, Google)
- ✅ Weekly FDE job market data
- ✅ Discord community

---

*Built for engineers preparing for FDE, Solutions Engineer, Customer Engineer, Field Engineer, and Applied AI Engineer roles at top tech companies.*
