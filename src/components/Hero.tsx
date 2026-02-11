import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative bg-transparent">
            {/* Background decorations - Abstract Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-accent/20 rounded-full blur-[140px] -z-10"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px] -z-10"
            />

            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm md:text-base font-medium text-primary tracking-wider uppercase mb-2">
                            Welcome to my portfolio
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Hi, I'm <span className="text-primary">Creator</span>
                            <br />
                            <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl font-semibold mt-2 block">
                                Building Digital Experiences
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
                    >
                        I focus on creating engaging, accessible, and performant web applications.
                        Highlighting my journey and projects that define my personal brand.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-border bg-background hover:bg-muted transition-all font-medium"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-center md:justify-start gap-6 pt-4"
                    >
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 animate-pulse" />
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-lg border border-border z-20"
                        >
                            <span className="font-semibold text-sm">🚀 Pro Developer</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-4 -left-4 bg-card p-3 rounded-xl shadow-lg border border-border z-20"
                        >
                            <span className="font-semibold text-sm">✨ UI/UX Enthusiast</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
