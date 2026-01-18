import { getProjects } from '@/lib/google-sheets';

// Opt out of caching for real-time sheet updates, or set revalidate time
export const dynamic = 'force-dynamic';

export default async function WorkPage() {
    const projects = await getProjects();

    return (
        <div className="container py-20">
            <h1 className="mb-12 text-6xl">Our <span className="text-secondary">Work</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <div key={i} className="group relative border border-dim bg-panel overflow-hidden transition-all hover:border-accent-neon">
                        {/* Aspect Ratio Box */}
                        <div className="aspect-square w-full bg-zinc-900 relative">
                            {/* Use simple img tag or Next.js Image if domains configured */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />

                            <div className="absolute top-4 left-4">
                                <span className="bg-black text-accent-neon px-2 py-1 text-xs font-mono uppercase border border-accent-neon">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl mb-2">{project.title}</h3>
                            <p className="text-secondary text-sm font-mono">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
