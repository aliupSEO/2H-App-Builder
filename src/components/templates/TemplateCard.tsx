import type { Template } from "@/types/template";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={template.thumbnailUrl} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
        
        {/* Pricing Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant="default" 
            className={`${template.price === 'Premium' ? 'bg-brand text-brand-foreground' : 'bg-white/10 text-white/70'} border-transparent text-[10px] font-bold px-2 py-0.5`}
          >
            {template.price}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="bg-black/40 backdrop-blur-md border-white/10 text-white/80 text-[10px] uppercase tracking-wider">
            {template.category}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
            {template.name}
          </h3>
          <p className="text-sm text-white/50 line-clamp-2 leading-relaxed h-10">
            {template.description}
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {template.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] text-white/30 border border-white/5 px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        <button className="w-full mt-2 py-2.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm group/btn">
          <Sparkles className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          Use Template
          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
        </button>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </div>
  );
}
