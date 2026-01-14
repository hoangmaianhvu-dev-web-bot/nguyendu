
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import Slide from './components/Slide';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToc, setShowToc] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

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
    };

    const handleMouseClick = (e: MouseEvent) => {
      // Button 0 = Chuột trái -> Next
      if (e.button === 0) {
        const target = e.target as HTMLElement;
        // Tránh click vào assistant hoặc menu
        if (target.closest('button') || target.closest('input') || target.closest('.assistant-container')) return;
        nextSlide();
      }
      // Button 2 = Chuột phải -> Prev
      if (e.button === 2) {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // Luôn chặn menu chuột phải
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
    <div className="relative w-screen h-screen overflow-hidden bg-[#242424] text-white selection:bg-yellow-500/30">
      
      {/* Texture Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      {/* Slide Container */}
      <main className="relative w-full h-full">
        {SLIDES.map((slide, index) => (
          <Slide 
            key={slide.id} 
            slide={slide} 
            isActive={index === currentIndex} 
          />
        ))}
      </main>

      {/* Modern HUD Bar (Top Progress) */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-white/5 z-[60]">
        <div 
          className="h-full bg-yellow-500 shadow-[0_0_12px_rgba(202,138,4,0.8)] transition-all duration-700 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-6 pointer-events-auto bg-black/20 backdrop-blur-xl p-4 px-6 rounded-2xl border border-white/10">
          <div className="w-12 h-12 border-2 border-yellow-600/50 flex items-center justify-center font-serif-title text-2xl font-black text-yellow-500 bg-black/40">
            ND
          </div>
          <div className="border-l border-white/10 pl-6">
            <h1 className="text-[12px] font-black tracking-[0.4em] uppercase text-white drop-shadow-md">Nguyễn Du & Truyện Kiều</h1>
            <p className="text-[10px] text-yellow-500 uppercase tracking-[0.2em] mt-1 font-bold">Chuyên Đề Di Sản Văn Chương</p>
          </div>
        </div>

        <button 
          onClick={() => setShowToc(!showToc)}
          className="pointer-events-auto bg-black/20 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-yellow-500 hover:bg-yellow-600 hover:text-black transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </header>

      {/* Navigation Instruction HUD */}
      <footer className="fixed bottom-0 left-0 w-full p-10 flex justify-between items-end z-50 pointer-events-none">
        <div className="bg-black/30 backdrop-blur-xl p-4 px-6 border border-white/10 rounded-2xl pointer-events-auto">
          <div className="text-[24px] font-black font-serif-title flex items-baseline gap-2">
            <span className="text-white">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-yellow-600/40 text-sm">/ 30</span>
          </div>
        </div>
        
        <div className="flex gap-6 pointer-events-auto">
           <div className="hidden lg:flex items-center gap-6 text-[10px] text-white/40 uppercase tracking-[0.3em] font-black bg-black/30 backdrop-blur-xl px-8 py-4 rounded-full border border-white/5">
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-yellow-600"></div> Chuột Phải: Lùi</span>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-yellow-600 animate-pulse"></div> Chuột Trái: Tiếp</span>
           </div>
           
           <div className="flex gap-3">
             <button 
                disabled={currentIndex === 0}
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/20 hover:bg-yellow-600 hover:text-black disabled:opacity-5 disabled:cursor-not-allowed transition-all duration-400 backdrop-blur-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                disabled={currentIndex === SLIDES.length - 1}
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl bg-black/20 hover:bg-yellow-600 hover:text-black disabled:opacity-5 disabled:cursor-not-allowed transition-all duration-400 backdrop-blur-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
           </div>
        </div>
      </footer>

      {/* Menu Navigation Overlay */}
      {showToc && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-10 lg:p-24 overflow-hidden">
          <div className="max-w-7xl w-full h-full flex flex-col">
            <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-10">
              <div>
                <h2 className="text-6xl font-serif-title font-black text-yellow-500 italic">Mục Lục Di Sản</h2>
                <p className="text-sm uppercase tracking-[0.5em] text-white/30 mt-3 font-bold">Lưu Trữ Chi Tiết 30 Chương Mục</p>
              </div>
              <button 
                onClick={() => setShowToc(false)}
                className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 pr-10 custom-scrollbar">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowToc(false);
                  }}
                  className={`group text-left p-6 rounded-2xl transition-all flex items-center gap-6 border-l-4 ${
                    currentIndex === idx 
                      ? 'bg-yellow-600/10 border-yellow-500' 
                      : 'border-white/5 hover:border-yellow-500/50 hover:bg-white/5'
                  }`}
                >
                  <span className={`text-xs font-mono font-black ${currentIndex === idx ? 'text-yellow-500' : 'text-white/20'}`}>
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

      {/* Literary Assistant */}
      <div className="assistant-container">
        <Assistant currentSlideTitle={SLIDES[currentIndex].title} />
      </div>
    </div>
  );
};

export default App;
