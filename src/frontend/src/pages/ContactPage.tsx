import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

function ContactInfoImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = 560;
    const H = 220;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Background
    ctx.fillStyle = "#0f1117";
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, 14);
    ctx.fill();

    // Border
    ctx.strokeStyle = "rgba(249,115,22,0.35)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, 14);
    ctx.stroke();

    // Header bar
    ctx.fillStyle = "rgba(249,115,22,0.12)";
    ctx.beginPath();
    ctx.roundRect(0, 0, W, 36, [14, 14, 0, 0]);
    ctx.fill();

    // Header label
    ctx.fillStyle = "#f97316";
    ctx.font = "bold 11px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0.1em";
    ctx.fillText("ENQUIRY DETAILS", 18, 23);

    // Divider line after header
    ctx.strokeStyle = "rgba(249,115,22,0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 36);
    ctx.lineTo(W, 36);
    ctx.stroke();

    // Business Enquiries section — shifted down by 20px for more top breathing room
    // Briefcase icon drawn with canvas paths
    const bx = 14; // icon origin x
    const by = 68; // icon origin y (top of icon) — was 48, now +20
    const bw = 18; // icon width
    const bh = 14; // icon body height
    ctx.fillStyle = "#f97316";
    ctx.strokeStyle = "#f97316";
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Briefcase body
    ctx.beginPath();
    ctx.roundRect(bx, by + 4, bw, bh, 2);
    ctx.stroke();
    // Briefcase handle
    ctx.beginPath();
    ctx.roundRect(bx + 5, by, bw - 10, 5, 1.5);
    ctx.stroke();
    // Briefcase center divider
    ctx.beginPath();
    ctx.moveTo(bx, by + 4 + bh / 2);
    ctx.lineTo(bx + bw, by + 4 + bh / 2);
    ctx.stroke();

    // Label — was 58, now +20 = 78
    ctx.fillStyle = "#f97316";
    ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0.08em";
    ctx.fillText("BUSINESS ENQUIRIES", 38, 78);

    // Value — was 78, now +20 = 98
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0";
    ctx.fillText("Submit the form or write to  simlabs@simlabs.in", 38, 98);

    // Divider between sections — was 98, now +20 = 118
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(16, 128);
    ctx.lineTo(W - 16, 128);
    ctx.stroke();

    // Job Enquiries section — shifted down by 30px total for more breathing room
    // Envelope icon drawn with canvas paths
    const ex = 14; // icon origin x
    const ey = 143; // icon origin y — was 108, now +35
    const ew = 18; // icon width
    const eh = 13; // icon height
    ctx.strokeStyle = "#f97316";
    ctx.lineWidth = 1.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Envelope body
    ctx.beginPath();
    ctx.roundRect(ex, ey, ew, eh, 2);
    ctx.stroke();
    // Envelope flap (V shape)
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(ex + ew / 2, ey + eh * 0.55);
    ctx.lineTo(ex + ew, ey);
    ctx.stroke();

    // Label — was 118, now +35 = 153
    ctx.fillStyle = "#f97316";
    ctx.font = "bold 16px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0.08em";
    ctx.fillText("JOB ENQUIRIES", 38, 153);

    // Value — was 138, now +35 = 173
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.letterSpacing = "0";
    ctx.fillText("Write to  jobs@simlabs.in", 38, 173);

    setImgSrc(canvas.toDataURL("image/png"));
  }, []);

  return (
    <>
      {/* Hidden canvas used only for generation */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {imgSrc && (
        <img
          src={imgSrc}
          alt="Enquiry contact details — Business: simlabs@simlabs.in, Jobs: jobs@simlabs.in"
          className="w-full rounded-xl select-none pointer-events-none"
          draggable={false}
          data-ocid="contact.card"
        />
      )}
    </>
  );
}

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
      const subject = encodeURIComponent(
        `Contact Form Enquiry from ${form.name} - ${form.company}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nMobile: ${form.mobile}\nCompany: ${form.company}\nAddress: ${form.address}\nCity: ${form.city}\nState: ${form.state}\nCountry: ${form.country}\nPIN/ZIP: ${form.pinzip}\n\nMessage:\n${form.message}`,
      );
      window.location.href = `mailto:simlabs@simlabs.in?subject=${subject}&body=${body}`;
      setIsSuccess(true);
      toast.success(
        "Email client opened. Please send the email to complete your enquiry.",
      );
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
      toast.error(
        "Failed to open email client. Please email us directly at simlabs@simlabs.in",
      );
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      <PageBanner
        image="/assets/generated/banner-contacts-new.dim_1200x400.jpg"
        badge="Connect With Us"
        title="Connect with Our Team"
        objectPosition="center"
      />
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6" />
            <p className="text-muted-foreground">
              Ready to transform your simulation, training, visualization,
              design, technical assistance, and marketing capabilities? Connect
              with the <span className="gradient-text">SIMLABS</span>
              <sup className="text-xs">®</sup> team to explore how our visual
              technology solutions can address your needs across any industry.
              We deliver tailored, high-impact solutions designed for
              performance, scalability, and efficiency. Let&#39;s collaborate to
              bring your ideas to life through advanced, cost-effective
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
                    CAPTCHA: What is {captchaQuestion.a} + {captchaQuestion.b}?
                    *
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
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <ContactInfoImage />
                </div>
              </div>
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    SIMLABS<sup className="text-xs">®</sup>
                  </span>{" "}
                  is based in Bangalore, India, serving clients across India and
                  around the world in defence, aerospace, automotive,
                  engineering, mining, healthcare, transport, and other sectors.
                  Get in touch to explore how we can bring your vision to life.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
