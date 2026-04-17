import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Monitor, 
  Smartphone, 
  Share2, 
  Rocket, 
  History,
  Layout,
  Code2,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export type ViewMode = "code" | "preview";

interface EditorHeaderProps {
  projectName: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function EditorHeader({ projectName, viewMode, onViewModeChange }: EditorHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="h-14 border-b border-white/10 bg-neutral-900/50 backdrop-blur-xl flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="h-4 w-px bg-white/10 mx-1" />
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center border border-brand/20">
            <Layout className="w-4 h-4 text-brand" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white tracking-tight leading-tight">
              {projectName}
            </span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
              Previewing latest version
            </span>
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/5 shadow-2xl">
        <button 
          onClick={() => onViewModeChange("code")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            viewMode === "code" 
              ? "bg-white/10 text-white shadow-sm" 
              : "text-white/40 hover:text-white/60"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          Code
        </button>
        <button 
          onClick={() => onViewModeChange("preview")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            viewMode === "preview" 
              ? "bg-white/10 text-white shadow-sm" 
              : "text-white/40 hover:text-white/60"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          Preview
        </button>
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end">
        <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/5 mr-4">
          <button className="p-1.5 bg-white/10 text-white rounded-md transition-all">
            <Monitor className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-md transition-all">
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors group relative">
          <History className="w-5 h-5" />
          <span className="absolute top-full right-0 mt-2 px-2 py-1 bg-neutral-800 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            History
          </span>
        </button>

        <div className="h-4 w-px bg-white/10 mx-2" />

        <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5 gap-2 h-9 px-3 text-sm">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
        <Button className="bg-brand text-brand-foreground hover:bg-brand/90 gap-2 h-9 px-4 text-sm font-semibold">
          <Rocket className="w-4 h-4" />
          Publish
        </Button>
      </div>
    </header>
  );
}
