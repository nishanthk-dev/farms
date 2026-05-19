import Image from "next/image";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Parva Resort",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Brindavan Paradise",
    image: "https://images.unsplash.com/photo-1500382017468-7049fae79249?w=500&h=300&fit=crop",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Prakruthi Estate",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=300&fit=crop",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main>
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-14">
              <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Our Projects
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Explore our beautiful resort farmland projects
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-[2rem] border border-slate-200/70 bg-white overflow-hidden shadow-xl shadow-slate-900/5 transition hover:shadow-xl hover:shadow-emerald-700/10"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <button className="mt-6 inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-900 transition">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
