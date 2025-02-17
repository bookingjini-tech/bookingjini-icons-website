import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { icons } from "@/lib/icons";

const Hero = () => {
  const totalIcons = icons.length;

  return (
    <div className="text-center pt-20 pb-6 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent animate-fade-in">
        Hospitality Icons
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
        A curated icon library crafted specifically for travel and hospitality
        applications
      </p>
      <div className="flex items-center justify-center gap-4 animate-fade-in">
        <Button
          variant="outline"
          onClick={() =>
            window.open(
              "https://github.com/Bookingjini-Tech/bookingjini-icons",
              "_blank"
            )
          }
          className="bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200"
        >
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </Button>
      </div>
      <div className="inline-flex items-center rounded-md bg-blue-50 px-2 py-2 my-3 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
        {totalIcons} icons available
      </div>

      {/* NPM Package link section */}
      <div className="animate-fade-in py-4">
        <p className="text-sm text-gray-800">Install these icons via NPM</p>
        <div className="py-2">
          <a
            href="https://www.npmjs.com/package/@bookingjini-labs/bookingjini-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary underline hover:text-primary/80"
          >
            @bookingjini-labs/bookingjini-icons
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
