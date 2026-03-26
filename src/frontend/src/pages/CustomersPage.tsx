import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { CUSTOMER_LOGOS, TESTIMONIALS } from "../appData";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function CustomersPage() {
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
                Clientele
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Customers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Served many leading organizations across multiple industries in
                India and globally.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
              {CUSTOMER_LOGOS.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-center p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <span className="text-base font-bold text-foreground text-center leading-tight uppercase tracking-wide">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mb-8 mt-16">
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                Customers Feedback
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">Testimonials</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.org}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`customers.item.${i + 1}`}
                  className="bg-card border border-border rounded-xl p-7 card-glow transition-all duration-300 flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.org.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.org}</p>
                    </div>
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
