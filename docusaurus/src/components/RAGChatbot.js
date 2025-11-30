// docusaurus/src/components/RAGChatbot.js

import React, { useState } from 'react';

function RAGChatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/rag/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching RAG response:', error);
      setResponse('Error: Unable to get response from chatbot.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="RAGChatbot">
      <h3>Ask the Textbook</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question about the book..."
          style={{ width: '80%', padding: '8px', marginRight: '10px' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '8px 15px' }}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div className="response-box">
          <p><strong>Response:</strong> {response}</p>
        </div>
      )}
    </div>
  );
}

export default RAGChatbot;
