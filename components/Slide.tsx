
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full flex flex-col md:flex-row bg-[#242424]"
        >
          {/* Visual Side (Left) - Enhanced with Parallax effect on entry */}
          <motion.div 
            initial={{ scale: 1.15, opacity: 0, x: -30 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full md:w-5/12 h-[35%] md:h-full overflow-hidden shrink-0 shadow-2xl z-10"
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] transition-transform duration-10000 ease-linear transform scale-105"
              onError={(e) => {
                // Fallback nếu link ảnh bị lỗi hoặc bị chặn hotlinking
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            {/* Artistic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#242424] hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent md:hidden"></div>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            
            {/* Giant Slide Number Accent */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="absolute bottom-10 left-10 text-[200px] font-black font-serif-title text-white select-none pointer-events-none italic leading-none"
            >
              {String(slide.id).padStart(2, '0')}
            </motion.div>
          </motion.div>

          {/* Content Side (Right) */}
          <div className="w-full md:w-7/12 h-[65%] md:h-full flex items-center justify-center p-6 md:p-12 lg:p-20 bg-[#242424] overflow-y-auto custom-scrollbar relative">
            <div className="max-w-3xl w-full py-10">
              
              {/* Category Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 md:mb-8 flex items-center gap-5"
              >
                <div className="h-[2px] w-14 bg-yellow-600 shadow-[0_0_10px_rgba(202,138,4,0.5)]"></div>
                <span className="text-[12px] md:text-[14px] font-bold tracking-[0.5em] text-yellow-600 uppercase drop-shadow-sm">
                  {slide.category}
                </span>
              </motion.div>
              
              {/* Professional Title */}
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-[2.4rem] font-serif-title font-bold text-white mb-8 md:mb-12 leading-[1.3] border-l-4 border-yellow-600 pl-8 md:pl-10 drop-shadow-lg"
              >
                {slide.title}
              </motion.h2>

              {/* Detailed Points - Optimized for Reading and Note-taking */}
              <div className="space-y-6 md:space-y-8">
                {slide.content.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.15), duration: 0.6 }}
                    className="flex gap-5 md:gap-7 items-start group"
                  >
                    <div className="mt-2.5 md:mt-3.5 w-2 h-2 rounded-full bg-yellow-600 shrink-0 shadow-[0_0_12px_rgba(202,138,4,0.6)] group-hover:bg-yellow-400 group-hover:scale-125 transition-all duration-300"></div>
                    <p className="text-base md:text-lg lg:text-[1.15rem] text-gray-200 leading-[1.7] font-serif font-light tracking-wide">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Canva Element */}
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-14 md:mt-20 h-[1px] bg-gradient-to-r from-yellow-600/50 via-yellow-600/20 to-transparent origin-left"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.8 }}
                className="mt-6 md:mt-8 flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/80 font-bold mb-1">
                    BÁO CÁO CHUYÊN ĐỀ DI SẢN
                  </p>
                  <p className="text-[9px] text-yellow-600 font-bold">DÂN TỘC VIỆT NAM • THẾ KỶ XVIII</p>
                </div>
                <p className="text-[11px] font-mono font-black text-yellow-600 bg-yellow-600/10 px-3 py-1 rounded">TRANG {slide.id}/30</p>
              </motion.div>
            </div>
          </div>
          
          {/* Subtle Dynamic Light Layer */}
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_70%_30%,rgba(120,80,0,0.03),transparent_70%)] pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
