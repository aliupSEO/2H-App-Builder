import { RotateCcw, ExternalLink, ShieldCheck, Globe } from "lucide-react";

interface PreviewPanelProps {
  code: string;
}

export function PreviewPanel({ code: _code }: PreviewPanelProps) {
  // In a real app, this would be a sandboxed iframe or a dynamically compiled react component.
  // For this demo, we'll show it as a clean "Browser" window.
  
  return (
    <div className="flex flex-col h-full bg-[#fafafa] relative overflow-hidden">
      {/* Browser Bar */}
      <div className="h-10 px-4 flex items-center gap-3 bg-white border-b border-neutral-200">
        <div className="flex gap-1.5 mr-2">
          <div className="size-2.5 rounded-full bg-[#ff5f57]" />
          <div className="size-2.5 rounded-full bg-[#febc2e]" />
          <div className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        
        <div className="flex-1 max-w-xl h-7 bg-neutral-100 rounded-md flex items-center px-3 border border-neutral-200">
          <ShieldCheck className="size-3 text-green-600 mr-2" />
          <span className="text-[11px] text-neutral-500 font-medium truncate">
            https://2h-app-preview.internal/dashboard
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors">
            <RotateCcw className="size-3.5" />
          </button>
          <button className="p-1.5 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors">
            <ExternalLink className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-neutral-100 p-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] min-h-full p-8 border border-neutral-200 relative overflow-hidden">
          {/* Mock App Content based on "code" */}
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <div className="h-8 w-48 bg-neutral-100 rounded-lg animate-pulse" />
              <div className="h-4 w-72 bg-neutral-50 rounded-lg animate-pulse" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="h-32 bg-neutral-50 rounded-xl border border-dashed border-neutral-200 flex items-center justify-center">
                <span className="text-xs text-neutral-400 font-medium uppercase tracking-widest">Analytics Section</span>
              </div>
              <div className="h-32 bg-neutral-50 rounded-xl border border-dashed border-neutral-200 flex items-center justify-center">
                <span className="text-xs text-neutral-400 font-medium uppercase tracking-widest">Sales Overview</span>
              </div>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-neutral-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-1/3 bg-neutral-100 rounded" />
                    <div className="h-2 w-1/2 bg-neutral-50 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Overlay Indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest">
            <div className="size-1.5 rounded-full bg-brand animate-pulse" />
            Live Sync
          </div>
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="h-6 bg-white border-t border-neutral-200 flex items-center px-4 justify-between">
         <div className="flex items-center gap-3">
            <span className="text-[10px] text-neutral-400 font-medium flex items-center gap-1">
              <Globe className="size-2.5" />
              127.0.0.1:5173
            </span>
         </div>
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-green-600 uppercase">Compiled Successfully</span>
         </div>
      </div>
    </div>
  );
}
