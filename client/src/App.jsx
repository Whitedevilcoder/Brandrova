// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ProblemSolution from './components/ProblemSolution';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <ProblemSolution />
        <WhyChooseUs />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;