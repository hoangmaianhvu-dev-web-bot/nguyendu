
import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../types.ts';
import { SLIDES } from '../constants.tsx';

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 w-full h-full flex flex-col md:flex-row bg-[#242424]"
    >
      {/* Visual Side (Left) */}
      <div className="relative w-full md:w-5/12 h-[35%] md:h-full overflow-hidden shrink-0 shadow-2xl z-10">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={slide.image} 
          alt={slide.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1200";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#242424] hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent md:hidden"></div>
        
        <div className="absolute bottom-10 left-10 text-[120px] md:text-[200px] font-black font-serif-title text-white/5 select-none pointer-events-none italic leading-none">
          {String(slide.id).padStart(2, '0')}
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="w-full md:w-7/12 h-[65%] md:h-full flex items-center justify-center p-6 md:p-12 lg:p-20 bg-[#242424] overflow-y-auto custom-scrollbar relative">
        <div className="max-w-2xl w-full py-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[2px] w-10 bg-yellow-600"></div>
            <span className="text-[12px] font-bold tracking-[0.3em] text-yellow-600 uppercase">
              {slide.category}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif-title font-bold text-white mb-8 leading-tight border-l-4 border-yellow-600 pl-6"
          >
            {slide.title}
          </motion.h2>

          <div className="space-y-6">
            {slide.content.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex gap-4 items-start"
              >
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0 shadow-[0_0_8px_rgba(202,138,4,0.6)]"></div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light italic">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/60 font-bold"
          >
            <span>Báo cáo chuyên đề di sản</span>
            <span>Trang {slide.id}/{SLIDES.length}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
