"use client";

import { useState, useEffect } from "react";
import { Mail, Loader2, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "@/constants/social";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">
          Contact
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
          Contact <span className="text-primary">Me!</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          I'm always interested in new opportunities and collaborations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none resize-none transition-colors"
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg border border-primary bg-primary/10 px-8 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={16} />
                  Submit
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 size={16} />
                Mensaje enviado correctamente
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-primary">
                <XCircle size={16} />
                Hubo un error, intentá de nuevo
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}