import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced error boundary and defensive checks for extension conflicts

// Prevent extension scripts from interfering with React
const originalConsoleError = console.error;
console.error = (...args) => {
  // Filter out extension-related errors to prevent React from crashing
  const message = args[0]?.toString() || '';
  if (message.includes('chrome-extension://') || message.includes('extension')) {
    return; // Suppress extension errors
  }
  originalConsoleError.apply(console, args);
};

const rootElement = document.getElementById('root');

if (rootElement) {
  // Clear any extension-injected content that might interfere
  rootElement.innerHTML = '';
  
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <App />
    );
  } catch (error) {
    console.warn('Render error detected, attempting recovery...', error);
    // Multiple fallback strategies for extension conflicts
    setTimeout(() => {
      try {
        // Clear root and try again
        rootElement.innerHTML = '';
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
      } catch (fallbackError) {
        // Final fallback: direct DOM manipulation
        console.warn('Using emergency fallback render...');
        rootElement.innerHTML = '<div id="emergency-root"></div>';
        const emergencyRoot = document.getElementById('emergency-root');
        if (emergencyRoot) {
          const finalRoot = ReactDOM.createRoot(emergencyRoot);
          finalRoot.render(<App />);
        }
      }
    }, 50);
  }
} else {
  console.error('Root element not found');
}