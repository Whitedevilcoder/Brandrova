// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Portfolio />
    </div>
  );
}

export default App;