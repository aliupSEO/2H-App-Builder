import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { mockTemplates } from "@/data/mockTemplates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BrowseTemplatesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center relative overflow-x-hidden pt-12 pb-24 px-6 lg:px-0">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
      
      <div className="z-10 flex flex-col gap-12 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm w-fit group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Browse Templates
              </h1>
              <p className="text-lg text-white/50 max-w-2xl">
                Ready-to-use application structures. Pick a template to jumpstart your development process.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-white transition-colors" />
                <Input 
                  placeholder="Search templates..." 
                  className="pl-10 w-full md:w-64 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-white/20 transition-all h-11"
                />
              </div>
              <Button variant="outline" className="h-11 rounded-xl border-white/10 bg-white/5 text-white/70 hover:bg-white/10 px-4 gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Bar (Static for now) */}
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['All Templates', 'E-commerce', 'Dashboard', 'Landing Page', 'Portfolio', 'Social', 'AI Tools'].map((cat, i) => (
            <button 
              key={cat}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-white text-black' : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-xl font-medium text-white/80">Available Templates</h2>
            <div className="text-sm text-white/40">
              {mockTemplates.length} stunning foundations
            </div>
          </div>
          
          <TemplateGrid templates={mockTemplates} />
        </div>
      </div>
      
      {/* Footer subtle decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}
