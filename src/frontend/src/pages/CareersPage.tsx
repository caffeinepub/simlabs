import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Briefcase, Mail } from "lucide-react";
import { motion } from "motion/react";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function CareersPage() {
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
                Join Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Careers</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
              data-ocid="jobs.card"
            >
              <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                We&apos;re always looking for talented individuals passionate
                about VR, AR, MR, Visual Simulation, Digital Twin, and AI/ML
                technologies, as well as developing electronic interfaces for
                simulators. Join a team building cutting-edge solutions across
                defence, aerospace, engineering, mining, healthcare, transport,
                and other advanced industries.
              </p>
              <div className="bg-card border border-border rounded-xl p-10 card-glow text-center">
                <div className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center mx-auto mb-6 text-white">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  No open positions right now
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We don&apos;t have any active openings at the moment, but
                  we&apos;d love to hear from you. Send your resume to{" "}
                  <span className="text-orange-500">
                    jobs at simlabs dot in
                  </span>
                  . We&apos;ll reach out when the right opportunity arises.
                </p>
                <a href="mailto:jobs@simlabs.in">
                  <Button
                    className="btn-gradient text-white gap-2"
                    data-ocid="jobs.submit_button"
                  >
                    <Mail className="w-4 h-4" />
                    Send Us Your Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
