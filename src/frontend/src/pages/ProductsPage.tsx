import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import { PRODUCTS, slugify } from "../data";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/banner-products-new.dim_1200x400.jpg"
        badge="PRODUCTS"
        title="Our Products"
        objectPosition="center"
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
              We offer professional visual technology solutions built on
              world-class technology, encompassing AR, VR, MR, Visual
              Simulation, and AI-driven capabilities. Our products are designed
              to support a wide range of applications, including training,
              product experience, design studies, technical assistance, and
              sales and marketing. With a focus on high performance,
              scalability, and reliability, our solutions deliver immersive and
              high-fidelity experiences for complex, real-world use cases across
              industries.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.name}
                to="/products/$slug"
                params={{ slug: slugify(p.name) }}
                className="block"
                data-ocid={`products.item.${i + 1}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group cursor-pointer h-full"
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-contain bg-[oklch(0.08_0.02_247)]"
                      loading="lazy"
                    />
                  </div>
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
              </Link>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
