// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Portfolio />
      <Pricing />
    </div>
  );
}

export default App;