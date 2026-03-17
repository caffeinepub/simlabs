import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("simlabs_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("simlabs_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("simlabs_cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 bg-[oklch(0.11_0.028_247/0.98)] border-t border-border backdrop-blur-xl"
          data-ocid="cookie.panel"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground flex-1 text-center sm:text-left">
              We use cookies to enhance your browsing experience. By continuing,
              you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-primary underline hover:text-primary/80"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="border-border text-muted-foreground hover:text-primary hover:border-primary"
                data-ocid="cookie.cancel_button"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="btn-gradient border-0 text-white font-semibold"
                data-ocid="cookie.confirm_button"
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
