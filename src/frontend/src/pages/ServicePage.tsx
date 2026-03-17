import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES, SERVICE_DETAILS, slugify } from "../data";
import SharedHeader from "./SharedHeader";

export default function ServicePage() {
  const { slug } = useParams({ from: "/services/$slug" });
  const service = SERVICES.find((s) => slugify(s.title) === slug);
  const details = slug ? SERVICE_DETAILS[slug] : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-[oklch(0.09_0.028_247)] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Service Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The service you are looking for does not exist.
        </p>
        <Link to="/" data-ocid="not_found.link">
          <Button className="btn-gradient border-0 text-white">
            ← Back to Home
          </Button>
        </Link>
      </div>
    );
  }

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
            src={service.image}
            alt={service.title}
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
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{service.title}</span>
              </nav>
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                Technology Service
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
                {service.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="container mx-auto px-6 py-4">
        <a
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          data-ocid="service.link"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </a>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tag.split(" · ").map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-primary/30 text-primary/80 bg-primary/5 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.section>

            {details && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  Key Features & Capabilities
                </h2>
                <ul className="space-y-3">
                  {details.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {details && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  Industries Applicable
                </h2>
                <div className="flex flex-wrap gap-3">
                  {details.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="font-bold text-lg mb-3">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Speak with our experts to understand how {service.title} can
                transform your operations.
              </p>
              <a href="/#contact" data-ocid="service.primary_button">
                <Button className="w-full btn-gradient border-0 text-white font-semibold">
                  Get in Touch
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-bold text-base mb-4">Other Services</h3>
              <ul className="space-y-2">
                {SERVICES.filter((s) => s.title !== service.title).map((s) => (
                  <li key={s.title}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: slugify(s.title) }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                      data-ocid="service.link"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {s.title}
                    </Link>
                  </li>
                ))}
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
