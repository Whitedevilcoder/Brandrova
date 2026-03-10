import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      {/* We will add Problem/Solution, Portfolio, and Pricing here next */}
    </div>
  );
}

export default App;