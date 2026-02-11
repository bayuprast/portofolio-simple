import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Eco-Friendly Dashboard",
        description: "A real-time monitoring dashboard for environmental data using IoT sensors.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "TypeScript", "Tailwind", "D3.js"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "AI Video Editor",
        description: "An automated video editing plateforme powered by machine learning algorithms.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        tags: ["Next.js", "Python", "OpenCV", "AWS"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Crypto Wallet v2",
        description: "A secure and decentralised cryptocurrency wallet with multi-chain support.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
        tags: ["React Native", "Web3.js", "Solidity", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-transparent relative">
            {/* Background decorations - Abstract Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 60, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[-15%] w-[900px] h-[900px] bg-amber-400/15 rounded-full blur-[170px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -50, 0],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-yellow-600/15 rounded-full blur-[160px] -z-10"
            />
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        Featured <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl"
                    >
                        A collection of selected works that demonstrate my technical skills and design philosophy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.liveUrl} className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl} className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="pt-2 flex items-center text-sm font-medium text-primary cursor-pointer group-hover:underline">
                                    View Case Study <ArrowRight size={14} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ size, className }: { size: number, className: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
