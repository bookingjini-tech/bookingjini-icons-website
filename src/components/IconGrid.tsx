import { Icon } from "@/lib/icons";
import IconCard from "./IconCard";

interface IconGridProps {
  icons: Icon[];
}

const IconGrid = ({ icons }: IconGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {icons.map((icon) => (
        <IconCard key={icon.id} icon={icon} />
      ))}
    </div>
  );
};

export default IconGrid;