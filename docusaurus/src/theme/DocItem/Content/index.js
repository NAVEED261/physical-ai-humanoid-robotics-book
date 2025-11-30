import React from 'react';
import DocItemContent from '@theme-original/DocItem/Content';

export default function DocItemContentWrapper(props) {
  const {content: DocContent, metadata} = props;

  const BOOK_SUMMARY = "The 'Physical AI & Humanoid Robotics' textbook delves into the convergence of artificial intelligence with real-world physical systems, specifically humanoid robots. It explores the foundational concepts required to build, program, and interact with robots that emulate human form and function. The book covers topics from robot kinematics, dynamics, and control to advanced AI algorithms for perception, decision-making, and learning in complex physical environments. It emphasizes practical applications, ethical considerations, and the future potential of human-robot interaction. Readers will gain insights into designing intelligent robots capable of navigating, manipulating objects, and performing tasks autonomously while adapting to unforeseen circumstances. The curriculum bridges theoretical understanding with hands-on implementation, preparing students and professionals for the challenges and innovations in the rapidly evolving field of physical AI and humanoid robotics. The goal is to equip learners with the knowledge to create intelligent machines that can seamlessly integrate into human society.";

  const isIntroductionPage = metadata.id === 'chapter1-introduction'; // Assuming 'chapter1-introduction' is the ID of your introduction page

  return (
    <>
      {isIntroductionPage && BOOK_SUMMARY && (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e2f0ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
          <p><strong>Book Overview:</strong> {BOOK_SUMMARY}</p>
        </div>
      )}
      <DocItemContent {...props} />
    </>
  );
}
