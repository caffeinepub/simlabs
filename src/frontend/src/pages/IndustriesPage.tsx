import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { INDUSTRIES, slugify } from "../data";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="pt-20">
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="mb-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                ← Back to Home
              </Link>
            </div>
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
                Our visual technology solutions serve a wide range of industries
                worldwide, delivering impactful and scalable solutions across
                diverse domains. While we have strong experience across multiple
                sectors, our capabilities are not limited to these industries.
                We continuously adapt our expertise to meet evolving
                requirements and new industry challenges. Our flexible and
                technology-driven approach enables us to support a broad
                spectrum of use cases across global markets.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INDUSTRIES.map((ind, i) => (
                <Link
                  key={ind.name}
                  to="/industries/$slug"
                  params={{ slug: slugify(ind.name) }}
                  className="block"
                  data-ocid={`industries.item.${i + 1}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group h-full cursor-pointer"
                  >
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="absolute inset-0 w-full h-full object-contain bg-[oklch(0.08_0.02_247)]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center mb-3 text-white mx-auto">
                        {ind.icon}
                      </div>
                      <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
