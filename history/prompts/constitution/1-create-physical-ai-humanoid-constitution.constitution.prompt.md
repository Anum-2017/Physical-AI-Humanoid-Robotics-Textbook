---
id: 1
title: Create-Physical-AI-Humanoid-Constitution
stage: constitution
date: 2025-12-08
surface: agent
model: Qwen Code
feature: Physical-AI-Humanoid-Robotics
branch: main
user: Anum Khan
command: /sp.constitution
labels: [constitution, physical-ai, humanoid-robotics]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
tests:
 - null
---

## Prompt

---
description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync
---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution Purpose:
Define the complete governing rules, tone, structure, and boundaries for the entire Physical AI & Humanoid Robotics textbook. This constitution applies to every module, every chapter, and every piece of content generated through Spec-Kit Plus.

Constitution:

The book is titled “Physical AI & Humanoid Robotics”, created using Docusaurus and generated using Spec-Kit Plus via Claude Code.

The core theme is Embodied Intelligence—AI systems that sense, think, and act in the physical world.

Tone: Clear, academic, beginner-friendly but technically correct. No fluff.

Audience: Undergraduate/graduate students, AI/robotics learners, and developers.

Every chapter must:

Teach concepts progressively and logically.

Include definitions, explanations, diagrams (described textually), and real-world use cases.

Maintain accuracy of robotics standards (ROS 2, Gazebo, URDF, Isaac Sim, Nav2, etc.).

Stay aligned with physical AI, humanoid robotics, embodiment, control, simulation, and AI-robot integration.

The book is divided into four main modules, but the constitution applies universally.

All content generated must be modular, maintainable, and suitable for a Docusaurus documentation website.

Each chapter must be consistent in structure:

Introduction

Core Concepts

Technical Deep Dive

Hands-On Example or Mini-Tutorial

Real-World Connection

Summary

Key Terms

The book must support both simulation-first learning and real-world robotics transitions.

All generation must follow Spec-Driven Development and remain expandable for future modules.

## Response snapshot

I've successfully updated the project constitution for the Physical AI & Humanoid Robotics textbook. Here's the final summary:

1. **New Version**: 1.0.0 (initial version) - This is a major update as it establishes the complete governance structure for the project
2. **Changes Made**:
   - Created complete constitution with 6 core principles reflecting embodied intelligence, simulation-to-reality learning, technical standards, modularity, academic rigor, and progressive structure
   - Defined technical standards and compliance requirements
   - Established content structure requirements
   - Created governance section with amendment procedures
   - Updated dependent templates to align with the new constitution

3. **Files Updated**:
   - `.specify/memory/constitution.md` - Main constitution file
   - `.specify/templates/plan-template.md` - Added constitution checks
   - `.specify/templates/spec-template.md` - Added functional requirements aligned with constitution
   - `.specify/templates/tasks-template.md` - Added constitution alignment requirements

4. **Suggested Commit Message**: `docs: create constitution for Physical AI & Humanoid Robotics project v1.0.0`

5. **Follow-up Required**:
   - The RATIFICATION_DATE still needs to be set in the constitution file (currently shows as TODO)

The constitution now properly governs all content for the Physical AI & Humanoid Robotics textbook, ensuring all generated content follows the established principles of embodied intelligence, academic rigor, technical standards compliance, and progressive learning structure.

## Outcome

- ✅ Impact: Created complete constitution for Physical AI & Humanoid Robotics project, defining core principles, technical standards, and content structure requirements
- 🧪 Tests: null
- 📁 Files: Updated main constitution file and 3 dependent templates
- 🔁 Next prompts: Next steps would include setting the ratification date and beginning content creation using the new constitution
- 🧠 Reflection: The constitution effectively captures the requirements for the Physical AI & Humanoid Robotics textbook project

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null