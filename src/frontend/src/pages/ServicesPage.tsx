import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import { SERVICES, slugify } from "../data";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/service-vr.dim_800x500.jpg"
        badge="What We Do"
        title="Our Technology Services"
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
              We provide end-to-end visual technology solutions tailored to meet
              advanced industry requirements across global markets. Our services
              span AR, VR, MR, Visual Simulation, and AI-driven application
              development, along with high-quality 3D content creation. From
              concept design to deployment and support, we deliver scalable,
              reliable, and high-performance solutions. Designed to address
              complex real-world challenges, our offerings enable immersive
              experiences for training, engineering, product visualization, and
              decision-making.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.title}
                to="/services/$slug"
                params={{ slug: slugify(s.title) }}
                className="block"
                data-ocid={`services.item.${i + 1}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group cursor-pointer h-full"
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-contain bg-[oklch(0.08_0.02_247)]"
                      loading="lazy"
                    />
                  </div>
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
