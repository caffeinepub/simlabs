import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";
import { REFERENCE_PROJECTS } from "../appData";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="container mx-auto px-6 py-20">
        <div className="mb-10">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
            >
              Reference Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {REFERENCE_PROJECTS.map((proj, i) => (
              <motion.div
                key={`${proj.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {proj.image ? (
                  <div
                    className="relative w-full overflow-hidden"
                    style={{
                      aspectRatio: "16/9",
                      background: "oklch(0.09 0.028 247)",
                    }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="absolute inset-0 w-full h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="h-40 bg-card flex items-center justify-center border-b border-border">
                    <div className="text-4xl text-muted-foreground/30 font-bold">
                      ?
                    </div>
                  </div>
                )}
                <div className="p-3">
                  <p className="font-semibold text-sm leading-tight mb-1">
                    {proj.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
