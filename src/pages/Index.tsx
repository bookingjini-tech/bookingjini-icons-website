import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import IconGrid from "@/components/IconGrid";
import Footer from "@/components/Footer";
import { icons } from "@/lib/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [styleFilter, setStyleFilter] = useState("all");

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch = icon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStyle =
      styleFilter === "all" ||
      (styleFilter === "fill" && icon.name.toLowerCase().includes("fill")) ||
      (styleFilter === "line" && icon.name.toLowerCase().includes("line"));

    return matchesSearch && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 backdrop-blur-3xl" />
        <div className="container relative mx-auto px-4">
          <Hero />
          <div className="mb-8 animate-fade-in">
            <SearchBar onSearch={setSearchQuery} />
            <div className="mt-6 flex justify-center">
              <RadioGroup
                defaultValue="all"
                onValueChange={setStyleFilter}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">
                    All Icons
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fill" id="fill" />
                  <Label htmlFor="fill" className="cursor-pointer">
                    Fill Style
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="line" id="line" />
                  <Label htmlFor="line" className="cursor-pointer">
                    Line Style
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <IconGrid icons={filteredIcons} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
