"use client";

import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-emerald-900">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </div>

          <section className="mb-12 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Visit us on Google Maps
                </h2>
                <p className="text-sm text-slate-500">
                  See our location and open it directly in Google Maps for directions.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/12%C2%B050'44.5%22N+75%C2%B049'41.0%22E/@12.84584,75.8284323,15z/data=!4m4!3m3!8m2!3d12.845693!4d75.828045?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Google Maps location"
                src="https://www.google.com/maps/embed?pb=!4v1779798631261!6m8!1m7!1sB44MFSoLhf8QeUHk22rB5A!2m2!1d12.84584001890881!2d75.82843226375164!3f243.96359281437125!4f-16.08143712574848!5f0.4000000000000002"
                className="h-80 w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>

          {submitted ? (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-4 text-center">
              <p className="font-semibold text-emerald-900">
                Thank you for reaching out! We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-200/70 bg-white p-8 shadow-lg"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="+91 0000000000"
                />
              </div>

              <div>
                <label
                  htmlFor="dateOfVisit"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Date of visit
                </label>
                <input
                  type="date"
                  id="dateOfVisit"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
