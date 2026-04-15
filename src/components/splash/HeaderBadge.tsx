import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function HeaderBadge() {
  return (
    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
      <Badge className="bg-brand text-brand-foreground hover:bg-brand/90 font-bold px-1.5 py-0 h-5 text-[10px]">
        NEW
      </Badge>
      <span className="text-sm text-white/80 font-medium">
        Go beyond building apps with 2H App Builder
      </span>
      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
    </div>
  );
}
