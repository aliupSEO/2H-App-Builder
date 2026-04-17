import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, RefreshCw, Plus, Image as ImageIcon, Zap, Layout } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI builder. How can I help you refine your application today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I've updated the dashboard layout and added a new analytics section based on your request. Take a look at the preview!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-neutral-900 border-r border-white/5 w-[400px] shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand" />
          <span className="font-semibold text-sm text-white">AI Builder</span>
        </div>
        <button className="p-1.5 hover:bg-white/5 rounded-md text-white/40 hover:text-white transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
              msg.role === 'assistant' 
                ? 'bg-brand/10 border-brand/20 text-brand' 
                : 'bg-white/5 border-white/10 text-white/50'
            }`}>
              {msg.role === 'assistant' ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
            </div>
            <div className={`flex flex-col gap-2 max-w-[85%] ${msg.role === 'user' ? 'items-end' : ''}`}>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'assistant' 
                  ? 'bg-white/5 text-white/80 rounded-tl-none' 
                  : 'bg-brand/80 text-black font-medium border border-white/10 rounded-tr-none'
              }`}>
                {msg.content}
              </div>
              <span className="text-[10px] text-white/20 px-1 font-medium italic">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide no-scrollbar">
         <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] text-white/60 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap">
            <Zap className="w-3 h-3 text-brand" />
            Add chart
         </button>
         <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] text-white/60 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap">
            <Layout className="w-3 h-3 text-blue-400" />
            New page
         </button>
         <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] text-white/60 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap">
            <RefreshCw className="w-3 h-3 text-purple-400" />
            Change theme
         </button>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-neutral-900/50">
        <div className="relative group">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask AI to build something..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand/40 min-h-[44px] max-h-32 resize-none transition-all"
            rows={1}
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
             <button className="p-1.5 text-white/20 hover:text-white/40 transition-colors">
                <ImageIcon className="w-4 h-4" />
             </button>
             <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-1.5 rounded-xl transition-all ${
                  input.trim() 
                    ? 'bg-brand text-black hover:scale-105 active:scale-95' 
                    : 'bg-white/5 text-white/20'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
