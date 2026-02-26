import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useLenis } from "lenis/react";
import clsx from "clsx";
import logo from "../assets/logo.png";

interface NavItem {
  id: number;
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home", target: "home" },
  { id: 2, label: "About", target: "about" },
  { id: 3, label: "Skills", target: "skills" },
  { id: 4, label: "Projects", target: "projects" },
  { id: 5, label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = ({ scroll }: { scroll: number }) => {
      setScrolled(scroll > 60);

      let foundSection = "home";
      navItems.forEach((item) => {
        const element = document.getElementById(item.target);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY - 130;
          if (scroll >= top) {
            foundSection = item.target;
          }
        }
      });
      setCurrentSection(foundSection);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  const scrollToSection = (id: string) => {
    if (!lenis) return;

    const element = document.getElementById(id);
    if (!element) return;

    lenis.scrollTo(element, {
      offset: -100,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setOpen(false);
    setCurrentSection(id);
  };

  return (
    <>
      <div
        className={clsx(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] h-16 px-6 md:px-10 lg:px-16 flex items-center justify-between rounded-2xl backdrop-blur-md border transition-all duration-300",
          scrolled
            ? "bg-slate-900/90 border-white/10"
            : "bg-slate-900/60 border-white/5",
        )}
      >
        <Link to="/" className="flex items-center w-24 py-4">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </Link>

        <nav className="hidden lg:flex gap-10 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.target)}
              className={clsx(
                "hover:text-sky-400 transition",
                currentSection === item.target &&
                  "text-sky-400 underline underline-offset-4",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <FaBars
          size={20}
          onClick={() => setOpen(true)}
          className="lg:hidden cursor-pointer text-gray-300"
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 h-screen bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={clsx(
          "fixed top-0 right-0 min-h-screen w-56 bg-slate-900/90 backdrop-blur-xl border-l border-white/10 z-50 transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-6 pt-24 px-8 text-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.target)}
              className={clsx(
                "text-lg text-left hover:text-sky-400 transition",
                currentSection === item.target &&
                  "text-sky-400 underline underline-offset-4",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className="absolute top-6 right-6 text-gray-300 cursor-pointer hover:text-sky-400 transition"
          onClick={() => setOpen(false)}
        >
          <ImCross size={18} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
