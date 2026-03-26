import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { Shield, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

const WHY = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Uncompromising Quality",
    desc: "We deliver uncompromising quality in every project, ensuring outputs exceed industry standards and client expectations.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Cost-Effective Solutions",
    desc: "We offer competitive pricing without sacrificing quality, ensuring maximum value for your investment with transparent delivery.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Deep Domain Expertise",
    desc: "Our team of seasoned professionals brings extensive experience in delivering visual technology solutions across industries.",
  },
];

export default function WhySimlabsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="pt-20">
        <section className="py-24 bg-[oklch(0.11_0.028_247)] border-y border-border">
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
                Our Edge
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">SIMLABS</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Three pillars that define our commitment to excellence and
                client success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  data-ocid={`why.item.${i + 1}`}
                  className="bg-card border border-border rounded-xl p-8 text-center card-glow transition-all duration-300 hover:border-primary/50 group"
                >
                  <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center mx-auto mb-5 text-white">
                    {w.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {w.desc}
                  </p>
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
