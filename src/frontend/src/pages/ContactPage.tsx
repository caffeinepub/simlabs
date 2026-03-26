import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Globe,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "./Footer";
import SharedHeader from "./SharedHeader";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinzip: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    return { a, b, answer: a + b };
  });
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const resetCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptchaQuestion({ a, b, answer: a + b });
    setCaptchaInput("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Number.parseInt(captchaInput) !== captchaQuestion.answer) {
      setCaptchaError(true);
      resetCaptcha();
      return;
    }
    setCaptchaError(false);
    setIsPending(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setIsSuccess(true);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({
        name: "",
        email: "",
        mobile: "",
        company: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pinzip: "",
        message: "",
      });
      resetCaptcha();
    } catch {
      setIsError(true);
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <main className="pt-20">
        <section className="py-10 bg-[oklch(0.11_0.028_247)] border-t border-border">
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
                Let&apos;s Talk
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ready to transform your simulation, training, visualization,
                design, technical assistance, and marketing capabilities?
                Connect with the <span className="gradient-text">SIMLABS</span>
                <sup className="text-xs">®</sup> team to explore how our visual
                technology solutions can address your needs across any industry.
                We deliver tailored, high-impact solutions designed for
                performance, scalability, and efficiency. Let&#39;s collaborate
                to bring your ideas to life through advanced, cost-effective
                technologies.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  data-ocid="contact.panel"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cp-name"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="cp-name"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cp-email"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="cp-email"
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cp-mobile"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        Mobile Number *
                      </label>
                      <Input
                        id="cp-mobile"
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.mobile}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, mobile: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cp-company"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        Company / Organisation *
                      </label>
                      <Input
                        id="cp-company"
                        required
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, company: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cp-address"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                    >
                      Address
                    </label>
                    <Input
                      id="cp-address"
                      placeholder="123 Street Name, Area"
                      value={form.address}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, address: e.target.value }))
                      }
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cp-city"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        City
                      </label>
                      <Input
                        id="cp-city"
                        placeholder="Bangalore"
                        value={form.city}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, city: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cp-state"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        State
                      </label>
                      <Input
                        id="cp-state"
                        placeholder="Karnataka"
                        value={form.state}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, state: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cp-country"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        Country
                      </label>
                      <Input
                        id="cp-country"
                        placeholder="India"
                        value={form.country}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, country: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cp-pinzip"
                        className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                      >
                        PIN / ZIP Code
                      </label>
                      <Input
                        id="cp-pinzip"
                        placeholder="560001"
                        value={form.pinzip}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, pinzip: e.target.value }))
                        }
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cp-message"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="cp-message"
                      required
                      rows={4}
                      placeholder="Tell us about your project or requirements..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cp-captcha"
                      className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5"
                    >
                      CAPTCHA: What is {captchaQuestion.a} + {captchaQuestion.b}
                      ? *
                    </label>
                    <Input
                      required
                      type="number"
                      id="cp-captcha"
                      placeholder="Enter answer"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setCaptchaError(false);
                      }}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      data-ocid="contact.input"
                    />
                    {captchaError && (
                      <p className="text-xs text-destructive mt-1">
                        Incorrect answer. Please try again.
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-gradient text-white font-semibold gap-2"
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <ChevronRight className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </Button>
                  {isSuccess && (
                    <p
                      className="text-sm text-primary text-center"
                      data-ocid="contact.success_state"
                    >
                      ✓ Your message has been delivered successfully.
                    </p>
                  )}
                  {isError && (
                    <p
                      className="text-sm text-destructive text-center"
                      data-ocid="contact.error_state"
                    >
                      ✗ Something went wrong. Please try again or email us
                      directly.
                    </p>
                  )}
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* Business enquiries */}
                    <div
                      className="p-4 rounded-xl bg-card border border-border"
                      data-ocid="contact.card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">
                            For business enquiries:
                          </p>
                          <p className="text-sm font-medium">
                            info at simlabs dot in / simlabs at simlabs dot in
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* WhatsApp */}
                    <div
                      className="p-4 rounded-xl bg-card border border-border"
                      data-ocid="contact.card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">
                            WhatsApp
                          </p>
                          <p className="text-sm font-medium">+91 7795239395</p>
                        </div>
                      </div>
                    </div>
                    {/* Job enquiries */}
                    <div
                      className="p-4 rounded-xl bg-card border border-border"
                      data-ocid="contact.card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">
                            For job enquiries:
                          </p>
                          <p className="text-sm font-medium">
                            jobs at simlabs dot in
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Website */}
                    <a
                      href="https://www.simlabs.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                      data-ocid="contact.link"
                    >
                      <div className="w-10 h-10 rounded-lg btn-gradient flex items-center justify-center text-white flex-shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          Website
                        </p>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">
                          www.simlabs.in
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      SIMLABS<sup className="text-xs">®</sup>
                    </span>{" "}
                    is based in Bangalore, India, serving clients across India
                    and around the world in defence, aerospace, automotive,
                    engineering, mining, healthcare, transport, and other
                    sectors. Get in touch to explore how we can bring your
                    vision to life.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
