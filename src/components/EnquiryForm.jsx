import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { PACKAGES } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function EnquiryForm({ defaultPackage = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    package: defaultPackage || PACKAGES[0].title,
    visit_date: "",
    guests: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please provide your name and phone.");
      return;
    }
    try {
      const payload = {
        ...form,
        email: form.email || null,
        visit_date: form.visit_date || null,
        guests: form.guests ? parseInt(form.guests, 10) : null,
        message: form.message || null,
      };

      const existing = JSON.parse(localStorage.getItem("swarajya_enquiries") || "[]");
      const newEnquiry = {
        ...payload,
        id: Math.random().toString(36).substring(2, 11),
        created_at: new Date().toISOString(),
        status: "new",
      };
      existing.unshift(newEnquiry);
      localStorage.setItem("swarajya_enquiries", JSON.stringify(existing));

      toast.success("Enquiry received. We'll call you back within 12 hours.");
      setForm({
        name: "",
        phone: "",
        email: "",
        package: defaultPackage || PACKAGES[0].title,
        visit_date: "",
        guests: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="enquire"
      className="relative bg-[#F6F5F2] py-12 md:py-20"
      data-testid="enquiry-section"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-5"
        >
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A6A61] mb-3">
            Plan your visit
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-[1] text-[#1A2520]">
            Tell us a little. <span className="italic text-[#1E3B2C]">We'll do the rest.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-[#1A2520]/80 leading-relaxed max-w-sm">
            Fill this quiet little form or reach us on WhatsApp. Our host will
            get back to you personally with dates, rooms and menu options.
          </p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="col-span-12 md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-10"
          data-testid="enquiry-form"
        >
          <Field
            label="Full name"
            value={form.name}
            onChange={update("name")}
            required
            testid="enquiry-input-name"
          />
          <Field
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            required
            testid="enquiry-input-phone"
          />
          <Field
            label="Email (optional)"
            type="email"
            value={form.email}
            onChange={update("email")}
            testid="enquiry-input-email"
          />
          <Field
            label="Visit date"
            type="date"
            value={form.visit_date}
            onChange={update("visit_date")}
            testid="enquiry-input-date"
          />
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-[10px] uppercase tracking-[0.28em] text-[#5A6A61] mb-2">
              Package
            </label>
            <select
              value={form.package}
              onChange={update("package")}
              data-testid="enquiry-select-package"
              className="w-full bg-transparent border-b border-[#D5D1C4] py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#1E3B2C] transition-colors"
            >
              {PACKAGES.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Custom / Not sure">Custom / Not sure</option>
            </select>
          </div>
          <Field
            label="Guests"
            type="number"
            value={form.guests}
            onChange={update("guests")}
            placeholder="e.g. 12"
            testid="enquiry-input-guests"
          />
          <div className="col-span-2">
            <label className="block text-[10px] uppercase tracking-[0.28em] text-[#5A6A61] mb-2">
              Anything else?
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={update("message")}
              data-testid="enquiry-input-message"
              placeholder="Tell us about your occasion, menu preferences, or timing…"
              className="w-full bg-transparent border-b border-[#D5D1C4] py-2 text-sm text-[#1A2520] focus:outline-none focus:border-[#1E3B2C] transition-colors resize-none"
            />
          </div>
          <div className="col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button
              type="submit"
              disabled={submitting}
              data-testid="enquiry-submit-button"
              className="rounded-none bg-[#C46549] hover:bg-[#1E3B2C] text-white px-8 py-6 text-xs uppercase tracking-[0.28em] transition-colors duration-500 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </Button>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#5A6A61]">
              We reply within 12 hours
            </span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, testid, ...rest }) {
  return (
    <div className="col-span-2 sm:col-span-1">
      <label className="block text-[10px] uppercase tracking-[0.28em] text-[#5A6A61] mb-2">
        {label}
      </label>
      <input
        {...rest}
        data-testid={testid}
        className="w-full bg-transparent border-b border-[#D5D1C4] py-2 text-sm text-[#1A2520] placeholder:text-[#1A2520]/40 focus:outline-none focus:border-[#1E3B2C] transition-colors"
      />
    </div>
  );
}
