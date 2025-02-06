import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import IconGrid from "@/components/IconGrid";
import { icons } from "@/lib/icons";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Hero />
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <IconGrid icons={filteredIcons} />
      </div>
    </div>
  );
};

export default Index;