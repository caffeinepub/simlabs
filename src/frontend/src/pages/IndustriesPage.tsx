import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import { INDUSTRIES, slugify } from "../data";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/industry-aerospace.dim_600x400.jpg"
        badge="Sectors"
        title="Industries We Serve"
        objectPosition="center 30%"
      />
      <main className="container mx-auto px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
            <p className="text-muted-foreground">
              Our visual technology solutions serve a wide range of industries
              worldwide, delivering impactful and scalable solutions across
              diverse domains. While we have strong experience across multiple
              sectors, our capabilities are not limited to these industries. We
              continuously adapt our expertise to meet evolving requirements and
              new industry challenges. Our flexible and technology-driven
              approach enables us to support a broad spectrum of use cases
              across global markets.
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
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
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
