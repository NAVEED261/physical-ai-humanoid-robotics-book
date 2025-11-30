---
id: 0005
title: Provided run instructions in Roman Urdu
stage: general
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-robotics-textbook
branch: master
user: user
command: /sp.implement
labels: ["run-app", "instructions", "roman-urdu"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:

tests:

---

## Prompt

english romen urdu ma btao

## Response snapshot

To see the complete UI and use the workflow, you'll need to run both the Docusaurus frontend and the FastAPI backend. Here are the steps, provided in English with Roman Urdu:

**Complete UI aur workflow dekhne aur istemal karne ke liye, aapko Docusaurus frontend aur FastAPI backend dono ko chalana hoga. Yeh steps hain:**

1.  **Install Python dependencies for the FastAPI backend:**
    (FastAPI backend ke liye Python dependencies install karein:)
    ```bash
    pip install -r api/requirements.txt
    ```
2.  **Install Node.js dependencies for the Docusaurus frontend:**
    (Docusaurus frontend ke liye Node.js dependencies install karein:)
    ```bash
    npm install --prefix docusaurus
    ```
3.  **Set up environment variables:**
    (Environment variables set karein:)
    Create a `.env` file in the `api/` directory with your Neon Postgres, Qdrant, and OpenAI API keys.
    (Apni Neon Postgres, Qdrant, aur OpenAI API keys ke saath `api/` directory mein ek `.env` file banayein.)
    ```
    NEON_DATABASE_URL="your_neon_database_url"
    QDRANT_URL="your_qdrant_url"
    QDRANT_API_KEY="your_qdrant_api_key"
    OPENAI_API_KEY="your_openai_api_key"
    ```
4.  **Start the FastAPI backend:**
    (FastAPI backend shuru karein:)
    ```bash
    uvicorn api.main:app --reload
    ```
5.  **Start the Docusaurus frontend:**
    (Docusaurus frontend shuru karein:)
    ```bash
    npm start --prefix docusaurus
    ```

After running these commands, the Docusaurus site should open in your browser, and you will be able to interact with the RAG chatbot and the authentication component.

**Yeh commands chalane ke baad, Docusaurus site aapke browser mein khul jayegi, aur aap RAG chatbot aur authentication component ke saath interact kar sakenge.**

## Outcome

- ✅ Impact: Provided instructions in English Roman Urdu as requested.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: User is expected to follow the instructions or ask further questions.
- 🧠 Reflection: Successfully translated and presented the running instructions.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
