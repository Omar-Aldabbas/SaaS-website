import { useState, useEffect } from "react";
import { ToggleTheme } from "./ToggleTheme";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          "w-full sticky top-0 z-50 transition-all duration-300 px-6",
          isScroll ? "py-5 bg-background/40 backdrop-blur-lg shadow-md" : "py-7"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Brand */}
          <div className="text-3xl md:text-5xl font-bold text-primary">
            Biccas
          </div>

          {/* Center: Nav Links (desktop only) */}
          <ul className="hidden md:flex space-x-8 text-brand">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-md hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Buttons + Theme (desktop only) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="button-no">Login</button>
            <button className="button-gr">Sign Up</button>
            <ToggleTheme />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (outside nav so it's full screen) */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden z-40",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-6 text-brand items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-lg hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 items-center mt-6">
          <button className="button-no rounded-full">Login</button>
          <button className="button-gr rounded-full">Sign Up</button>
          <ToggleTheme />
        </div>
      </div>
    </>
  );
};
