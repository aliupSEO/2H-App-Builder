import { HeaderBadge } from "@/components/splash/HeaderBadge";
import { MainHeading } from "@/components/splash/MainHeading";
import { SearchInput } from "@/components/splash/SearchInput";
import { ActionButtons } from "@/components/splash/ActionButtons";
import { Footer } from "@/components/splash/Footer";

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden px-6 lg:px-0">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-glow opacity-50 pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center gap-12 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <HeaderBadge />
        
        <div className="flex flex-col items-center gap-8 w-full mt-10">
          <MainHeading />
          <SearchInput />
          <ActionButtons />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
