import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <Clients />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;