import { useMutation } from "@tanstack/react-query";

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async ({
      name,
      email,
      company,
      message,
    }: {
      name: string;
      email: string;
      company: string;
      message: string;
    }) => {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });
      if (!res.ok) throw new Error("Failed to submit contact form");
      return res.json();
    },
  });
}
