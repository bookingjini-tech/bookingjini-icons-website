
import { Button } from "@/components/ui/button";
import "@bookingjini-labs/bookingjini-icons/fonts/bookingjini-icons.css";

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent animate-fade-in">
        BookingJini Icons
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
        A beautiful, open-source icon library for your next project
      </p>
      <div className="flex items-center justify-center gap-4 animate-fade-in">
        <Button
          variant="outline"
          onClick={() => window.open("https://github.com/Bookingjini-Tech/bookingjini-icons", "_blank")}
          className="bg-white/50 backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200"
        >
          <i className="icon-github w-5 h-5 mr-2"></i>
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

export default Hero;
