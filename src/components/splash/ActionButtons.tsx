import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="flex items-center gap-8">
      <Button 
        variant="outline" 
        className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black transition-all bg-transparent"
      >
        Browse Templates
      </Button>
      <button className="text-white/60 hover:text-white transition-colors font-medium text-sm">
        View Past Projects
      </button>
    </div>
  );
}
