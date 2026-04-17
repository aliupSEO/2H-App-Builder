import { FileCode, Play, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodePanelProps {
  code: string;
  onChange: (value: string) => void;
}

export function CodePanel({ code, onChange }: CodePanelProps) {
  const [copied, setCopied] = useState(false);
  const lineCount = code.split('\n').length;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0d0d] relative group">
      {/* Header */}
      <div className="h-10 px-4 border-b border-white/5 flex items-center justify-between bg-neutral-900/40">
        <div className="flex items-center gap-2">
          <FileCode className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-medium text-white/60 tracking-tight">
            App.tsx
          </span>
        </div>
        <div className="flex items-center gap-2">
           <button 
            onClick={handleCopy}
            className="p-1.5 hover:bg-white/5 rounded text-white/40 hover:text-white transition-all"
           >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
           </button>
           <div className="w-px h-3 bg-white/10 mx-0.5" />
           <button className="flex items-center gap-1.5 px-2.5 py-1 bg-brand/10 text-brand rounded text-[10px] font-bold uppercase tracking-wider hover:bg-brand/20 transition-all border border-brand/20">
            <Play className="size-2.5 fill-current" />
            Run
           </button>
        </div>
      </div>

      {/* Editor Main Content */}
      <div className="flex-1 flex overflow-hidden font-mono text-sm relative">
        {/* Line Numbers */}
        <div className="w-12 bg-neutral-900/20 text-right pr-4 py-4 select-none pointer-events-none text-white/10">
          {Array.from({ length: Math.max(lineCount, 20) }).map((_, i) => (
            <div key={i} className="h-6 leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
          className="flex-1 bg-transparent text-white/90 p-4 resize-none focus:outline-none scrollbar-hide leading-6 selection:bg-brand/20"
          autoFocus
        />
        
        {/* Subtle overlay glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 blur-3xl pointer-events-none" />
      </div>

      {/* Footer Info */}
      <div className="h-6 px-4 bg-neutral-900/60 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30 font-medium tracking-tight">
        <div className="flex gap-4">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
        </div>
        <div className="flex gap-4">
          <span>Ln {code.split('\n').length}, Col {code.length}</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  );
}
