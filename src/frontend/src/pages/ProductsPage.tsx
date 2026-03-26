import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PRODUCTS, slugify } from "../data";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function ProductsPage() {
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
                PRODUCTS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer professional visual technology solutions built on
                world-class technology, encompassing AR, VR, MR, Visual
                Simulation, and AI-driven capabilities. Our products are
                designed to support a wide range of applications, including
                training, product experience, design studies, technical
                assistance, and sales and marketing. With a focus on high
                performance, scalability, and reliability, our solutions deliver
                immersive and high-fidelity experiences for complex, real-world
                use cases across industries.
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-primary/50 group cursor-pointer h-full"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
