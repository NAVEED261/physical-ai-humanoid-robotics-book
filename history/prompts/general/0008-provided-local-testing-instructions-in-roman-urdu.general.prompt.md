---
id: 0008
title: Provided local testing instructions in Roman Urdu
stage: general
date: 2025-11-30
surface: agent
model: claude-sonnet-4-5-20250929
feature: physical-ai-robotics-textbook
branch: master
user: user
command: /sp.implement
labels: ["local-testing", "run-app", "roman-urdu"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:

tests:

---

## Prompt

yar english romen urdu ma btao

## Response snapshot

Great! I can certainly guide you through testing the application locally. We've already created the necessary files and updated the package configurations. Now, let's focus on getting both the FastAPI backend and the Docusaurus frontend up and running on your machine.

Here are the consolidated steps to test the complete workflow locally, provided in English with Roman Urdu:

**Complete UI aur workflow dekhne aur istemal karne ke liye, aapko Docusaurus frontend aur FastAPI backend dono ko apni machine par chalana hoga. Yeh steps hain:**

1.  **Set up Python Environment and Install Backend Dependencies:**
    (Python Environment set karein aur Backend dependencies install karein:)
    Navigate to the root of your project directory in your terminal and run:
    (Apne terminal mein project directory ke root mein jayein aur yeh command chalayein:)
    ```bash
    pip install -r api/requirements.txt
    ```

2.  **Set up Node.js Environment and Install Frontend Dependencies:**
    (Node.js Environment set karein aur Frontend dependencies install karein:)
    Navigate to the `docusaurus/` directory in your terminal and run:
    (Apne terminal mein `docusaurus/` directory mein jayein aur yeh command chalayein:)
    ```bash
    npm install
    ```

3.  **Create and Configure Environment Variables for Backend:**
    (Backend ke liye Environment Variables banayein aur configure karein:)
    Create a file named `.env` inside the `api/` directory. Open this `.env` file and add your API keys and database URLs. **Make sure to replace the placeholder values with your actual keys and URLs.**
    (`api/` directory ke andar `.env` naam ki ek file banayein. Is `.env` file ko kholein aur apni API keys aur database URLs shamil karein. **Yaad rahe ke placeholder values ko apni asli keys aur URLs se badalna hai.**)
    ```
    NEON_DATABASE_URL="your_neon_database_url_here"
    QDRANT_URL="your_qdrant_url_here"
    QDRANT_API_KEY="your_qdrant_api_key_here"
    OPENAI_API_KEY="your_openai_api_key_here"
    ```
    *Please note: If you do not have these services set up yet, you can obtain them from Neon (for PostgreSQL), Qdrant Cloud (for vector database), and OpenAI (for language models and embeddings). For initial local testing of the UI components, if you don't need the full RAG functionality, you can temporarily use placeholder values, but the RAG chatbot will not function correctly without valid keys.*
    (*Agar aapne abhi tak yeh services set up nahi ki hain, toh aap Neon (PostgreSQL ke liye), Qdrant Cloud (vector database ke liye), aur OpenAI (language models aur embeddings ke liye) se inhein hasil kar sakte hain. UI components ki ibtedaayi local testing ke liye, agar aapko poori RAG functionality ki zaroorat nahi hai, toh aap waqti taur par placeholder values istemal kar sakte hain, lekin RAG chatbot sahi tarah se kaam nahi karega valid keys ke bagair.*)

4.  **Start the FastAPI Backend Server:**
    (FastAPI Backend Server shuru karein:)
    Open a new terminal window or tab. Navigate to the root of your project directory and run:
    (Ek naya terminal window ya tab kholein. Apne project directory ke root mein jayein aur yeh command chalayein:)
    ```bash
    uvicorn api.main:app --reload
    ```
    You should see output indicating that the FastAPI server is running, typically on `http://127.0.0.1:8000`.
    (Aapko output mein dikhega ke FastAPI server chal raha hai, aam taur par `http://127.0.0.1:8000` par.)

5.  **Start the Docusaurus Frontend Development Server:**
    (Docusaurus Frontend Development Server shuru karein:)
    Open another new terminal window or tab. Navigate to the `docusaurus/` directory and run:
    (Ek aur naya terminal window ya tab kholein. `docusaurus/` directory mein jayein aur yeh command chalayein:)
    ```bash
    npm start
    ```
    This will start the Docusaurus development server, and your browser should automatically open to `http://localhost:3000` (or a similar port). You will then see the textbook UI, the RAG chatbot, and the authentication component.
    (Yeh Docusaurus development server shuru karega, aur aapka browser khud ba khud `http://localhost:3000` (ya isi tarah ke kisi port) par khul jayega. Phir aapko textbook UI, RAG chatbot, aur authentication component nazar aayega.)

## Outcome

- ✅ Impact: Provided comprehensive instructions for local testing in English Roman Urdu.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: User is expected to follow local testing instructions.
- 🧠 Reflection: Successfully addressed user's request to provide local testing instructions in English Roman Urdu.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
