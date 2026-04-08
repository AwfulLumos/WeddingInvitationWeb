import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#our-story", label: "Our Story" },
  { href: "#countdown", label: "Countdown" },
  { href: "#details", label: "Details" },
  { href: "#timeline", label: "Timeline" },
  { href: "#accommodations", label: "Accommodations" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#rsvp", label: "RSVP" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[#4a3f35] hover:text-[#A98B76] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-[#A98B76] text-white p-3 rounded-full shadow-lg hover:bg-[#8f765f] transition-colors focus:outline-none focus:ring-4 focus:ring-[#A98B76]/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed inset-0 bg-white z-40 pt-20"
        >
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-2xl font-serif text-[#4a3f35] hover:text-[#A98B76] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
