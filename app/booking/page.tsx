"use client";

import { useState } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

interface BookingFormData {
  resort: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    resort: "Parva Resort",
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        resort: "Parva Resort",
        checkIn: "",
        checkOut: "",
        guests: 1,
        name: "",
        email: "",
        phone: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Book Your Stay
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Reserve your perfect resort farmland experience
              </p>
            </div>

            {submitted && (
              <div className="mb-8 rounded-[2rem] bg-emerald-50 border border-emerald-200 p-6 text-center">
                <p className="text-emerald-800 font-semibold">✓ Booking request submitted successfully!</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-900/5"
            >
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Select Resort
                </label>
                <select
                  name="resort"
                  value={formData.resort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                >
                  <option>Parva Resort</option>
                  <option>Brindavan Paradise</option>
                  <option>Prakruthi Estate</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                />
              </div>

              <hr className="my-8 border-slate-200" />

              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h2>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-emerald-600 focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
