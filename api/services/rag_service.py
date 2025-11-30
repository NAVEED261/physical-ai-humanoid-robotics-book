# api/services/rag_service.py

import os
from openai import OpenAI
from qdrant_client import QdrantClient
from api.config import OPENAI_API_KEY, QDRANT_URL, QDRANT_API_KEY

class RAGService:
    def __init__(self):
        self.openai_client = OpenAI(api_key=OPENAI_API_KEY)
        self.qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)

    def get_embedding(self, text: str):
        response = self.openai_client.embeddings.create(
            input=text,
            model="text-embedding-ada-002"
        )
        return response.data[0].embedding

    def query_qdrant(self, embedding: list[float], collection_name: str = "book_chapters", limit: int = 3):
        search_result = self.qdrant_client.search(
            collection_name=collection_name,
            query_vector=embedding,
            limit=limit
        )
        return search_result

    def generate_response(self, prompt: str, context: str = "", search_results: list = None):
        messages = [
            {"role": "system", "content": "You are a helpful assistant for a Physical AI and Humanoid Robotics textbook. Provide citations from the context if available."},
            {"role": "user", "content": f"Context: {context}\n\nQuestion: {prompt}"}
        ]
        response = self.openai_client.chat.completions.create(
            model="gpt-3.5-turbo", # Or another suitable OpenAI model
            messages=messages
        )

        citations = []
        if search_results:
            for result in search_results:
                if 'source' in result.payload and 'page' in result.payload:
                    citations.append(f"{result.payload['source']}: {result.payload['page']}")

        response_content = response.choices[0].message.content
        if citations:
            response_content += "\n\nCitations:\n" + "\n".join(citations)

        return response_content
