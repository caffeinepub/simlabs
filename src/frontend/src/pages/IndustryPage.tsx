import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import {
  INDUSTRIES,
  INDUSTRY_SOLUTIONS,
  PRODUCTS,
  SERVICES,
  slugify,
} from "../data";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
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

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      <PageBanner
        image={industry.bannerImage ?? industry.image}
        badge="Industry"
        title={industry.name}
        objectPosition="center"
      />

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

            {solutions?.applicationAreas &&
              solutions.applicationAreas.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Application Areas</h2>
                  <ul className="space-y-3">
                    {solutions.applicationAreas.map((area) => (
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

            {applicableServices.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Applicable Services</h2>
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

      <Footer />
    </div>
  );
}
