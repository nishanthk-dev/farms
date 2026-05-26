import Image from "next/image";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Vivantha Palms
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Explore our beautiful resort farmland projects
              </p>
            </div>

            <Image src="/Vivanta_plan.png" alt="Vivantha" width={800} height={1150} className="inline mx-auto mb-4 " />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
