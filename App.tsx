
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SLIDES } from './constants.tsx';
import Slide from './components/Slide.tsx';
import Assistant from './components/Assistant.tsx';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToc, setShowToc] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const autoPlayTimerRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev < SLIDES.length - 1 ? prev + 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : SLIDES.length - 1));
  }, []);

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayTimerRef.current = window.setInterval(nextSlide, 10000);
    } else {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'Escape') setShowToc(false);
      if (e.key === 'p' || e.key === 'P') setIsAutoPlay(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a1a1a] text-white selection:bg-yellow-500/30">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      <main className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {SLIDES[currentIndex] && (
            <Slide 
              key={currentIndex} 
              slide={SLIDES[currentIndex]} 
              isActive={true} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex items-center gap-4 md:gap-6 pointer-events-auto bg-black/40 backdrop-blur-xl p-3 md:p-4 px-5 md:px-6 rounded-2xl border border-white/10 shadow-2xl">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-yellow-600/50 flex items-center justify-center font-serif-title text-xl md:text-2xl font-black text-yellow-500 bg-black/40 rounded-lg">
            ND
          </div>
          <div className="border-l border-white/20 pl-4 md:pl-6">
            <h1 className="text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-white leading-tight">Nguyễn Du & Truyện Kiều</h1>
            <p className="text-[8px] md:text-[10px] text-yellow-500 uppercase tracking-[0.2em] mt-1 font-bold">Tư tưởng Nhân đạo vĩnh cửu</p>
          </div>
        </div>

        <div className="flex gap-3 pointer-events-auto">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`p-4 rounded-2xl border transition-all flex items-center gap-2 ${isAutoPlay ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : 'border-white/10 text-white/60 bg-black/40'}`}
          >
            <span className="text-[10px] font-bold tracking-widest">{isAutoPlay ? "STOP" : "AUTO"}</span>
          </button>
          <button 
            onClick={() => setShowToc(!showToc)}
            className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-yellow-500 hover:bg-yellow-600 hover:text-black transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </header>

      <footer className="fixed bottom-0 left-0 w-full p-6 md:p-10 flex justify-between items-end z-50 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-xl p-4 px-6 border border-white/10 rounded-2xl pointer-events-auto shadow-2xl">
          <div className="text-[20px] md:text-[24px] font-black font-serif-title flex items-baseline gap-2">
            <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-yellow-600/40 text-sm">/ {SLIDES.length}</span>
          </div>
        </div>
        
        <div className="flex gap-3 pointer-events-auto">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/40 hover:bg-yellow-600 hover:text-black transition-all backdrop-blur-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/40 hover:bg-yellow-600 hover:text-black transition-all backdrop-blur-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </footer>

      {showToc && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-24">
          <div className="max-w-5xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-8">
              <h2 className="text-4xl font-serif-title font-black text-yellow-500 italic">Mục Lục Di Sản</h2>
              <button onClick={() => setShowToc(false)} className="text-white hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 pr-4 custom-scrollbar">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => { setCurrentIndex(idx); setShowToc(false); }}
                  className={`group text-left p-4 rounded-xl transition-all border-l-4 ${currentIndex === idx ? 'bg-yellow-600/20 border-yellow-500' : 'border-white/5 hover:border-yellow-500/50 hover:bg-white/5'}`}
                >
                  <span className="text-xs font-mono font-black text-yellow-500 mr-4">{String(slide.id).padStart(2, '0')}</span>
                  <span className="text-sm uppercase tracking-wider font-bold text-white/80 group-hover:text-white">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Assistant currentSlideTitle={SLIDES[currentIndex]?.title || ""} />
    </div>
  );
};

export default App;
