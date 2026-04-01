import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import {
  INDUSTRIES,
  INDUSTRY_SOLUTIONS,
  PRODUCTS,
  SERVICES,
  slugify,
} from "../data";
import SharedHeader from "./SharedHeader";

export default function IndustryPage() {
  const { slug } = useParams({ from: "/industries/$slug" });
  const industry = INDUSTRIES.find((ind) => slugify(ind.name) === slug);
  const solutions = slug ? INDUSTRY_SOLUTIONS[slug] : undefined;

  if (!industry) {
    return (
      <div className="min-h-screen bg-[oklch(0.09_0.028_247)] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Industry Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The industry page you are looking for does not exist.
        </p>
        <Link to="/" data-ocid="not_found.link">
          <Button className="btn-gradient border-0 text-white">
            ← Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const applicableServices = solutions
    ? SERVICES.filter((s) => solutions.services.includes(s.title))
    : [];
  const applicableProducts = solutions
    ? PRODUCTS.filter((p) => solutions.products.includes(p.name))
    : [];

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      {/* Hero - fully visible image */}
      <div className="relative pt-16">
        <div
          className="relative w-full overflow-hidden"
          style={{ minHeight: "300px" }}
        >
          <img
            src={industry.image}
            alt={industry.name}
            className="w-full"
            style={{
              display: "block",
              maxHeight: "550px",
              objectFit: "contain",
              background: "oklch(0.09 0.028 247)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.028_247)] via-[oklch(0.09_0.028_247/0.5)] to-transparent"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav
                className="flex items-center gap-2 text-sm text-muted-foreground mb-3"
                aria-label="Breadcrumb"
              >
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
                <ChevronRight className="w-4 h-4" />
                <a
                  href="/#industries"
                  className="hover:text-primary transition-colors"
                >
                  Industries
                </a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{industry.name}</span>
              </nav>
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                Industry
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                {industry.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="container mx-auto px-6 py-4">
        <a
          href="/#industries"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-ocid="industry.link"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </a>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center text-white flex-shrink-0">
                  {industry.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{industry.name}</h2>
                  <p className="text-muted-foreground">{industry.desc}</p>
                </div>
              </div>
            </motion.section>

            {applicableServices.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  Applicable SIMLABS Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {applicableServices.map((s) => (
                    <Link
                      key={s.title}
                      to="/services/$slug"
                      params={{ slug: slugify(s.title) }}
                      data-ocid="industry.link"
                      className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group block"
                    >
                      <div
                        className="relative w-full"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                            {s.icon}
                          </div>
                          <h3 className="font-bold text-sm group-hover:text-primary transition-colors">
                            {s.title}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {applicableProducts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Relevant Products</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {applicableProducts.map((p) => (
                    <Link
                      key={p.name}
                      to="/products/$slug"
                      params={{ slug: slugify(p.name) }}
                      data-ocid="industry.link"
                      className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group flex items-center gap-3 p-4"
                    >
                      <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors tracking-wide">
                          {p.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {p.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="font-bold text-lg mb-3">Explore What We Offer</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Discover how SIMLABS delivers tailored simulation and
                visualization solutions for the {industry.name} sector.
              </p>
              <a href="/#contact" data-ocid="industry.primary_button">
                <Button className="w-full btn-gradient border-0 text-white font-semibold">
                  Explore What We Offer
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-bold text-base mb-4">Other Industries</h3>
              <ul className="space-y-2">
                {INDUSTRIES.filter((ind) => ind.name !== industry.name).map(
                  (ind) => (
                    <li key={ind.name}>
                      <Link
                        to="/industries/$slug"
                        params={{ slug: slugify(ind.name) }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        data-ocid="industry.link"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {ind.name}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-10">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {currentYear}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
