import { Button } from "@/components/ui/button";
import { Link, useParams } from "@tanstack/react-router";
import { CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS, PRODUCT_DETAILS, slugify } from "../data";
import Footer from "./Footer";
import PageBanner from "./PageBanner";
import SharedHeader from "./SharedHeader";

const PRODUCT_BANNERS: Record<string, string> = {
  ssg: "/assets/generated/product-ssg-banner.dim_1200x400.jpg",
  trian3dbuilder:
    "/assets/generated/product-trian3dbuilder-banner.dim_1200x400.jpg",
  layar: "/assets/generated/product-layar-banner.dim_1200x400.jpg",
  intbot: "/assets/generated/product-intbot-banner.dim_1200x400.jpg",
  collab: "/assets/generated/product-collab-banner.dim_1200x400.jpg",
  torque: "/assets/generated/product-torque-banner.dim_1200x400.jpg",
  paintx: "/assets/generated/product-paintx-banner.dim_1200x400.jpg",
  prodoc: "/assets/generated/product-prodoc-banner.dim_1200x400.jpg",
  remoscape: "/assets/generated/product-remoscape-banner.dim_1200x400.jpg",
};

export default function ProductPage() {
  const { slug } = useParams({ from: "/products/$slug" });
  const product = PRODUCTS.find((p) => slugify(p.name) === slug);
  const details = slug ? PRODUCT_DETAILS[slug] : undefined;

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
            \u2190 Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const bannerImage =
    slug && PRODUCT_BANNERS[slug] ? PRODUCT_BANNERS[slug] : product.image;

  // Normalise details: it might be an array (collab) or object
  const detailsObj = Array.isArray(details) ? details[0] : details;

  return (
    <div className="min-h-screen bg-[oklch(0.09_0.028_247)] text-foreground">
      <SharedHeader />

      <PageBanner
        image={bannerImage}
        badge="Product"
        title={product.name}
        objectPosition="center"
      />

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

            {detailsObj && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-1.5">
                  {detailsObj.features.map((f) => (
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

            {detailsObj?.applicationAreas &&
              detailsObj.applicationAreas.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h2 className="text-2xl font-bold mb-6">
                    Typical Application Areas
                  </h2>
                  <ul className="space-y-1.5">
                    {detailsObj.applicationAreas.map((area) => (
                      <li key={area} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

            {detailsObj && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  Technical Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {detailsObj.highlights.map((h) => (
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
                {PRODUCTS.filter((p) => p.name !== product.name).map((p) => (
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

      <Footer />
    </div>
  );
}
