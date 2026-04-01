import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Menu,
  Shield,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CUSTOMER_LOGOS } from "./appData";
import CookieBanner from "./components/CookieBanner";
import { INDUSTRIES, PRODUCTS, SERVICES, slugify } from "./data";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import CustomersPage from "./pages/CustomersPage";
import Footer from "./pages/Footer";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryPage from "./pages/IndustryPage";
import PartnersPage from "./pages/PartnersPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";
import WhySimlabsPage from "./pages/WhySimlabsPage";

// ─── Nav links ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Customers", to: "/customers" },
  { label: "Projects", to: "/projects" },
  { label: "Partners", to: "/partners" },
  { label: "Careers", to: "/careers" },
  { label: "Contacts", to: "/contact" },
];

// ─── Hero slides ─────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    src: "/assets/generated/hero-vr.dim_1200x600.jpg",
    label: "Virtual Reality",
    abbr: "VR",
  },
  {
    src: "/assets/generated/hero-slide-ar.dim_1200x700.jpg",
    label: "Augmented Reality",
    abbr: "AR",
  },
  {
    src: "/assets/generated/hero-slide-mr.dim_1200x700.jpg",
    label: "Mixed Reality",
    abbr: "MR",
  },
  {
    src: "/assets/generated/hero-slide-vs.dim_1200x700.jpg",
    label: "Visual Simulation",
    abbr: "VS",
  },
  {
    src: "/assets/generated/hero-slide-dt.dim_1200x700.jpg",
    label: "Digital Twins",
    abbr: "DT",
  },
  {
    src: "/assets/generated/hero-slide-ai.dim_1200x700.jpg",
    label: "Artificial Intelligence",
    abbr: "AI",
  },
];

// ─── Scroll-reveal hook ────────────────────────────────────────────────────
function useSectionReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".section-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
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
        <Link to="/" className="flex items-center gap-2" data-ocid="nav.link">
          <img
            src="/assets/uploads/01_1-1.png"
            alt="SIMLABS"
            className="h-12 w-auto"
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-5"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
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
              <Link
                key={l.to}
                to={l.to}
                data-ocid="nav.link"
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentIdx((i) => (i + 1) % HERO_SLIDES.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.18 222) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="mb-5 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
            >
              A TRUSTED VISUAL TECHNOLOGY PARTNER
            </Badge>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight uppercase tracking-tight mb-6">
              <span className="text-foreground">YOU GOT THE </span>
              <span className="gradient-text">VISION</span>
              <br />
              <span className="text-foreground">TO REALIZE,</span>
              <br />
              <span className="text-foreground">WE GOT THE </span>
              <span className="gradient-text">MISSION</span>
              <br />
              <span className="text-foreground">TO VISUALIZE.</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Delivering advanced Virtual Reality (VR), Augmented Reality (AR),
              Mixed Reality (MR), Visual Simulation (VS), Digital Twins (DT),
              and Artificial Intelligence (AI) solutions across industries such
              as aerospace, defence, automotive, engineering, energy / oil &amp;
              gas / mining, healthcare / pharmaceuticals, manufacturing, and
              transport. Our solutions empower organizations with cutting-edge,
              visual technologies for training, technical assistance, product
              experience, design studies, sales and marketing, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => {
                  const el = document.getElementById("services-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Button
                  size="lg"
                  className="btn-gradient border-0 text-white font-semibold gap-2"
                >
                  Explore What We Offer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </button>
              <a
                href="/assets/uploads/Brochure_SIMLABS-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="SIMLABS-Brochure.pdf"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground hover:border-primary gap-2"
                  data-ocid="hero.secondary_button"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-3xl opacity-50 blur-3xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 255), oklch(0.68 0.18 222), oklch(0.60 0.20 280))",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl"
              style={{ aspectRatio: "16/9" }}
            >
              {/* All slides stacked, show/hide via opacity */}
              {HERO_SLIDES.map((slide, i) => (
                <img
                  key={slide.abbr}
                  src={slide.src}
                  alt={slide.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === currentIdx ? "opacity-100" : "opacity-0"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              {/* Dots and label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="flex gap-2">
                  {HERO_SLIDES.map((s, i) => (
                    <button
                      key={s.abbr}
                      type="button"
                      onClick={() => setCurrentIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentIdx
                          ? "w-6 bg-primary"
                          : "w-1.5 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Slide: ${s.label}`}
                    />
                  ))}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm"
                  style={{ color: "oklch(0.85 0.19 55)" }}
                >
                  {HERO_SLIDES[currentIdx].label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── About banner ─────────────────────────────────────────────────────────
function AboutBanner() {
  return (
    <section className="py-16 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            <span className="text-foreground font-semibold">
              Simlabs Software LLP
            </span>
            <span className="text-muted-foreground font-semibold"> (</span>
            <span className="gradient-text font-semibold">SIMLABS</span>
            <sup className="text-xs text-muted-foreground">®</sup>
            <span className="text-muted-foreground font-semibold">)</span> is a
            visual technology firm with over 13 years of experience, delivering
            reliable, high-quality, and cost-effective solutions. The company is
            led by a management team with over 21 years of experience in visual
            technologies. We specialize in VR, AR, MR, Visual Simulation,
            Digital Twins, and AI, serving a wide range of industries with
            advanced and scalable solutions for operational, maintenance, and
            safety training; field and remote technical assistance; product
            visualization and experience; design and ergonomics studies; and
            sales and marketing, and numerous other evolving application areas.
            By transforming complex processes into intuitive visual experiences,
            we help teams enhance skills, improve efficiency, boost
            productivity, and achieve higher levels of accuracy and safety.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Customer Logo Section ──────────────────────────────────────────────────
function CustomerLogoSection() {
  return (
    <section className="py-14 section-fade">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 max-w-3xl mx-auto">
            SIMLABS helps organizations harness the power of VR, AR, MR, and
            Visual Simulation technologies.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 mx-auto" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-5 gap-y-7 justify-items-center">
          {CUSTOMER_LOGOS.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-2 group w-full"
            >
              <div
                className="flex items-center justify-center rounded-lg border border-gray-200 hover:border-primary/40 transition-colors overflow-hidden"
                style={{
                  width: "100%",
                  height: "100px",
                  background: "#ffffff",
                  padding: "12px",
                }}
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="object-contain"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "76px",
                      width: "auto",
                      height: "auto",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-bold text-gray-700 text-center leading-tight uppercase tracking-wide">
                    {c.name}
                  </span>
                )}
              </div>
              <p className="text-xs font-bold text-center uppercase tracking-wide leading-tight text-foreground/80 w-full px-1">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Summary: Why SIMLABS ─────────────────────────────────────────────────
const WHY = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Uncompromising Quality",
    desc: "We deliver uncompromising quality in every project, ensuring outputs exceed industry standards and client expectations.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Cost-Effective Solutions",
    desc: "We offer competitive pricing without sacrificing quality, ensuring maximum value for your investment with transparent delivery.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Deep Domain Expertise",
    desc: "Our team of seasoned professionals brings extensive experience in delivering visual technology solutions across industries.",
  },
];

function WhySimlabsSummary() {
  return (
    <section className="py-14 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            Our Edge
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">SIMLABS</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars that define our commitment to excellence and client
            success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`why.item.${i + 1}`}
              className="bg-card border border-border rounded-xl p-8 text-center card-glow transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center mx-auto mb-5 text-white">
                {w.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {w.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {w.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-14 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade">
      <div className="container mx-auto px-6 text-center">
        <Badge
          variant="outline"
          className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
        >
          Let&apos;s Talk
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Ready to transform your simulation, training, visualization, design,
          technical assistance, and marketing capabilities? Connect with the{" "}
          <span className="gradient-text">SIMLABS</span>
          <sup className="text-xs">®</sup> team.
        </p>
        <Link to="/contact" data-ocid="contact.primary_button">
          <Button
            size="lg"
            className="btn-gradient text-white font-semibold gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

// ─── AppHome ──────────────────────────────────────────────────────────────
function AppHome() {
  useSectionReveal();

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <AboutBanner />
        <CustomerLogoSection />
        <WhySimlabsSummary />
        <ContactCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

// Router setup

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: AppHome,
});

const serviceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: ServicePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$slug",
  component: ProductPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const industryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/$slug",
  component: IndustryPage,
});

const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: IndustriesPage,
});

const customersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customers",
  component: CustomersPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const whySimlabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-simlabs",
  component: WhySimlabsPage,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: CareersPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicyPage,
});

const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partners",
  component: PartnersPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceRoute,
  productsRoute,
  productRoute,
  industriesRoute,
  industryRoute,
  customersRoute,
  projectsRoute,
  whySimlabsRoute,
  careersRoute,
  contactRoute,
  privacyRoute,
  partnersRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
