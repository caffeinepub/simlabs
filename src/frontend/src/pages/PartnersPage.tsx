import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

const TECHNOLOGY_PARTNERS = [
  {
    name: "TrianGraphics",
    url: "https://triangraphics.de/",
    logo: null,
    desc: "TrianGraphics provides advanced solutions for automated generation of highly realistic 3D terrains and environments, enabling large-scale real-time simulations across automotive, aerospace, defence, and training domains. Their flagship product, Trian3DBuilder, is a world-leading terrain database generation system for highly automated, accurate 3D terrain creation. With a strong focus on automation and fidelity, their solutions enable rapid development of scalable, real-world simulation environments.",
  },
  {
    name: "Remograph",
    url: "https://www.remograph.com/#/",
    logo: null,
    desc: "Remograph provides advanced tools for 3D modeling and visual simulation, enabling creation of optimized models and environments for real-time simulations. Their flagship products include Remo 3D for building and editing simulation-ready 3D models, and Remoscape, a cloud-based solution for automated generation of realistic 3D terrains from geospatial data. With a focus on efficiency and real-time performance, their solutions support scalable applications across defence, aerospace, and engineering domains.",
  },
  {
    name: "HarTech Technologies",
    url: "https://www.hartech.co.il/",
    logo: null,
    desc: "HarTech Technologies provides advanced wargaming, command and control (C3I) systems, and simulation infrastructure for large-scale, real-time simulations and training environments. Their key products include the Smart Scenario Generator (SSG) for creating high-fidelity synthetic scenarios, and C3I engines for developing distributed command and control systems. With strong expertise in simulation and system integration, their solutions support mission-critical defence applications.",
  },
  {
    name: "Sundog Software",
    url: "https://sundog-soft.com/",
    logo: null,
    desc: "Sundog Software provides advanced SDKs for real-time rendering of natural environments, including skies, clouds, weather, and oceans for high-fidelity simulations. Their key products—SilverLining Sky & 3D Clouds SDK and Triton 3D Ocean & Water SDK—enable physically accurate, real-time environmental effects for training, simulation, and gaming applications. With strong performance and easy integration, their solutions power realistic outdoor environments across defence, aerospace, and visual simulation domains.",
  },
];

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/banner-partners.dim_1200x400.jpg"
        badge="Partnerships"
        title="Our Partners"
        objectPosition="center"
      />

      <main className="container mx-auto px-6 py-12">
        {/* Back link */}
        {/* Development Partners */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <Badge
              variant="outline"
              className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
            >
              Collaborate
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development Partners
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collaborate with enterprises, system integrators, and service
              providers in visual content, visual application, and simulator
              development to deliver scalable, high-quality, and domain-specific
              solutions across industries. Our partners benefit from access to
              advanced visual simulation, AR, VR and MR capabilities, strong
              domain expertise, and opportunities to co-develop high-impact
              solutions for a wider customer base, while reducing development
              time and leveraging cost-effective offshore execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are currently exploring structured partnerships with firms
              where we can operate as a white-label offshore execution partner,
              extending delivery capacity without adding internal headcount.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <p className="text-muted-foreground text-sm">
              Interested in becoming a development partner? Reach out to us via
              the{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contacts
              </Link>{" "}
              page.
            </p>
          </div>
        </motion.section>

        {/* Technology Partners */}
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
              Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Partners
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              We collaborate with leading global technology providers as an
              authorized distributor / reseller and technical support partner in
              India. We bring advanced visual simulation technologies to
              customers through localized support, integration, and deployment
              expertise. Our technology partners benefit from access to the
              Indian market, faster customer onboarding, and a reliable local
              team to drive sales, support, and long-term customer success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNOLOGY_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 group/link"
                    aria-label={`Visit ${partner.name}`}
                  >
                    <span className="text-base font-bold text-foreground group-hover/link:text-primary transition-colors">
                      {partner.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover/link:text-primary transition-colors flex-shrink-0" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {partner.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </a>
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
