"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get current route

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" }
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
      {/* Left Section - Name and Title */}
      <div className="flex items-center inline-block">
        <h1 className="text-2xl font-bold">Kavitha Acharya</h1>
        <h3 className="text-sm font-semibold md:block">
          Senior Software Fullstack Engineer
        </h3>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <nav
        ref={menuRef}
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex transition-all duration-300 z-10 ${isOpen ? "block shadow-md" : "hidden md:flex"
          }`}
      >
        <ul className="flex flex-col md:flex-row">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`block py-2 px-6 md:py-0 ${pathname === href
                  ? "text-blue-600 font-bold border-b-2 border-blue-600 md:border-none"
                  : "text-gray-700 hover:text-blue-500"
                  }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
