import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const ToggleTheme = () => {
  const getTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDark, setIsDark] = useState(getTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return (
    <button className="rounded-full transition-colors p-2" onClick={toggle}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
