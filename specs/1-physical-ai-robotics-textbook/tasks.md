# Development Tasks: Hackathon I: Create a Textbook for Teaching Physical AI & Humanoid Robotics Course

## Feature: Hackathon I: Create a Textbook for Teaching Physical AI & Humanoid Robotics Course

## Implementation Strategy:
- MVP first, incremental delivery.
- Core book deployment and RAG chatbot will be prioritized.
- Authentication, personalization, and translation will follow.
- Reusable intelligence will be integrated as a bonus after core features are stable.

## Dependencies:
- User Story 1 (Textbook Access and Interaction) depends on Foundational setup.
- User Story 2 (User Registration and Personalization) depends on Foundational setup.
- User Story 3 (Personalized Content Viewing) depends on User Story 2.
- User Story 4 (Urdu Translation) depends on Foundational setup.

## Phase 1: Setup (Project Initialization)

### Story Goal: Basic project structure and Docusaurus initialized.
### Independent Test Criteria:
- Docusaurus project is created and runs locally.
- Basic GitHub Pages deployment is configured.

### Implementation Tasks:
- [ ] T001 Create base Docusaurus project structure in `docusaurus/`
- [ ] T002 Configure `docusaurus.config.js` for basic site metadata and routing in `docusaurus/docusaurus.config.js`
- [ ] T003 Set up GitHub Pages deployment in `.github/workflows/docusaurus-deploy.yml`
- [ ] T004 Initialize FastAPI project structure for RAG backend in `api/`

## Phase 2: Foundational (Shared Infrastructure & Initial RAG Setup)

### Story Goal: Core RAG infrastructure configured and basic Docusaurus content setup.
### Independent Test Criteria:
- FastAPI server runs locally.
- Neon Postgres connection is established.
- Qdrant Cloud connection is established.
- Basic book content structure is in place.

### Implementation Tasks:
- [ ] T005 Configure Neon Serverless Postgres connection in `api/config.py`
- [ ] T006 Configure Qdrant Cloud Free Tier connection in `api/config.py`
- [ ] T007 Implement basic book content structure with example chapters in `docusaurus/docs/`
- [ ] T008 Initial setup for OpenAI Agents/ChatKit SDKs in `api/services/rag_service.py`
- [ ] T009 Implement basic text extraction and chunking logic for embedding pipeline in `api/services/embedding_pipeline.py`

## Phase 3: User Story 1: Textbook Access and Interaction [US1]

### Story Goal: User can read the book and ask questions to the RAG chatbot.
### Independent Test Criteria:
- RAG chatbot UI is visible and interactive in the book.
- Chatbot can answer general questions about book content.
- Chatbot can answer questions based on user-selected text.
- Citations are provided with chatbot responses.

### Implementation Tasks:
- [ ] T010 [US1] Create RAG chatbot frontend component in `docusaurus/src/components/RAGChatbot.js`
- [ ] T011 [US1] Integrate RAG chatbot component into Docusaurus layout (e.g., `docusaurus/src/theme/Layout.js`)
- [ ] T012 [P] [US1] Implement FastAPI endpoint for general RAG queries in `api/routers/rag.py`
- [ ] T013 [P] [US1] Implement FastAPI endpoint for RAG queries with selected text context in `api/routers/rag.py`
- [ ] T014 [US1] Develop logic for retrieving relevant documents from Qdrant in `api/services/rag_service.py`
- [ ] T015 [US1] Develop logic for generating responses using OpenAI Agents/ChatKit in `api/services/rag_service.py`
- [ ] T016 [US1] Implement logic to provide citations from book content in `api/services/rag_service.py`
- [ ] T017 [US1] Integrate frontend with RAG chatbot API endpoints in `docusaurus/src/components/RAGChatbot.js`

## Phase 4: User Story 2: User Registration and Personalization [US2]

### Story Goal: User can sign up/in and provide background info for personalization.
### Independent Test Criteria:
- User can successfully register and log in via Better-Auth.com.
- User can provide software/hardware background questions during signup.
- User background information is stored in Neon Postgres.

### Implementation Tasks:
- [ ] T018 [US2] Integrate Better-Auth.com for signup/signin into Docusaurus frontend in `docusaurus/src/components/Auth.js`
- [ ] T019 [US2] Create user profile schema in Neon Postgres (migration script, e.g., `api/db/migrations/001_create_user_profile.sql`)
- [ ] T020 [P] [US2] Implement FastAPI endpoint for user profile creation/update (including background questions) in `api/routers/users.py`
- [ ] T021 [US2] Develop frontend forms and logic for collecting detailed software/hardware background questions during signup in `docusaurus/src/components/Auth.js`

## Phase 5: User Story 3: Personalized Content Viewing [US3]

### Story Goal: Logged-in user can personalize chapter content based on their profile.
### Independent Test Criteria:
- "Personalize Content" button is visible for logged-in users.
- Chapter content is dynamically reordered/prioritized based on user's background upon activation.

### Implementation Tasks:
- [ ] T022 [US3] Create client-side "Personalize Content" button component in `docusaurus/src/components/PersonalizationToggle.js`
- [ ] T023 [US3] Integrate personalization button into Docusaurus chapter layout (e.g., `docusaurus/src/theme/DocItem/Content/index.js`)
- [ ] T024 [P] [US3] Implement personalization logic to reorder/prioritize chapter sections based on user profile in `docusaurus/src/utils/personalization.js`
- [ ] T025 [US3] Connect personalization logic to user's stored background data (fetch from API if needed) in `docusaurus/src/utils/personalization.js`

## Phase 6: User Story 4: Urdu Translation [US4]

### Story Goal: Logged-in user can translate chapter content into Urdu.
### Independent Test Criteria:
- "Translate to Urdu" button is visible for logged-in users.
- Chapter content is translated into Urdu upon activation using pre-translated content.

### Implementation Tasks:
- [ ] T026 [US4] Create client-side "Translate to Urdu" button component in `docusaurus/src/components/UrduTranslationToggle.js`
- [ ] T027 [US4] Integrate translation button into Docusaurus chapter layout (e.g., `docusaurus/src/theme/DocItem/Content/index.js`)
- [ ] T028 [P] [US4] Implement logic to switch between English and pre-translated Urdu content in `docusaurus/src/utils/translation.js`
- [ ] T029 [US4] Ensure Docusaurus content structure supports pre-translated Urdu content (e.g., `docusaurus/i18n/ur/`)

## Phase 7: Reusable Intelligence & Polish (Bonus & Cross-Cutting Concerns)

### Story Goal: Bonus features integrated, project refined and production-ready (for hackathon scope).
### Independent Test Criteria:
- At least one Claude Code Subagent/Agent Skill is integrated and functional.
- CI/CD pipelines successfully deploy the book and RAG system.
- Basic observability (logs, metrics) is configured.

### Implementation Tasks:
- [ ] T030 Identify a suitable task for a Claude Code Subagent/Agent Skill (e.g., automated chapter outline generation) and define its spec in `specs/reusable-intelligence/chapter-outline-subagent/spec.md`
- [ ] T031 Develop and integrate the chosen Claude Code Subagent/Agent Skill in `.claude/subagents/chapter_outline_gen.py`
- [ ] T032 Implement CI/CD pipeline for Docusaurus deployment to GitHub Pages in `.github/workflows/docusaurus-deploy.yml` (if not fully covered in T003)
- [ ] T033 Implement CI/CD pipeline for FastAPI RAG system deployment in `.github/workflows/rag-deploy.yml`
- [ ] T034 Set up basic logging for FastAPI application in `api/main.py`
- [ ] T035 Configure basic metrics collection for FastAPI application in `api/main.py`
- [ ] T036 Finalize project documentation and README files in `README.md`

