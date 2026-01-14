
import React, { useState, useEffect, useCallback, useRef } from 'react';
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

  // Handle Auto-play logic
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayTimerRef.current = window.setInterval(() => {
        nextSlide();
      }, 8000); // 8 seconds per slide
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
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

    const handleMouseClick = (e: MouseEvent) => {
      // Ignore clicks on interactive elements
      const target = e.target as HTMLElement;
      if (
        target.closest('button') || 
        target.closest('input') || 
        target.closest('.assistant-container') ||
        target.closest('.controls-panel')
      ) return;

      if (e.button === 0) {
        nextSlide();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseClick);
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseClick);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [nextSlide, prevSlide]);

  const progress = ((currentIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a1a1a] text-white selection:bg-yellow-500/30">
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      <main className="relative w-full h-full">
        {SLIDES.map((slide, index) => (
          index === currentIndex && (
            <Slide 
              key={slide.id} 
              slide={slide} 
              isActive={true} 
            />
          )
        ))}
      </main>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-1000 ease-in-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex items-center gap-4 md:gap-6 pointer-events-auto bg-black/40 backdrop-blur-2xl p-3 md:p-4 px-5 md:px-6 rounded-2xl border border-white/10 shadow-2xl">
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-yellow-600/50 flex items-center justify-center font-serif-title text-xl md:text-2xl font-black text-yellow-500 bg-black/40 rounded-lg">
            ND
          </div>
          <div className="border-l border-white/20 pl-4 md:pl-6">
            <h1 className="text-[10px] md:text-[12px] font-black tracking-[0.4em] uppercase text-white drop-shadow-md leading-tight">Nguyễn Du & Truyện Kiều</h1>
            <p className="text-[8px] md:text-[10px] text-yellow-500 uppercase tracking-[0.2em] mt-1 font-bold">Tư tưởng Nhân đạo vĩnh cửu</p>
          </div>
        </div>

        <div className="flex gap-3 pointer-events-auto controls-panel">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            title={isAutoPlay ? "Dừng tự động chạy" : "Tự động chạy (P)"}
            className={`bg-black/40 backdrop-blur-2xl p-4 rounded-2xl border transition-all flex items-center gap-2 ${isAutoPlay ? 'border-yellow-500 text-yellow-500' : 'border-white/10 text-white/60 hover:text-white'}`}
          >
            {isAutoPlay ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
            <span className="text-[10px] font-bold tracking-widest hidden md:inline">{isAutoPlay ? "AUTO ON" : "AUTO OFF"}</span>
          </button>

          <button 
            onClick={() => setShowToc(!showToc)}
            className="bg-black/40 backdrop-blur-2xl p-4 rounded-2xl border border-white/10 text-yellow-500 hover:bg-yellow-600 hover:text-black transition-all group shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
      </header>

      <footer className="fixed bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-center md:items-end z-50 pointer-events-none gap-4">
        <div className="bg-black/40 backdrop-blur-2xl p-4 px-6 border border-white/10 rounded-2xl pointer-events-auto shadow-2xl">
          <div className="text-[20px] md:text-[24px] font-black font-serif-title flex items-baseline gap-2">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-yellow-600/40 text-sm">/ {SLIDES.length}</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 pointer-events-auto">
           <div className="hidden xl:flex items-center gap-6 text-[9px] text-white/40 uppercase tracking-[0.3em] font-black bg-black/40 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/5 shadow-xl">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div> Chuột Phải: Lùi</span>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-600 animate-pulse"></div> Chuột Trái: Tiếp</span>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div> P: Tự động</span>
           </div>
           
           <div className="flex gap-3">
             <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/40 hover:bg-yellow-600 hover:text-black transition-all duration-400 backdrop-blur-2xl shadow-xl group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/40 hover:bg-yellow-600 hover:text-black transition-all duration-400 backdrop-blur-2xl shadow-xl group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
           </div>
        </div>
      </footer>

      {showToc && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-10 lg:p-24 overflow-hidden">
          <div className="max-w-7xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif-title font-black text-yellow-500 italic drop-shadow-2xl">Mục Lục Di Sản</h2>
                <p className="text-xs uppercase tracking-[0.5em] text-white/30 mt-3 font-bold">Lưu Trữ Chi Tiết {SLIDES.length} Chương Mục • Tư tưởng Nhân bản</p>
              </div>
              <button 
                onClick={() => setShowToc(false)}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shadow-2xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 pr-4 custom-scrollbar">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowToc(false);
                  }}
                  className={`group text-left p-4 rounded-xl transition-all flex items-center gap-4 border-l-4 ${
                    currentIndex === idx 
                      ? 'bg-yellow-600/20 border-yellow-500 shadow-lg' 
                      : 'border-white/5 hover:border-yellow-500/50 hover:bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-mono font-black w-6 ${currentIndex === idx ? 'text-yellow-500' : 'text-white/20'}`}>
                    {String(slide.id).padStart(2, '0')}
                  </span>
                  <span className={`text-sm uppercase tracking-wider font-bold truncate transition-colors ${
                    currentIndex === idx ? 'text-white' : 'text-white/40 group-hover:text-white'
                  }`}>
                    {slide.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Assistant currentSlideTitle={SLIDES[currentIndex].title} />
    </div>
  );
};

export default App;
