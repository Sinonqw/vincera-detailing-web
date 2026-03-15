import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 min-h-screen w-full flex items-center justify-center overflow-hidden">
      <HeroVideo />
      
      <HeroContent />

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary/50 z-10">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;