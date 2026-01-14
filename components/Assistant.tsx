
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

interface AssistantProps {
  currentSlideTitle: string;
}

const Assistant: React.FC<AssistantProps> = ({ currentSlideTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const prompt = `Đang ở Slide: "${currentSlideTitle}". Câu hỏi của tôi: ${input}`;
      const response = await getGeminiResponse(messages, prompt);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "Lỗi hệ thống. Vui lòng thử lại sau." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 assistant-container">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#5c1a1a] hover:bg-[#7c1a1a] text-yellow-400 w-16 h-16 rounded-full shadow-[0_0_20px_rgba(92,26,26,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-yellow-700/30"
        aria-label="Toggle Assistant"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.082.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.082.477-4 1.253" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] md:w-[420px] h-[580px] bg-[#fdfaf2] border border-yellow-800/20 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden text-gray-900 border-b-4 border-b-red-900 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#5c1a1a] p-5 text-white flex items-center gap-4 border-b border-yellow-700/20">
            <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-[#5c1a1a] font-serif-title font-black shadow-inner">N</div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase">Tri Kỷ Văn Chương</h3>
              <p className="text-[10px] text-yellow-500/80 font-bold uppercase tracking-widest">Hỏi về Tư tưởng Nhân đạo</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] custom-scrollbar">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full opacity-40 text-center px-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <p className="text-xs font-serif italic">
                  "Chữ Tâm kia mới bằng ba chữ Tài..." <br/>
                  Mời bạn đàm đạo về kiệt tác của cụ Tố Như.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#5c1a1a] text-white rounded-br-none shadow-md font-medium' 
                    : 'bg-white border border-yellow-900/10 text-gray-800 rounded-bl-none shadow-sm font-serif italic'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-yellow-900/10 shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-800 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-red-800 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-red-800 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white border-t border-yellow-900/5 flex gap-3 items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Gửi tâm tình đến học giả..."
              className="flex-1 bg-gray-50 border-none rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c1a1a] transition-all placeholder:italic placeholder:text-gray-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#5c1a1a] text-yellow-400 p-3 rounded-2xl hover:bg-[#7c1a1a] transition-all disabled:opacity-50 shadow-md group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
