import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { INDUSTRIES, SERVICES, SERVICE_DETAILS, slugify } from "../data";
import Footer from "./Footer";
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

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      {/* Hero - ribbon banner */}
      <div className="relative pt-16">
        <div
          className="relative w-full overflow-hidden flex items-stretch"
          style={{ height: "280px", background: "oklch(0.09 0.028 247)" }}
        >
          {/* Dark overlay full background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10" />

          {/* Left: Text content */}
          <div className="relative z-20 flex flex-col justify-center px-8 md:px-16 w-full md:w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav
                className="flex items-center gap-2 text-sm text-muted-foreground mb-2"
                aria-label="Breadcrumb"
              >
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
                <ChevronRight className="w-4 h-4" />
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{service.title}</span>
              </nav>
              <Badge
                variant="outline"
                className="mb-2 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                Technology Service
              </Badge>
              <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">
                {service.title}
              </h1>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Fade from left to blend with text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-6">
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
            </motion.section>

            {details && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  Key Features &amp; Capabilities
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

            {details?.applicationAreas &&
              details.applicationAreas.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Application Areas</h2>
                  <ul className="space-y-3">
                    {details.applicationAreas.map((area) => (
                      <li key={area} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {area}
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
                    <Link
                      key={ind}
                      to="/industries/$slug"
                      params={{ slug: slugify(ind) }}
                      onClick={() => window.scrollTo(0, 0)}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                    >
                      {ind}
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {service.tag && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <div className="flex flex-wrap gap-2">
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
              <Link to="/contact" data-ocid="service.primary_button">
                <Button className="w-full btn-gradient border-0 text-white font-semibold">
                  Get in Touch
                </Button>
              </Link>
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

      <Footer />
    </div>
  );
}
