import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import IconGrid from "@/components/IconGrid";
import Footer from "@/components/Footer";
import { icons, Icon } from "@/lib/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GroupedIcons {
  [key: string]: Icon[];
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [styleFilter, setStyleFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Get unique categories
  const categories = Array.from(new Set(icons.map((icon) => icon.category)));

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch = icon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStyle =
      styleFilter === "all" ||
      (styleFilter === "fill" && icon.name.toLowerCase().includes("fill")) ||
      (styleFilter === "line" && icon.name.toLowerCase().includes("line"));
    const matchesCategory =
      categoryFilter === "all" || icon.category === categoryFilter;

    return matchesSearch && matchesStyle && matchesCategory;
  });

  // Group icons by category with proper typing
  const groupedIcons: GroupedIcons = filteredIcons.reduce(
    (acc: GroupedIcons, icon) => {
      if (!acc[icon.category]) {
        acc[icon.category] = [];
      }
      acc[icon.category].push(icon);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 backdrop-blur-3xl" />
        <div className="container relative mx-auto px-4">
          <Hero />
          <div className="mb-8 animate-fade-in">
            <SearchBar onSearch={setSearchQuery} />
            <div className="mt-6 space-y-8">
              <div className="flex flex-col items-center gap-6">
                <RadioGroup
                  defaultValue="all"
                  onValueChange={setStyleFilter}
                  className="flex flex-wrap justify-center gap-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="cursor-pointer">
                      All Styles
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

                <div className="w-full flex justify-center">
                  <div className="w-64">
                    <Label
                      htmlFor="category-select"
                      className="block text-sm text-center font-medium text-gray-700 mb-2"
                    >
                      Select Category
                    </Label>
                    <Select
                      value={categoryFilter}
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger
                        id="category-select"
                        className="w-full bg-white"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.sort().map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {Object.entries(groupedIcons).map(([category, categoryIcons]) => (
            <div key={category} className="mb-12">
              <h2 className="inline-flex items-center rounded-md bg-gray-50  px-2 py-1 ml-4 text-base font-medium text-gray-600 ring-1 ring-blue-700/10 ring-inset">
                {category}
              </h2>
              <IconGrid icons={categoryIcons} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
