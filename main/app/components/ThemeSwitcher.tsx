"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcher = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:from-sky-800 dark:to-indigo-800 dark:text-gray-100 dark:focus:ring-offset-gray-900"
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
        style={{ transform: isDark ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        {isDark ? (
          <FiSun className="h-5 w-5 text-yellow-400" />
        ) : (
          <FiMoon className="h-5 w-5 text-indigo-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
