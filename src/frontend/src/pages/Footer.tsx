import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Projects", to: "/projects" },
  { label: "Customers", to: "/customers" },
  { label: "Partners", to: "/partners" },
  { label: "Careers", to: "/careers" },
  { label: "Contacts", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.11_0.028_247)] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/assets/uploads/01_1-1.png"
                alt="SIMLABS"
                className="h-11 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              <span className="text-foreground font-semibold">
                YOU GOT THE{" "}
              </span>
              <span className="gradient-text font-semibold">VISION</span>
              <span className="text-foreground font-semibold">
                {" "}
                TO REALIZE,
              </span>
              <br />
              <span className="text-foreground font-semibold">WE GOT THE </span>
              <span className="gradient-text font-semibold">MISSION</span>
              <span className="text-foreground font-semibold">
                {" "}
                TO VISUALIZE.
              </span>
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h5>
            <div className="grid grid-cols-2 gap-y-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-ocid="nav.link"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Follow Us
            </h5>
            <div className="flex gap-3">
              {[
                {
                  icon: <SiLinkedin className="w-4 h-4" />,
                  href: "https://in.linkedin.com/in/simlabssoftware",
                  label: "LinkedIn",
                },
                {
                  icon: <SiX className="w-4 h-4" />,
                  href: "https://twitter.com/simlabssoftware/",
                  label: "Twitter / X",
                },
                {
                  icon: <SiFacebook className="w-4 h-4" />,
                  href: "https://www.facebook.com/simlabssoftware",
                  label: "Facebook",
                },
                {
                  icon: <SiYoutube className="w-4 h-4" />,
                  href: "https://www.youtube.com/simlabssoftware",
                  label: "YouTube",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-secondary border border-border hover:border-primary/50 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 Simlabs Software LLP.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end">
            <Link
              to="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
