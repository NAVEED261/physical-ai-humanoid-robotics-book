# Physical AI & Humanoid Robotics Textbook Project

This project aims to develop an interactive textbook on Physical AI and Humanoid Robotics, featuring a Docusaurus-based frontend and a FastAPI backend with Retrieval-Augmented Generation (RAG) capabilities. The platform is designed to provide a rich learning experience, combining structured documentation with an AI-powered chatbot for enhanced understanding and interaction.

## Project Overview

The project is divided into two main components:

1.  **Docusaurus Frontend**: A static site generator for creating the textbook's documentation, blog, and other content. It provides a clean, navigable interface for readers.
2.  **FastAPI Backend**: A Python-based API that powers the RAG chatbot and other potential interactive features. It integrates with external services like OpenAI for embeddings and Qdrant Cloud for vector search.

### Key Features:

*   **Interactive Textbook**: Structured content for Physical AI and Humanoid Robotics.
*   **AI-Powered RAG Chatbot**: Allows users to ask questions about the textbook content and receive intelligent, context-aware responses with citations.
*   **User Authentication**: Basic authentication components are in place.
*   **Professional & Stylish UI**: Enhanced frontend aesthetics for a better user experience.
*   **Dynamic Blog**: A blog section to provide updates and related articles.

## Technology Stack

### Frontend (Docusaurus)

*   **Docusaurus v3**: For documentation, blogging, and static site generation.
*   **React.js**: For building interactive UI components.
*   **`clsx`**: Utility for conditionally joining class names.
*   **`prism-react-renderer`**: For syntax highlighting in code blocks.
*   **Custom CSS**: For professional styling and thematic consistency.

### Backend (FastAPI)

*   **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.7+.
*   **`uvicorn`**: ASGI server for running FastAPI applications.
*   **`python-dotenv`**: For managing environment variables.
*   **`openai`**: Python client for interacting with OpenAI's API (embeddings, chat completions).
*   **`qdrant-client`**: Client for Qdrant Cloud, a vector similarity search engine.
*   **`pydantic`**: For data validation and settings management.

## Local Development Setup

To run this project locally, follow these steps:

### Prerequisites

*   **Python 3.8+**: For the FastAPI backend.
*   **Node.js (LTS)**: For the Docusaurus frontend.
*   **npm or Yarn**: Package manager for Node.js.
*   **Git**: For version control.

### 1. Clone the Repository

```bash
git clone https://github.com/NAVEED261/physical-ai-humanoid-robotics-book.git
cd physical-ai-humanoid-robotics-book
```

### 2. Backend Setup (FastAPI)

Navigate to the `api` directory:

```bash
cd api
```

Create a `.env` file in the `api` directory with your API keys and database URLs:

```
NEON_DATABASE_URL="your_neon_database_url"
QDRANT_URL="your_qdrant_url"
QDRANT_API_KEY="your_qdrant_api_key"
OPENAI_API_KEY="your_openai_api_key"
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI application:

```bash
uvicorn main:app --reload
```

The backend will be running at `http://127.0.0.1:8000`.

### 3. Frontend Setup (Docusaurus)

Open a new terminal and navigate to the `docusaurus` directory:

```bash
cd docusaurus
```

Install Node.js dependencies:

```bash
npm install
```

Run the Docusaurus development server:

```bash
npm start
```

The frontend will be running at `http://localhost:3000`.

## Usage

Once both the backend and frontend are running:

*   Open `http://localhost:3000` in your web browser to access the textbook.
*   Navigate through the documentation and blog pages.
*   Interact with the RAG chatbot to ask questions related to the textbook content.

Enjoy exploring the Physical AI & Humanoid Robotics Textbook!