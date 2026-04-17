import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.thumbnailUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="bg-neutral-900/50 backdrop-blur-md border-white/10 text-white/80 text-[10px] uppercase tracking-wider">
            {project.category}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-glow-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(project.updatedAt).toLocaleDateString()}</span>
          </div>
          
          <button className="flex items-center gap-1 text-white/60 hover:text-white text-xs font-medium transition-colors group/btn">
            Open Project
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </div>
  );
}
