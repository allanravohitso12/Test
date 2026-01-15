import React from 'react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40 flex flex-col items-center text-center overflow-hidden">
      
      {/* Background Decorative Gradients - Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/50 dark:from-blue-900/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none opacity-60 transition-colors duration-500" />

      {/* Badge / Bubble */}
      <div className="mb-8 animate-fade-in-up">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm transition-all hover:scale-105 cursor-default hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700">
          <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-pulse" />
          CRÉER UN SITE WEB VRAIMENT UNIQUE
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-6 drop-shadow-sm animate-slide-in-left delay-100 transition-colors duration-300">
        Votre site doit donner envie de <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 hover:scale-105 transition-transform cursor-default">rester</span>, <br className="hidden md:block" />
        pas de revenir en arrière.
      </h1>

      {/* Subheadline */}
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-up delay-200 transition-colors duration-300">
        Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos
        visiteurs et vous apporte des résultats.
      </p>

      {/* Buttons & Decorative Elements */}
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
        
        {/* Decorative "Un p'tit click ?" Image placeholder */}
        {/* Positioning absolute relative to the button group */}
        <div className="absolute -left-32 -top-12 hidden lg:block pointer-events-none select-none rotate-[-12deg] animate-float">
             {/* Simulating the handwritten arrow/text asset */}
             <div className="relative">
                <span className="font-handwriting text-gray-400 dark:text-gray-500 text-xl rotate-[-12deg] absolute -top-8 left-0 whitespace-nowrap">Un p'tit click ?</span>
                <svg width="80" height="40" viewBox="0 0 100 50" fill="none" className="text-gray-300 dark:text-gray-600">
                  <path d="M10 10 C 30 5, 70 5, 90 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M90 30 L 80 25 M 90 30 L 85 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
             </div>
        </div>

        <button 
          className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 focus:outline-none flex items-center justify-center gap-2"
          aria-label="Prendre rendez-vous"
        >
          <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
          Prendre RDV
        </button>

        <button 
          className="group w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none"
          aria-label="Découvrir nos projets"
        >
          Découvrir nos projets
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
};

export default Hero;