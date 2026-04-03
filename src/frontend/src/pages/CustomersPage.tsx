import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { CUSTOMER_LOGOS, TESTIMONIALS } from "../appData";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

export default function CustomersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/banner-customers-new.dim_1200x400.jpg"
        badge="Our Clients"
        title="Customers & Testimonials"
        objectPosition="center"
      />
      <main className="container mx-auto px-6 py-12">
        {/* Our Customers list first */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-10">
            <Badge
              variant="outline"
              className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
            >
              Clientele
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Customers
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
            <p className="text-muted-foreground mb-3">
              We are proud to serve a diverse set of customers across
              industries, including aerospace, defense, engineering,
              manufacturing, and research organizations. Our clients range from
              global enterprises and system integrators to government
              institutions and training organizations, who rely on our expertise
              in visual simulation, XR technologies.
            </p>
            <p className="text-muted-foreground">
              We work closely with our customers as trusted partners, delivering
              high-quality, cost-effective, and scalable solutions tailored to
              their specific requirements. Our focus on quality, technical
              expertise, and timely delivery has enabled us to build long-term
              relationships and consistently exceed customer expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-4">
            {CUSTOMER_LOGOS.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-full flex items-center justify-center rounded-lg border border-gray-200 overflow-hidden"
                  style={{
                    height: "90px",
                    padding: "10px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="object-contain max-h-full max-w-full"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs font-bold text-gray-700 text-center uppercase">
                      {c.name}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-center uppercase tracking-wide text-foreground/80 w-full">
                  {c.name}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/60 italic mt-4">
            All logos and trademarks displayed are the property of their
            respective owners and are used for identification purposes only.
          </p>
        </motion.section>

        {/* Testimonials second */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-8">
            <Badge
              variant="outline"
              className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
            >
              What Our Clients Say
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.org}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
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
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
