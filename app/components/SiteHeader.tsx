import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/20 bg-white/40 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-emerald-900">
          Vivantha Palms
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/booking"
          className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
        >
          Book a Visit
        </Link>
      </div>
    </header>
  );
}
