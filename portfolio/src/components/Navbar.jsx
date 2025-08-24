import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import mk from "../assets/images/mk.png";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active link
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveLink(navItems[i].href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 px-4 transition-colors duration-300",
        isScrolled
          ? "bg-neutral-900/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src={mk} alt="MK Logo" className="h-20 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors duration-300 pb-1",
                activeLink === item.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute left-0 -bottom-0.5 h-[2px] bg-green-400 transition-all duration-300",
                  activeLink === item.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full bg-neutral-800/60 backdrop-blur-md border border-white/10 text-white hover:bg-neutral-700/60 transition"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-neutral-900/80 backdrop-blur-xl z-30 flex flex-col items-center justify-center gap-8 text-lg font-medium",
            "transition-opacity duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "transition-colors duration-300",
                activeLink === item.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
