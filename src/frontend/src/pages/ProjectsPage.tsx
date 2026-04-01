import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import { REFERENCE_PROJECTS } from "../appData";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/project-su30mki.dim_600x380.jpg"
        badge="Reference Projects"
        title="Our Projects"
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
              A selection of VR, AR, MR, and Visual Simulation (VS) projects
              delivered across industries, showcasing our expertise in immersive
              application development and high-quality 3D content creation. Our
              work spans training, product visualization, and engineering
              simulations, enabling effective communication of complex concepts
              through interactive experiences. From immersive training modules
              to digital product launches and large-scale simulations, we
              deliver solutions tailored to specific business needs. While the
              projects highlighted here represent key engagements, our
              capabilities extend far beyond these examples.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFERENCE_PROJECTS.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                data-ocid={`projects.item.${i + 1}`}
                className="bg-card border border-border rounded-xl overflow-hidden card-glow"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="absolute inset-0 w-full h-full object-contain bg-[oklch(0.08_0.02_247)]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2">{proj.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
