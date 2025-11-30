from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from api.services.rag_service import RAGService

router = APIRouter()
rag_service = RAGService()

class RAGQuery(BaseModel):
    query: str
    selected_text: str = None # New field for selected text context
    context: str = "" # This will be populated internally if selected_text is not provided



@router.post("/query")
async def rag_query(rag_query: RAGQuery):
    try:
        search_results = [] # Initialize search_results
        context_to_use = ""
        if rag_query.selected_text:
            context_to_use = rag_query.selected_text
        else:
            # First, get embedding for the query
            query_embedding = rag_service.get_embedding(rag_query.query)

            # Then, query Qdrant for relevant context (documents/chunks)
            search_results = rag_service.query_qdrant(query_embedding)

            # Extract content from search results to use as context for the LLM
            context_to_use = " ".join([result.payload['content'] for result in search_results if 'content' in result.payload])

        response = rag_service.generate_response(rag_query.query, context_to_use, search_results)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
