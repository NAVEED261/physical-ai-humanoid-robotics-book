---
id: 0007
title: User requests local testing
stage: general
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-robotics-textbook
branch: master
user: user
command: /sp.implement
labels: ["local-testing", "run-app"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:

tests:

---

## Prompt

ap bhala localy test krwado koi issue ni

## Response snapshot

Great! I can certainly guide you through testing the application locally. We've already created the necessary files and updated the package configurations. Now, let's focus on getting both the FastAPI backend and the Docusaurus frontend up and running on your machine.

Here are the consolidated steps to test the complete workflow locally:

1.  **Set up Python Environment and Install Backend Dependencies:**
    Navigate to the root of your project directory in your terminal and run:
    ```bash
    pip install -r api/requirements.txt
    ```

2.  **Set up Node.js Environment and Install Frontend Dependencies:**
    Navigate to the `docusaurus/` directory in your terminal and run:
    ```bash
    npm install
    ```

3.  **Create and Configure Environment Variables for Backend:**
    Create a file named `.env` inside the `api/` directory. Open this `.env` file and add your API keys and database URLs. **Make sure to replace the placeholder values with your actual keys and URLs.**

    ```
    NEON_DATABASE_URL="your_neon_database_url_here"
    QDRANT_URL="your_qdrant_url_here"
    QDRANT_API_KEY="your_qdrant_api_key_here"
    OPENAI_API_KEY="your_openai_api_key_here"
    ```

    *Please note: If you do not have these services set up yet, you can obtain them from Neon (for PostgreSQL), Qdrant Cloud (for vector database), and OpenAI (for language models and embeddings). For initial local testing of the UI components, if you don't need the full RAG functionality, you can temporarily use placeholder values, but the RAG chatbot will not function correctly without valid keys.*

4.  **Start the FastAPI Backend Server:**
    Open a new terminal window or tab. Navigate to the root of your project directory and run:
    ```bash
    uvicorn api.main:app --reload
    ```
    You should see output indicating that the FastAPI server is running, typically on `http://127.0.0.1:8000`.

5.  **Start the Docusaurus Frontend Development Server:**
    Open another new terminal window or tab. Navigate to the `docusaurus/` directory and run:
    ```bash
    npm start
    ```
    This will start the Docusaurus development server, and your browser should automatically open to `http://localhost:3000` (or a similar port). You will then see the textbook UI, the RAG chatbot, and the authentication component.

***

Once both servers are running, you can access the Docusaurus frontend in your web browser. You will be able to:
*   View the sample chapter content.
*   Interact with the RAG chatbot to ask questions about the book (requires valid API keys and RAG setup).
*   Use the placeholder authentication component to simulate user login/signup.

Let me know if you encounter any issues during these steps!

## Outcome

- ✅ Impact: Provided comprehensive instructions for local testing.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: User is expected to follow local testing instructions.
- 🧠 Reflection: Successfully adapted to user's request for local testing, provided detailed steps, and clarified environment variable setup.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
