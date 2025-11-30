# api/services/embedding_pipeline.py

import os
from typing import List

class EmbeddingPipeline:
    def __init__(self):
        pass

    def extract_text(self, file_path: str) -> str:
        # Placeholder for text extraction logic (e.g., from Markdown, PDF)
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        return content

    def chunk_text(self, text: str, chunk_size: int = 500, chunk_overlap: int = 50) -> List[str]:
        # Simple chunking logic
        words = text.split()
        chunks = []
        for i in range(0, len(words), chunk_size - chunk_overlap):
            chunk = " ".join(words[i:i + chunk_size])
            chunks.append(chunk)
        return chunks

    def process_document(self, file_path: str) -> List[str]:
        text = self.extract_text(file_path)
        chunks = self.chunk_text(text)
        return chunks
