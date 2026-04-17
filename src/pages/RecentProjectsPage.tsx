import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { mockProjects } from "@/data/mockProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecentProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center relative overflow-x-hidden pt-12 pb-24 px-6 lg:px-0">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
      
      <div className="z-10 flex flex-col gap-16 w-full max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm w-fit group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Dashboard
            </button>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Recent Projects
              </h1>
              <p className="text-lg text-white/50 max-w-2xl">
                Continue where you left off. Manage and edit your recently created applications and templates.
              </p>
            </div>
          </div>
          
          <Button className="rounded-full px-8 h-12 bg-white text-black hover:bg-white/90 transition-all gap-2 font-semibold">
            <Plus className="w-5 h-5" />
            New Project
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-xl font-medium text-white/80">All Projects</h2>
            <div className="text-sm text-white/40">
              Showing {mockProjects.length} projects
            </div>
          </div>
          
          <ProjectGrid projects={mockProjects} />
        </div>
      </div>
      
      {/* Footer-like subtle decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}
