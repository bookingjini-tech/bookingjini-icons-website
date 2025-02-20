
import { useState } from "react";
import { Icon } from "@/lib/icons";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import "@bookingjini-labs/bookingjini-icons/fonts/bookingjini-icons.css";
import { Copy } from "lucide-react";

interface IconCardProps {
  icon: Icon;
}
  
const IconCard = ({ icon }: IconCardProps) => {
  const [showJSX, setShowJSX] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`JSX code copied to clipboard!`);
  };

  return (
    <div className="group relative p-6 bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-fade-in">
      <div
        className="w-16 h-16 mx-auto mb-3 flex items-center justify-center text-3xl text-gray-600 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <p className="text-sm font-medium text-center text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
        {icon.name}
      </p>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-300">
        <Button
          variant="outline"
          size="sm"
          onClick={() => copyToClipboard(icon.jsx)}
          className="bg-white hover:bg-primary hover:text-white transition-all duration-200"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </Button>
      </div>
    </div>
  );
};

export default IconCard;
