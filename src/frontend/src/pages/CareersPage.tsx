import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Briefcase, Clock, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

const JOB_LISTINGS = [
  {
    id: 1,
    title: "Application Developer (VR / AR / MR / Visual Simulation)",
    type: "Full Time",
    experience:
      "1 to 3 years of hands-on experience in AR, VR, MR, or Visual Simulation projects.",
    description:
      "We are looking for a motivated Application Developer to design and develop immersive applications using VR, AR, MR, and Visual Simulation technologies. The role involves building interactive experiences, integrating 3D content, and delivering high-performance applications across platforms. You will work closely with 3D artists and engineering teams to create scalable and engaging solutions.",
    skills: [
      "Proficiency in Unity3D or Unreal Engine for application development",
      "Knowledge of WebXR and immersive web technologies",
      "Experience with database integration and data handling",
      "Understanding of application architecture and performance optimization",
    ],
    goodToHave: [
      "Knowledge of 3D modeling, texturing, and asset pipelines",
      "Experience with tools such as Blender, Photoshop/GIMP, Substance Painter",
    ],
    location: "SIMLABS, Bangalore",
  },
  {
    id: 2,
    title: "3D Artist (VR / AR / MR / Visual Simulation)",
    type: "Full Time",
    experience:
      "1 to 3 years of experience in AR, VR, MR, or Visual Simulation projects.",
    description:
      "We are seeking a creative 3D Artist to develop high-quality 3D models, terrains, and UI elements for immersive applications across VR, AR, MR, Visual Simulation, Digital Twins, and AI-driven solutions. The role requires creating optimized assets suitable for real-time environments and collaborating with developers to ensure seamless integration.",
    skills: [
      "Proficiency in Blender, Maya, or 3ds Max",
      "Experience with texturing tools such as Substance Painter, Photoshop/GIMP",
      "Ability to create optimized 3D assets for real-time applications",
      "Basic knowledge of Unity3D or Unreal Engine editors",
      "Experience in video editing and visual effects development",
    ],
    goodToHave: [
      "Understanding of application development workflows in Unity3D or Unreal Engine",
    ],
    location: "SIMLABS, Bangalore",
  },
  {
    id: 3,
    title: "Electronics Engineer (Simulation Interfaces & Firmware)",
    type: "Full Time",
    experience:
      "2 to 3 years of experience in developing interfaces for simulator or embedded systems projects.",
    description:
      "We are looking for an Electronics Engineer to design and develop hardware interfaces and firmware for simulators. The role involves enabling two-way communication between physical components and simulation applications developed in Unity3D or Unreal Engine, ensuring seamless integration of hardware with virtual environments.",
    skills: [
      "Strong knowledge of microcontrollers and embedded systems",
      "Experience with hardware boards and communication protocols (UART, SPI, I2C, etc.)",
      "Firmware development and debugging skills",
      "Understanding of real-time data communication between hardware and software",
      "Basic knowledge of Unity3D or Unreal Engine integration",
    ],
    goodToHave: [],
    location: "SIMLABS, Bangalore",
  },
  {
    id: 4,
    title: "Intern – Application Developer",
    type: "Internship",
    duration: "3 to 6 months",
    description:
      "We are looking for enthusiastic interns to work on VR, AR, MR, and Visual Simulation applications. You will assist in developing interactive modules, integrating 3D assets, and supporting the development team in building immersive solutions.",
    skills: [
      "Basic knowledge of Unity3D or Unreal Engine",
      "Understanding of programming concepts (C#, C++, or similar)",
      "Interest in AR/VR/MR technologies and interactive application development",
      "Willingness to learn and work in a collaborative environment",
    ],
    goodToHave: [],
    location: "SIMLABS, Bangalore",
  },
  {
    id: 5,
    title: "Intern – 3D Artist",
    type: "Internship",
    duration: "3 to 6 months",
    description:
      "We are looking for creative interns to support the development of 3D models, terrains, and UI elements for immersive applications in VR, AR, MR, Visual Simulation, Digital Twins, and AI solutions. You will work closely with the design and development teams to create optimized visual assets.",
    skills: [
      "Knowledge of Blender, Maya, or 3ds Max",
      "Basic skills in Photoshop/GIMP and texturing tools like Substance Painter",
      "Understanding of 3D modeling, lighting, and rendering fundamentals",
      "Familiarity with Unity3D or Unreal Engine editors is a plus",
      "Basic video editing and visual effects knowledge",
    ],
    goodToHave: [
      "Interest or exposure to real-time application development using Unity3D or Unreal Engine",
    ],
    location: "SIMLABS, Bangalore",
  },
  {
    id: 6,
    title: "Intern – Business Development",
    type: "Internship",
    duration: "3 to 6 months",
    description:
      "We are looking for a proactive and enthusiastic Business Development Intern to support our growth initiatives across India and international markets. The role involves identifying potential clients, researching target industries, and assisting in lead generation for our VR, AR, MR, Visual Simulation, Digital Twins and AI-based solutions. You will work closely with the core team to develop outreach strategies, prepare proposals, and engage with prospective customers.",
    responsibilities: [
      "Research and identify potential clients across India and global markets (USA, Europe, Japan, Australia, etc.)",
      "Support lead generation through LinkedIn, email outreach, and other channels",
      "Assist in preparing proposals, presentations, and marketing materials",
      "Maintain and update CRM/database of leads and opportunities",
      "Analyze market trends, customer needs, and competitor activities",
      "Coordinate with technical teams to understand offerings and position solutions effectively",
    ],
    skills: [
      "Strong communication and interpersonal skills",
      "Basic understanding of business development and sales processes",
      "Familiarity with LinkedIn and digital outreach methods",
      "Good research and analytical skills",
      "Proficiency in MS Office (PowerPoint, Excel, Word)",
    ],
    goodToHave: [
      "Interest in VR, AR, MR, simulation, or emerging technologies",
      "Exposure to B2B sales in India and/or international markets",
      "Basic knowledge of marketing or branding",
    ],
    location: "SIMLABS, Bangalore",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="pt-20">
        <section className="py-10 bg-[oklch(0.11_0.028_247)] border-y border-border">
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
                Join Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Careers</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground mb-10 leading-relaxed text-center">
                We&apos;re always looking for talented individuals passionate
                about VR, AR, MR, Visual Simulation, Digital Twin, and AI/ML
                technologies, as well as developing electronic interfaces for
                simulators. Join a team building cutting-edge solutions across
                defence, aerospace, engineering, mining, healthcare, transport,
                and other advanced industries.
              </p>

              {/* Open Positions */}
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Open Positions
              </h3>
              <div className="grid grid-cols-1 gap-6 mb-10">
                {JOB_LISTINGS.map((job, i) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-card border border-border rounded-xl p-6 card-glow"
                    data-ocid={`careers.item.${i + 1}`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          {(job as any).duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {(job as any).duration}
                            </span>
                          )}
                          {(job as any).experience && (
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5" />
                              {(job as any).experience}
                            </span>
                          )}
                        </div>
                      </div>
                      <Badge
                        className={`shrink-0 text-xs font-semibold uppercase tracking-wide ${
                          job.type === "Internship"
                            ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                            : "bg-orange-500/15 text-orange-400 border-orange-500/30"
                        }`}
                        variant="outline"
                      >
                        {job.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Key Responsibilities (BD intern only) */}
                    {(job as any).responsibilities && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Key Responsibilities
                        </p>
                        <ul className="space-y-1">
                          {(job as any).responsibilities.map((r: string) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills Required */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Skills Required
                      </p>
                      <ul className="space-y-1">
                        {job.skills.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Good to Have */}
                    {job.goodToHave.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">
                          Good to Have
                        </p>
                        <ul className="space-y-1">
                          {job.goodToHave.map((g) => (
                            <li
                              key={g}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground/70 border-t border-border pt-4 mt-2">
                      Visit{" "}
                      <a
                        href="https://www.simlabs.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.simlabs.in
                      </a>{" "}
                      to learn more about SIMLABS and our work in immersive
                      technologies.
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-10 card-glow text-center"
                data-ocid="jobs.card"
              >
                <div className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center mx-auto mb-6 text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Want to apply? Send us your resume.
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Send your resume to{" "}
                  <span className="text-orange-500">
                    jobs at simlabs dot in
                  </span>
                  . We will reach out if a suitable opportunity becomes
                  available.
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
