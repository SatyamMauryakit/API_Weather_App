import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import { CloudIcon } from "lucide-react";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"} className="flex items-center">
          <img src="https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png?rf=1024" alt=""  className="h-10 mr-3 rounded-md shadow-sm"/>
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : ''}`}>Weather</span>
        </Link>

        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
