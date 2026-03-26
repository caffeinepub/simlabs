import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SERVICES, slugify } from "../data";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function ServicesPage() {
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
            <div className="text-center mb-14">
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Technology Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide end-to-end visual technology solutions tailored to
                meet advanced industry requirements across global markets. Our
                services span AR, VR, MR, Visual Simulation, and AI-driven
                application development, along with high-quality 3D content
                creation. From concept design to deployment and support, we
                deliver scalable, reliable, and high-performance solutions.
                Designed to address complex real-world challenges, our offerings
                enable immersive experiences for training, engineering, product
                visualization, and decision-making.
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group cursor-pointer h-full"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-36 object-cover"
                      loading="lazy"
                    />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
