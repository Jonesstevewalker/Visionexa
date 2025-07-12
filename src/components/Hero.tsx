import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-6 animate-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="inline-block animate-fade-in-up">Create,</span>{' '}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>grow,</span>{' '}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>and</span>{' '}
          <span className="inline-block animate-fade-in-up bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ animationDelay: '0.6s' }}>scale</span>{' '}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.8s' }}>your</span>{' '}
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: '1s' }}>business</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
        </p>
        
        <button
          onClick={scrollToServices}
          className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
          style={{ animationDelay: '1.4s' }}
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;