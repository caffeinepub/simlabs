import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { Shield, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
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
      <PageBanner
        image="/assets/generated/hero-slide-vs.dim_1200x700.jpg"
        badge="Our Edge"
        title="Why Choose SIMLABS?"
        objectPosition="center"
      />
      <main>
        <section className="py-14 bg-[oklch(0.11_0.028_247)] border-y border-border">
          <div className="container mx-auto px-6">
            <div className="mb-10">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
              <p className="text-muted-foreground">
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
