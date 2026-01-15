import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <Hero />
    </main>
  );
};

export default App;