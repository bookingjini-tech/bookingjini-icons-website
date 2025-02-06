import { Button } from "@/components/ui/button";
import "@bookingjini-labs/bookingjini-icons/fonts/bookingjini-icons.css";

const Hero = () => {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        BookingJini Icons
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A beautiful, open-source icon library for your next project
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => window.open("https://github.com/Bookingjini-Tech/bookingjini-icons", "_blank")}
        >
          <i className="icon-github w-5 h-5 mr-2"></i>
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

export default Hero;