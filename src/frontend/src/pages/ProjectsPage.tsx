import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { REFERENCE_PROJECTS } from "../appData";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="mb-6">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                ← Back to Home
              </Link>
            </div>
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
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of VR, AR, MR, and Visual Simulation (VS) projects
                delivered across industries, showcasing our expertise in
                immersive application development and high-quality 3D content
                creation. Our work spans training, product visualization, and
                engineering simulations, enabling effective communication of
                complex concepts through interactive experiences. From immersive
                training modules to digital product launches and large-scale
                simulations, we deliver solutions tailored to specific business
                needs. While the projects highlighted here represent key
                engagements, our capabilities extend far beyond these examples.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {REFERENCE_PROJECTS.map((proj, i) => (
                <motion.div
                  key={`${proj.name}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  {proj.image ? (
                    <div
                      className="relative overflow-hidden"
                      style={{
                        height: "160px",
                        background: "oklch(0.09 0.028 247)",
                      }}
                    >
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
