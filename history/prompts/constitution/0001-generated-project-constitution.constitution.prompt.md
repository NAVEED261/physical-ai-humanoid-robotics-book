---
id: 0001
title: Generated project constitution
stage: constitution
date: 2025-11-29
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: unknown
command: /sp.phr
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - sp.constitution.md
tests:
 - none
---

## Prompt

You are a Space-Kit Plus & AI-Driven Development Expert with 10+ years of experience.
Your job is to generate a complete and correct `/sp.constitution.md` file for my project.

Follow these exact rules:

────────────────────────────────────────
PROJECT CONTEXT (Very Important)
────────────────────────────────────────
I am participating in the Panaversity Hackathon:
“Physical AI & Humanoid Robotics Textbook + RAG System”.

The deliverables are:

1. AI/Spec Driven Book Creation
   - Book built using Docusaurus
   - Automated by Spec-Kit Plus
   - Written using Claude Code
   - Deployed to GitHub Pages

2. Integrated RAG Chatbot
   - Uses FastAPI
   - Qdrant Cloud
   - Neon Serverless Postgres
   - OpenAI Agents/ChatKit SDK
   - Must answer based on selected text + full book

3. Personalization System
   - Signup/Signin via Better-Auth
   - Ask hardware/software background
   - Personalize chapters based on user profile

4. Urdu Translation Button
   - Every chapter must have a “Translate to Urdu” toggle/button

5. Reusable Intelligence
   - Claude Code Subagents
   - Agent Skills
   - Automated book chapter generation
   - Automated diagrams
   - Automated ROS/Gazebo/Isaac examples

6. Course Content to Include
   - ROS2 (Robot Nervous System)
   - Gazebo & Unity Digital Twin
   - NVIDIA Isaac Sim & Isaac ROS
   - Vision-Language-Action Robotics
   - Capstone: Fully autonomous humanoid receiving voice command

────────────────────────────────────────
WHAT YOU MUST GENERATE
────────────────────────────────────────
Create a perfect `/sp.constitution.md` that contains:

1. **Purpose & Vision**
   - Why this project exists
   - What is “AI-Native Textbook Development”
   - What is “Spec-Kit Driven Development”
   - Dual-Output Philosophy (code + reusable intelligence)

2. **Core Principles**
   - Library-first
   - CLI-first
   - Test-first
   - Spec-first
   - Reusable intelligence
   - Agents + Subagents usage

3. **Governance Rules**
   - How AI will create files
   - How AI will create folders
   - How AI will write Docusaurus chapters
   - How AI will maintain consistency across modules
   - How AI will generate code only via specifications

4. **Project Architecture**
   - Book System Architecture
   - RAG System Architecture
   - Auth System Architecture
   - Personalization pipeline
   - Urdu translation mechanism
   - Claude Subagents structure
   - Embedding pipeline
   - Deployment flow

5. **Development Rules for AI**
   - Ai cannot create code without a spec
   - Ai must validate every spec before generating output
   - Ai must respect folder boundaries
   - Ai must write reusable, modular libraries
   - Ai must follow naming standards

6. **Deliverable Standards**
   - Book chapter quality guidelines
   - RAG pipeline correctness
   - Auth & personalization correctness
   - Translation correctness
   - Diagram generation rules

7. **Quality & Review Requirements**
   - No hallucinations
   - No broken references
   - No undefined APIs
   - No missing assets
   - Test coverage rules
   - How AI reviews its own output

────────────────────────────────────────
OUTPUT FORMAT:
────────────────────────────────────────

Return ONLY the content of `/sp.constitution.md`
in full, clean, production-ready markdown.

DO NOT explain anything.
DO NOT add side notes.
DO NOT ask questions.

Generate the final constitution file now.

## Response snapshot

Successfully generated the project constitution file `sp.constitution.md`.

## Outcome

- ✅ Impact: Successfully generated the project constitution file based on the provided requirements.
- 🧪 Tests: none
- 📁 Files: sp.constitution.md
- 🔁 Next prompts: null
- 🧠 Reflection: The constitution was generated successfully following all specified rules.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
