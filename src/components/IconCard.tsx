import { useState } from "react";
import { Icon } from "@/lib/icons";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import "@bookingjini-labs/bookingjini-icons/fonts/bookingjini-icons.css";

interface IconCardProps {
  icon: Icon;
}

const IconCard = ({ icon }: IconCardProps) => {
  const [showJSX, setShowJSX] = useState(false);

  const copyToClipboard = (text: string, type: "JSX" | "SVG") => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} code copied to clipboard!`);
  };

  return (
    <div className="group relative p-4 bg-card hover:bg-card-hover rounded-lg transition-all duration-200 cursor-pointer">
      <div
        className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-gray-600 group-hover:text-primary group-hover:scale-110 transition-all duration-200"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <p className="text-sm text-center text-gray-600 group-hover:text-gray-900">
        {icon.name}
      </p>
      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-white/90 transition-opacity duration-200">
        <Button
          variant="outline"
          size="sm"
          onClick={() => copyToClipboard(icon.jsx, "JSX")}
        >
          <i className="icon-copy w-4 h-4 mr-1"></i>
          JSX
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => copyToClipboard(icon.svg, "SVG")}
        >
          <i className="icon-copy w-4 h-4 mr-1"></i>
          SVG
        </Button>
      </div>
    </div>
  );
};

export default IconCard;