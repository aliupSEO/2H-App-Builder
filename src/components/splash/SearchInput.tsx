import { Plus, MessageCircle, Mic, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <div className="relative w-full max-w-2xl group">
      <div className="absolute inset-0 bg-brand/5 blur-2xl group-focus-within:bg-brand/10 transition-colors rounded-full" />
      <div className="relative flex items-center bg-black/40 border border-white/10 rounded-2xl px-4 py-3 gap-3 focus-within:border-white/20 transition-all shadow-2xl">
        <button className="text-white/40 hover:text-white/60 transition-colors p-1">
          <Plus className="w-5 h-5" />
        </button>
        
        <Input 
          className="bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-white/30 text-lg px-0 h-auto"
          placeholder="Ask anything..."
        />
        
        <div className="flex items-center gap-4">
          <button className="text-white/40 hover:text-white/60 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="text-white/40 hover:text-white/60 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          <button className="bg-brand rounded-full p-2 text-brand-foreground hover:bg-brand/90 transition-transform active:scale-95">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
