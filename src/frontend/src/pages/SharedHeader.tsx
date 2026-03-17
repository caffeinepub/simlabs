import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/#industries" },
  { label: "Why SIMLABS?", href: "/#why" },
  { label: "Customers", href: "/#customers" },
  { label: "Jobs", href: "/#jobs" },
  { label: "Contact", href: "/#contact" },
];

export default function SharedHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 header-blur transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.11_0.028_247/0.97)] shadow-lg shadow-black/30 border-b border-border"
          : "bg-[oklch(0.11_0.028_247/0.7)]"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/uploads/01-1.png"
            alt="SIMLABS"
            className="h-12 w-auto"
          />
        </a>

        <nav
          className="hidden lg:flex items-center gap-5"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden text-muted-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[oklch(0.11_0.028_247/0.98)] border-t border-border px-6 pb-4"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid="nav.link"
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
