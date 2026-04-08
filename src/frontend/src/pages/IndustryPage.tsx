import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { INDUSTRIES, INDUSTRY_SOLUTIONS, slugify } from "../data";
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

  const applicableAreas = (solutions?.applicationAreas ?? []) as string[];

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      <PageBanner
        image={industry.bannerImage ?? industry.image}
        badge="Industry"
        title={industry.name.toUpperCase()}
        objectPosition="center"
      />

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Back button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors"
            data-ocid="industry.secondary_button"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>

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
                  <h2 className="text-2xl font-bold">
                    {industry.name.toUpperCase()}
                  </h2>
                  <p className="text-muted-foreground">{industry.desc}</p>
                </div>
              </div>
            </motion.section>

            {applicableAreas.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Application Areas</h2>
                <div className="space-y-1.5">
                  {applicableAreas.map((area) => (
                    <div key={area} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  …. many more
                </p>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Industry image in sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <img
                src={industry.bannerImage ?? industry.image}
                alt={industry.name}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="font-bold text-lg mb-3">
                Interested in exploring the possibilities?
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Connect with our experts to see how our services and products
                can add value to your industry.
              </p>
              <Link to="/contact" data-ocid="industry.primary_button">
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
              <h3 className="font-bold text-base mb-4">Other Industries</h3>
              <ul className="space-y-2">
                {INDUSTRIES.filter((ind) => ind.name !== industry.name).map(
                  (ind) => (
                    <li key={ind.name}>
                      <div className="relative group">
                        <Link
                          to="/industries/$slug"
                          params={{ slug: slugify(ind.name) }}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                          data-ocid="industry.link"
                        >
                          <ChevronRight className="w-4 h-4" />
                          {ind.name.toUpperCase()}
                        </Link>
                        <div className="absolute z-50 left-0 top-full mt-1 w-64 bg-popover border border-border rounded-lg p-2.5 shadow-xl text-xs text-muted-foreground leading-relaxed pointer-events-none hidden group-hover:block">
                          {ind.desc}
                        </div>
                      </div>
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
