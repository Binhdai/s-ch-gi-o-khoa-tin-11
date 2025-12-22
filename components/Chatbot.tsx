
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào sĩ tử! Mình là trợ lý AI chuyên về Tin học 11. Cần mình giải đáp kiến thức nào không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToAI(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-[400px] h-[550px] glass-morphism rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-gradient-to-r from-teal-700 to-slate-900 p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-robot text-lg"></i>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div>
                <span className="block font-bold text-sm tracking-wide">Gemini Assistant</span>
                <span className="block text-[10px] text-teal-300 font-bold uppercase tracking-widest">Đang trực tuyến</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#f8fafc]/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-slate-100 bg-white">
            <div className="flex gap-3 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-100 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi bất cứ điều gì về bài học..."
                className="flex-1 bg-transparent border-none px-3 py-2 text-sm focus:outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-teal-600 text-white w-10 h-10 rounded-xl hover:bg-teal-700 disabled:opacity-50 transition-all flex items-center justify-center shadow-lg shadow-teal-100"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white w-16 h-16 rounded-2xl shadow-2xl hover:bg-teal-600 hover:scale-110 transition-all duration-500 flex items-center justify-center relative group"
      >
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-[#f0f4f8] animate-pulse"></div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl group-hover:rotate-12 transition-transform`}></i>
      </button>
    </div>
  );
};

export default Chatbot;
