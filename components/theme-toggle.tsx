"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-full border border-border bg-card/60 flex items-center justify-center text-muted-foreground"
      >
        <div className="h-4 w-4" />
      </button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      title="Toggle theme"
      className="relative h-9 w-9 rounded-full border border-border bg-card/80 hover:border-primary/50 hover:text-primary transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-emerald-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
