import React from 'react';
import Layout from '@theme/Layout';

function Home() {
  return (
    <Layout
      title={`Hello from Docusaurus`}
      description="Description will go into a meta tag in <head />">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Welcome to the Physical AI & Humanoid Robotics Textbook!
        </p>
      </div>
    </Layout>
  );
}

export default Home;
