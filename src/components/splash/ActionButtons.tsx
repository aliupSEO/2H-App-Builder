import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ActionButtons() {
  return (
    <div className="flex items-center gap-8">
      <Link 
        to="/templates"
        className="rounded-full px-8 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-all bg-transparent font-medium text-sm"
      >
        Browse Templates
      </Link>
      <Link 
        to="/recent-projects" 
        className="text-white/60 hover:text-white transition-colors font-medium text-sm"
      >
        View Past Projects
      </Link>
    </div>
  );
}
