import { motion } from "framer-motion";
import { Code2, Layout, Server, Smartphone, Terminal } from "lucide-react";

const skills = [
    { name: "Frontend", icon: Layout, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
    { name: "Tools", icon: Terminal, items: ["Git", "VS Code", "Docker", "Figma"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Expo"] },
];

export function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-transparent relative">
            {/* Background decorations - Abstract Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 60, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-pink-400/15 rounded-full blur-[150px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -40, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-violet-400/15 rounded-full blur-[160px] -z-10"
            />
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Bio Section */}
                    <div className="flex-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-3">
                                <span className="bg-primary w-2 h-12 rounded-full inline-block"></span>
                                About Me
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I'm a passionate Full Stack Developer based in Indonesia. I love building things that live on the internet, whether that be websites, applications, or anything in between.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                My goal is to always build products that provide pixel-perfect, performant experiences. I am currently looking for new opportunities to work with a team of creative and talented developers.
                            </p>
                        </motion.div>

                        {/* Quick Stats / Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            <div className="p-4 bg-background rounded-xl border border-border shadow-sm">
                                <h3 className="text-3xl font-bold text-primary">3+</h3>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div className="p-4 bg-background rounded-xl border border-border shadow-sm">
                                <h3 className="text-3xl font-bold text-primary">20+</h3>
                                <p className="text-sm text-muted-foreground">Projects Completed</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <div className="flex-1 w-full">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                            <Code2 className="text-primary" /> Technical Skills
                        </h3>

                        <div className="grid gap-6">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                <Icon size={20} />
                                            </div>
                                            <h4 className="font-semibold text-lg">{skill.name}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1 bg-muted text-foreground/80 text-sm rounded-full font-medium"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
