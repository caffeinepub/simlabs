import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Box,
  Briefcase,
  Car,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Crosshair,
  Download,
  Eye,
  FileText,
  Globe,
  HardHat,
  Headset,
  HeartPulse,
  Layers,
  Loader2,
  Mail,
  MapIcon,
  Menu,
  Monitor,
  Plane,
  Radio,
  Search,
  Shield,
  ShieldCheck,
  Sofa,
  Star,
  Train,
  Users,
  Waves,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiFacebook, SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitContactForm } from "./hooks/useQueries";

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
      { threshold: 0.12 },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Nav links ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Why SIMLABS?", href: "#why" },
  { label: "Customers", href: "#customers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Contact", href: "#contact" },
];

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
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/simlabs-logo.dim_400x120.png"
            alt="SIMLABS"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-5"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:block"
          data-ocid="nav.primary_button"
        >
          <Button
            size="sm"
            className="btn-gradient border-0 text-white font-semibold"
          >
            Get in Touch
          </Button>
        </a>

        {/* Mobile hamburger */}
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

      {/* Mobile Menu */}
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
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border last:border-0"
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

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg"
    >
      {/* Background radial glow */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              Visual Technology Leader
            </Badge>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight uppercase tracking-tight mb-6">
              <span className="text-foreground">YOU GOT THE </span>
              <span className="gradient-text">VISION</span>
              <span className="text-foreground"> TO REALIZE.</span>
              <br />
              <span className="text-foreground">WE GOT THE </span>
              <span className="gradient-text">MISSION</span>
              <span className="text-foreground"> TO VISUALIZE.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Advanced Visual Simulation, Virtual Reality &amp; Augmented
              Reality Solutions for aerospace, defence, automotive, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="btn-gradient border-0 text-white font-semibold gap-2"
                >
                  Explore Our Solutions
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-muted-foreground hover:text-foreground hover:border-primary gap-2"
                data-ocid="hero.secondary_button"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex gap-8 border-t border-border pt-8">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "100+", label: "Projects Delivered" },
                { val: "50+", label: "Enterprise Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold gradient-text">
                    {s.val}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-30 blur-3xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 255), oklch(0.68 0.18 222))",
              }}
            />
            <img
              src="/assets/generated/hero-vr.dim_1200x600.jpg"
              alt="VR technology visualization"
              className="relative rounded-2xl w-full object-cover shadow-2xl border border-border animate-float"
              style={{ maxHeight: "500px" }}
              loading="eager"
            />
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
              Simlabs Software LLP (
              <span className="gradient-text">SIMLABS</span>)
            </span>{" "}
            is a visual technology firm run by a team of visionary professionals
            with deep expertise in modeling, simulation, and training. We
            specialize in delivering advanced, high-quality, and cost-effective
            solutions in visual simulation, virtual reality, and augmented
            reality across a wide spectrum of industries.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: <Headset className="w-7 h-7" />,
    title: "Virtual Reality (VR)",
    desc: "Immersive VR training applications, virtual interactive experiences, and marketing applications across multiple platforms and hardware types.",
    tag: "Training · Education · Defence",
    image: "/assets/generated/service-vr.dim_800x500.jpg",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Augmented Reality (AR)",
    desc: "Cutting-edge AR solutions for maintenance training, education, marketing, architecture, and retail use cases.",
    tag: "Manufacturing · Healthcare · Retail",
    image: "/assets/generated/service-ar.dim_800x500.jpg",
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Mixed Reality (MR)",
    desc: "Blended MR experiences that merge physical and digital worlds for advanced training, collaboration, and design review.",
    tag: "Aerospace · Engineering · Design",
    image: "/assets/generated/service-mr.dim_800x500.jpg",
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Visual Simulation (VS)",
    desc: "Professional 3D model development, terrain development, and simulation application development.",
    tag: "Aerospace · Defence · Automotive",
    image: "/assets/generated/service-vs.dim_800x500.jpg",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 section-fade">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            What We Do
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Technology Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end visual technology solutions crafted for mission-critical
            industries worldwide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg btn-gradient flex items-center justify-center mb-4 text-white">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-xs text-primary/80 font-medium">
                  {s.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    icon: <MapIcon className="w-5 h-5" />,
    name: "TRIAN3DBUILDER",
    desc: "Advanced 3D Terrain Development software",
    image: "/assets/generated/product-trian3dbuilder.dim_600x380.jpg",
  },
  {
    icon: <Box className="w-5 h-5" />,
    name: "REMO3D",
    desc: "3D model development software",
    image: "/assets/generated/product-remo3d.dim_600x380.jpg",
  },
  {
    icon: <Crosshair className="w-5 h-5" />,
    name: "SiMAX",
    desc: "War Gaming software",
    image: "/assets/generated/product-simax.dim_600x380.jpg",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    name: "SILVERLINING",
    desc: "Cloud and Sky rendering SDK",
    image: "/assets/generated/product-silverlining.dim_600x380.jpg",
  },
  {
    icon: <Waves className="w-5 h-5" />,
    name: "TRITON",
    desc: "Ocean simulation SDK",
    image: "/assets/generated/product-triton.dim_600x380.jpg",
  },
  {
    icon: <Search className="w-5 h-5" />,
    name: "VIDERE",
    desc: "Virtual Design Review tool",
    image: "/assets/generated/product-videre.dim_600x380.jpg",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    name: "VRSAFE",
    desc: "VR based Fire Safety Training tool",
    image: "/assets/generated/product-vrsafe.dim_600x380.jpg",
  },
  {
    icon: <Radio className="w-5 h-5" />,
    name: "AUGMENTOR",
    desc: "Remote Assistance Tool",
    image: "/assets/generated/product-augmentor.dim_600x380.jpg",
  },
  {
    icon: <Sofa className="w-5 h-5" />,
    name: "FARNISH",
    desc: "AR based Furniture Trial and Sales tool",
    image: "/assets/generated/product-farnish.dim_600x380.jpg",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "PRODOC",
    desc: "Interactive product document creator tool",
    image: "/assets/generated/product-prodoc.dim_600x380.jpg",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            COTS Software
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Commercial off-the-shelf software solutions built with world-class
            simulation and visualization technology.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`products.item.${i + 1}`}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center flex-shrink-0 text-white">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors tracking-wide">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: <Plane className="w-7 h-7" />,
    name: "Aerospace",
    desc: "Flight simulation, mission training, and avionics visualization",
    image: "/assets/generated/industry-aerospace.dim_600x400.jpg",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    name: "Defense",
    desc: "War gaming, tactical training, and defense simulation systems",
    image: "/assets/generated/industry-defense.dim_600x400.jpg",
  },
  {
    icon: <Car className="w-7 h-7" />,
    name: "Automotive",
    desc: "Design review, assembly training, and driver simulation",
    image: "/assets/generated/industry-automotive.dim_600x400.jpg",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    name: "Engineering",
    desc: "CAD visualization, maintenance training, and process simulation",
    image: "/assets/generated/industry-engineering.dim_600x400.jpg",
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    name: "Mining",
    desc: "Safety training, underground navigation, and equipment simulation",
    image: "/assets/generated/industry-mining.dim_600x400.jpg",
  },
  {
    icon: <Train className="w-7 h-7" />,
    name: "Transport",
    desc: "Driver training, route simulation, and operational systems",
    image: "/assets/generated/industry-transport.dim_600x400.jpg",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    name: "Healthcare",
    desc: "Medical procedure training and patient care visualization",
    image: "/assets/generated/industry-healthcare.dim_600x400.jpg",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-24 section-fade">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            Sectors
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our simulation and visualization solutions span a broad range of
            mission-critical industries around the globe.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`industries.item.${i + 1}`}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center mb-3 text-white mx-auto">
                  {ind.icon}
                </div>
                <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why SIMLABS ──────────────────────────────────────────────────────────
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
    desc: "Our team of seasoned professionals brings decades of combined experience in simulation, VR, and AR technology across industries.",
  },
];

function WhySimlabs() {
  return (
    <section
      id="why"
      className="py-24 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
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

// ─── Customers ────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "We appreciate the quality services and support provided by SIMLABS towards development of visual applications, 3D models and terrain data for simulator development projects. SIMLABS has good expertise in modelling and simulation and have done a commendable job for us.",
    name: "B. V. Ramanamurthy",
    role: "Director Program Management",
    org: "CAE Defence & Security",
  },
  {
    quote:
      "We are impressed with the quality of work delivered and prompt support extended by SIMLABS in development of Virtual Interactive Learning (ViL) applications for our institute. Keep up the good work.",
    name: "Gp Capt A.K Dutta",
    role: "Commanding Officer",
    org: "TETTRA School, Indian Air Force",
  },
  {
    quote:
      "Technical support provided by SIMLABS has been very professional and exceeds our expectations. We look forward to working with SIMLABS in our future projects.",
    name: "Wg Cdr Vivek G. Menon (Retd.)",
    role: "General Manager Defence Systems",
    org: "AXISCADES",
  },
];

const CUSTOMER_LOGOS = [
  {
    name: "Indian Air Force",
    logo: "/assets/generated/logo-iaf-transparent.dim_200x200.png",
  },
  {
    name: "DRDO",
    logo: "/assets/generated/logo-drdo-transparent.dim_200x200.png",
  },
  {
    name: "ISRO",
    logo: "/assets/generated/logo-isro-transparent.dim_200x200.png",
  },
  {
    name: "NAL",
    logo: "/assets/generated/logo-nal-transparent.dim_200x200.png",
  },
  {
    name: "ECIL",
    logo: "/assets/generated/logo-ecil-transparent.dim_200x200.png",
  },
  {
    name: "AXISCADES",
    logo: "/assets/generated/logo-axiscades-transparent.dim_200x200.png",
  },
  {
    name: "VOLVO",
    logo: "/assets/generated/logo-volvo-transparent.dim_200x200.png",
  },
  {
    name: "GOOGLE",
    logo: "/assets/generated/logo-google-transparent.dim_200x200.png",
  },
  {
    name: "ALSTOM",
    logo: "/assets/generated/logo-alstom-transparent.dim_200x200.png",
  },
  {
    name: "EPIROC",
    logo: "/assets/generated/logo-epiroc-transparent.dim_200x200.png",
  },
  {
    name: "Atlas Copco",
    logo: "/assets/generated/logo-atlascopco-transparent.dim_200x200.png",
  },
  {
    name: "L&T Defence",
    logo: "/assets/generated/logo-lntdefence-transparent.dim_200x200.png",
  },
  {
    name: "CAE India",
    logo: "/assets/generated/logo-cae-transparent.dim_200x200.png",
  },
  {
    name: "ABB",
    logo: "/assets/generated/logo-abb-transparent.dim_200x200.png",
  },
  {
    name: "Cyient",
    logo: "/assets/generated/logo-cyient-transparent.dim_200x200.png",
  },
  {
    name: "Alpha Design Technologies",
    logo: "/assets/generated/logo-alphadesign-transparent.dim_200x200.png",
  },
  {
    name: "Applied Materials",
    logo: "/assets/generated/logo-appliedmaterials-transparent.dim_200x200.png",
  },
  {
    name: "Indian Army",
    logo: "/assets/generated/logo-indianarmy-transparent.dim_200x200.png",
  },
];

function Customers() {
  return (
    <section id="customers" className="py-24 section-fade">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            Client Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by defence organisations, aerospace companies, and research
            institutions across India and globally.
          </p>
        </div>

        {/* Customer logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mb-14">
          {CUSTOMER_LOGOS.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center overflow-hidden p-1 group-hover:border-primary/50 transition-colors">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`customers.item.${i + 1}`}
              className="bg-card border border-border rounded-xl p-7 card-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
                <Star className="w-4 h-4 fill-primary text-primary" />
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-primary/80 font-medium">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Jobs ─────────────────────────────────────────────────────────────────
function Jobs() {
  return (
    <section
      id="jobs"
      className="py-24 bg-[oklch(0.11_0.028_247)] border-y border-border section-fade"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            Join Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Careers at <span className="gradient-text">SIMLABS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re always looking for talented people passionate about
            simulation, VR/AR, and visual technology. Join a team that builds
            cutting-edge solutions for defence, aerospace, and beyond.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
          data-ocid="jobs.card"
        >
          <div className="bg-card border border-border rounded-xl p-10 card-glow text-center">
            <div className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center mx-auto mb-6 text-white">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">
              No open positions right now
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We don&apos;t have any active openings at the moment — but
              we&apos;d love to hear from you. Send us your resume and
              we&apos;ll reach out when the right opportunity arises.
            </p>
            <a href="#contact" data-ocid="jobs.primary_button">
              <Button
                size="lg"
                className="btn-gradient border-0 text-white font-semibold gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Us Your Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const mutation = useSubmitContactForm();

  const [captchaQuestion, setCaptchaQuestion] = useState(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Number.parseInt(captchaInput) !== captchaQuestion.answer) {
      setCaptchaError(true);
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      setCaptchaQuestion({ a, b, answer: a + b });
      setCaptchaInput("");
      return;
    }
    setCaptchaError(false);
    try {
      await mutation.mutateAsync(form);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", company: "", message: "" });
      setCaptchaInput("");
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      setCaptchaQuestion({ a, b, answer: a + b });
    } catch {
      toast.error("Failed to send. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[oklch(0.11_0.028_247)] border-t border-border section-fade"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
          >
            Let&apos;s Talk
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your training and visualization capabilities?
            Reach out to the <span className="gradient-text">SIMLABS</span> team
            today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.panel"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-company"
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                >
                  Company / Organisation
                </label>
                <Input
                  id="contact-company"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, company: e.target.value }))
                  }
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                >
                  Message *
                </label>
                <Textarea
                  id="contact-message"
                  required
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              {/* Math CAPTCHA */}
              <div>
                <label
                  htmlFor="captcha-input"
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                >
                  Security Check *
                </label>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-foreground font-mono font-bold text-sm select-none">
                    {captchaQuestion.a} + {captchaQuestion.b} = ?
                  </div>
                  <Input
                    required
                    type="number"
                    placeholder="Answer"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      setCaptchaError(false);
                    }}
                    id="captcha-input"
                    className={`w-24 bg-input border-border text-foreground ${captchaError ? "border-destructive" : ""}`}
                    data-ocid="contact.input"
                  />
                </div>
                {captchaError && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="contact.error_state"
                  >
                    Incorrect answer. Please try again.
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={mutation.isPending}
                className="btn-gradient border-0 text-white font-semibold w-full gap-2"
                data-ocid="contact.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <ChevronRight className="w-4 h-4" /> Send Message
                  </>
                )}
              </Button>
              {mutation.isSuccess && (
                <p
                  className="text-sm text-primary text-center"
                  data-ocid="contact.success_state"
                >
                  ✓ Your message has been delivered successfully.
                </p>
              )}
              {mutation.isError && (
                <p
                  className="text-sm text-destructive text-center"
                  data-ocid="contact.error_state"
                >
                  ✗ Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  data-ocid="contact.card"
                >
                  <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-medium">
                      info at simlabs dot in
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.simlabs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  data-ocid="contact.link"
                >
                  <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Website
                    </p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      www.simlabs.in
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: <SiLinkedin className="w-4 h-4" />,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: <SiX className="w-4 h-4" />,
                    href: "https://x.com",
                    label: "Twitter / X",
                  },
                  {
                    icon: <SiFacebook className="w-4 h-4" />,
                    href: "https://facebook.com",
                    label: "Facebook",
                  },
                  {
                    icon: <SiYoutube className="w-4 h-4" />,
                    href: "https://youtube.com",
                    label: "YouTube",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-ocid="contact.link"
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">
                  Simlabs Software LLP
                </span>{" "}
                is headquartered in India and serves clients worldwide across
                defence, aerospace, automotive, and education sectors. Reach out
                to discuss how we can bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.11_0.028_247)] border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/assets/generated/simlabs-logo.dim_400x120.png"
                alt="SIMLABS"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visual technology solutions for aerospace, defence, automotive,
              and beyond.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Quick Links
            </h5>
            <div className="grid grid-cols-2 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-ocid="nav.link"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h5>
            <div className="flex gap-3">
              {[
                {
                  icon: <SiLinkedin className="w-4 h-4" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <SiX className="w-4 h-4" />,
                  href: "https://x.com",
                  label: "Twitter / X",
                },
                {
                  icon: <SiFacebook className="w-4 h-4" />,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  icon: <SiYoutube className="w-4 h-4" />,
                  href: "https://youtube.com",
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

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Simlabs Software LLP. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  useSectionReveal();

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <AboutBanner />
        <Services />
        <Products />
        <Industries />
        <WhySimlabs />
        <Customers />
        <Jobs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
