import { useState, useEffect } from "react";
import { ToggleTheme } from "./ToggleTheme";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

    if (link === "Product") {
      if (location.pathname !== "/") {
        navigate("/"); // go to homepage first
        setTimeout(() => {
          const section = document.querySelector("#product");
          section?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const section = document.querySelector("#product");
        section?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link === "FAQ") {
      navigate("/faq");
    } else if (link === "Blog") {
      navigate("/blog");
    } else if (link === "About Us") {
      navigate("/about");
    }
  };

  return (
    <>
      <nav
        className={cn(
          "w-full sticky top-0 z-50 transition-all duration-300 px-6",
          isScroll ? "py-5 bg-background/40 backdrop-blur-lg shadow-md" : "py-7"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="text-3xl md:text-5xl font-bold text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            Biccas
          </div>

          <ul className="hidden md:flex space-x-8 text-brand">
            {["Product", "FAQ", "Blog", "About Us"].map((link) => (
              <li key={link}>
                <button
                  className="text-md hover:text-foreground transition-colors"
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <button className="button-no" onClick={() => navigate("/signup")}>
              Login
            </button>
            <button className="button-gr" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
            <ToggleTheme />
          </div>

          <button
            className="md:hidden p-2 text-primary z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden z-40",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-6 text-brand items-center">
          {["Product", "FAQ", "Blog", "About Us"].map((link) => (
            <li key={link}>
              <button
                className="text-lg hover:text-foreground transition-colors"
                onClick={() => handleNavClick(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 items-center mt-6">
          <button
            className="button-no rounded-full"
            onClick={() => navigate("/signup")}
          >
            Login
          </button>
          <button
            className="button-gr rounded-full"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <ToggleTheme />
        </div>
      </div>
    </>
  );
};
