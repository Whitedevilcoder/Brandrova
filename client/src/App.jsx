// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;