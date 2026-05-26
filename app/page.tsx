import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import Carousel from "@/app/components/Carousel";
import Link from "next/link";
import Image from "next/image";

interface Pillar {
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Sustainable Practices",
    description: "Eco-conscious stewardship and regenerative farming methods.",
  },
  {
    title: "Hassle-Free Management",
    description: "Complete farm management without your involvement or stress.",
  },
  {
    title: "Community Empowerment",
    description: "Supporting local communities and sustainable livelihoods.",
  },
  {
    title: "Investment Transparency",
    description: "Real-time updates and complete visibility into your investments.",
  },
  {
    title: "Cultural Restoration",
    description: "Preserving heritage and environmental legacy for future generations.",
  },
];

const STATS: Stat[] = [
  { number: "150+", label: "Satisfied Customers" },
  { number: "300+", label: "Acres Managed" },
  { number: "50,000+", label: "Trees Planted" },
  { number: "9+", label: "Active Farmlands" },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    quote: "Vivantha Palms transformed my investment goals. Professional management with visible results.",
  },
  {
    name: "Priya Sharma",
    quote: "Finally found a way to invest in real assets with complete peace of mind.",
  },
];

const DIFFERENCES = [
  {
    title: "Build Legacy",
    description: "Create lasting value for your family and future generations.",
  },
  {
    title: "Wellness Living",
    description: "Connect with nature and sustainable lifestyle practices.",
  },
  {
    title: "Hassle-Free Ownership",
    description: "We manage everything, you enjoy the benefits.",
  },
  {
    title: "Future-Ready",
    description: "Investment that grows with time and environmental value.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      {/* <header className="sticky top-0 z-10">
        <SiteHeader />
      </header> */}

      <div className=" min-h-screen">
        <div className="absolute inset-0 z-0">
          <Carousel />
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]"></div>

        <main className="relative z-10 min-h-screen flex items-center justify-center">
          <section className="text-center text-white px-6">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl text-[#D4AF37]">
              <Image src="/vivanpalm.png" alt="Vivantha" width={600} height={150} className="inline mx-auto mb-4" />
            {/* Vivantha Palms */}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8">
              Discover our beautiful resort farmlands and book your perfect getaway today.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
              >
                Explore Projects
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-md px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/30"
              >
                Book Now
              </Link>
            </div>
          </section>
        </main>
      </div>


      {/* Key Pillars */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-slate-950">Our Core Values</h2>
            <p className="mt-4 text-lg text-slate-600">
              Five pillars that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-emerald-50 p-8 border border-emerald-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-emerald-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-emerald-700">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-emerald-100 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference We Create */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-slate-950">The Difference We Create</h2>
            <p className="mt-4 text-lg text-slate-600">
              What makes Vivantha Palms unique
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {DIFFERENCES.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5 border border-slate-200/70"
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-semibold text-slate-950">They&apos;ve Found Their Second Home</h2>
            <p className="mt-4 text-lg text-slate-600">
              What our customers say about us
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-8"
              >
                <p className="text-lg italic text-slate-700 mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-slate-900">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Ready to Start Your Farmland Journey?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have invested in sustainable farmland.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-700 hover:bg-slate-100 transition shadow-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
