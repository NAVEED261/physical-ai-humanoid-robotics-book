// docusaurus/src/components/Auth.js

import React, { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage('');

    // This is a placeholder for actual Better-Auth.com integration.
    // In a real application, you would interact with their SDK or API.
    console.log(`${isLogin ? 'Logging in' : 'Signing up'} with`, { email, password });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'test@example.com' && password === 'password') {
      setMessage(`Successfully ${isLogin ? 'logged in' : 'signed up'}!`);
    } else {
      setMessage(`Failed to ${isLogin ? 'log in' : 'sign up'}. Invalid credentials.`);
    }
  };

  return (
    <div className="AuthComponent">
      <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>
      <form onSubmit={handleAuth}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p style={{ marginTop: '15px' }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      {message && <p className={`message ${email === 'test@example.com' && password === 'password' ? 'success' : 'error'}`}>{message}</p>}
    </div>
  );
}

export default Auth;
