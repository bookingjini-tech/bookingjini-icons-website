import { Input } from "@/components/ui/input";
import "@bookingjini-labs/bookingjini-icons/fonts/bookingjini-icons.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <i className="icon-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      <Input
        type="text"
        placeholder="Search icons..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;