import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, Send, Cpu } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const AIArchitect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the Yulwa Cloud Architect. Your job is to help users find the perfect hosting or web development solution on the Yulwa.com platform. Yulwa means 'Sky' in Tibetan. Be helpful, professional, and tech-savvy. Recommend specific tiers: Cloud Starter, Sky Pro, or Zenith Enterprise based on their needs.",
        },
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Try asking about our Sky Pro plan!";
      setChatHistory(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'ai', text: "High latency in the stratosphere. Please try again soon!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="sky-gradient w-16 h-16 rounded-2xl shadow-2xl shadow-lime-500/40 flex items-center justify-center text-black hover:scale-110 transition-transform animate-pulse"
        >
          <Sparkles className="w-8 h-8" />
        </button>
      ) : (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="sky-gradient p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black/20 rounded-xl flex items-center justify-center">
                <Cpu className="text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-black font-bold leading-none">Cloud Architect AI</h4>
                <span className="text-black/60 text-[10px] uppercase font-bold tracking-widest">Powered by Gemini</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/80 hover:text-black transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-950/50">
            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
              <p className="text-slate-800 dark:text-slate-300 text-sm">Hello! I'm your Yulwa Architect. What kind of project are you launching in our Sky today?</p>
            </div>
            {chatHistory.map((chat, idx) => (
              <div 
                key={idx} 
                className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`p-3 rounded-2xl max-w-[85%] text-sm shadow-sm ${
                  chat.role === 'user' 
                    ? 'bg-lime-500 text-black rounded-tr-none font-medium' 
                    : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-slate-300 rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/5 p-3 rounded-2xl animate-pulse text-slate-500 text-xs shadow-sm">Architect is calculating...</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900">
            <div className="relative">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about hosting..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-lime-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={!message.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-lime-600 dark:text-lime-400 hover:text-lime-500 disabled:text-slate-400 dark:disabled:text-slate-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};