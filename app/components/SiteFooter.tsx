export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Vivantha Palms</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              Theme-based managed farmlands rooted in sustainability, culture, and long-term legacy.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Projects</li>
              <li>Events</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Support</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Contact</li>
              <li>Visit Booking</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Phone: +91 7607670760</p>
              <p>WhatsApp: +91 7607670760</p>
              <p>Email: info@vivanthapalms.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          © 2026 Vivantha Palms Enterprises Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
