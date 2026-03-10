// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;