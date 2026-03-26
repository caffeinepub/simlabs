import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS, PRODUCT_DETAILS, slugify } from "../data";
import SharedHeader from "./SharedHeader";

export default function ProductPage() {
  const { slug } = useParams({ from: "/products/$slug" });
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);
  const details = slug ? PRODUCT_DETAILS[slug] : undefined;

  // Determine back link based on search param
  const searchParams = new URLSearchParams(window.location.search);
  const fromHome = searchParams.get("from") === "home";

  if (!product) {
    return (
      <div className="min-h-screen bg-[oklch(0.09_0.028_247)] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Product Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The product you are looking for does not exist.
        </p>
        <Link to="/" data-ocid="not_found.link">
          <Button className="btn-gradient border-0 text-white">
            ← Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      {/* Hero - fully visible image */}
      <div className="relative pt-16">
        <div
          className="relative w-full overflow-hidden"
          style={{ minHeight: "300px", background: "oklch(0.09 0.028 247)" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full"
            style={{
              display: "block",
              maxHeight: "550px",
              objectFit: "contain",
              background: "oklch(0.09 0.028 247)",
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.028_247)] via-[oklch(0.09_0.028_247/0.5)] to-transparent"
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav
                className="flex items-center gap-2 text-sm text-muted-foreground mb-3"
                aria-label="Breadcrumb"
              >
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
                <ChevronRight className="w-4 h-4" />
                <a
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{product.name}</span>
              </nav>
              <Badge
                variant="outline"
                className="mb-3 border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase"
              >
                Software Products
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight gradient-text">
                {product.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="container mx-auto px-6 py-4">
        {fromHome ? (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            data-ocid="product.back_link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        ) : (
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            data-ocid="product.back_link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        )}
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center text-white flex-shrink-0">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="text-muted-foreground text-sm">
                    {product.desc}
                  </p>
                </div>
              </div>
            </motion.section>

            {details && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {details.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {details && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  Technical Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {details.highlights.map((h) => (
                    <div
                      key={h}
                      className="bg-card border border-border rounded-lg p-4 flex items-center gap-3"
                    >
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <h3 className="font-bold text-lg mb-3">Request a Demo</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                See {product.name} in action. Our team will walk you through a
                tailored demonstration.
              </p>
              <Link to="/contact" data-ocid="product.primary_button">
                <Button className="w-full btn-gradient border-0 text-white font-semibold">
                  Request a Demo
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-bold text-base mb-4">Other Products</h3>
              <ul className="space-y-2">
                {PRODUCTS.filter((p) => p.name !== product.name)
                  .slice(0, 6)
                  .map((p) => (
                    <li key={p.name}>
                      <Link
                        to="/products/$slug"
                        params={{ slug: slugify(p.name) }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        data-ocid="product.link"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {p.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-10">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {currentYear}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
