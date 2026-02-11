import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-transparent relative">
            {/* Background decorations - Abstract Blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -20, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-5%] right-[-5%] w-[700px] h-[700px] bg-teal-500/15 rounded-full blur-[150px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 40, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-[5%] left-[-10%] w-[800px] h-[800px] bg-emerald-600/15 rounded-full blur-[160px] -z-10"
            />
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                                Let's <span className="text-primary">Connect</span>
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Have a project in mind or just want to say hi? Feel free to reach out.
                                I'm always open to discussing new projects, creative ideas or opportunities.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "hello@creator.com" },
                                { icon: MessageSquare, label: "Social", value: "@creator_branding" }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border shadow-sm"
                                >
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                                        <p className="text-lg font-semibold">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-3xl border border-border shadow-xl space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <User size={14} className="text-primary" /> Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <Mail size={14} className="text-primary" /> Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                                <MessageSquare size={14} className="text-primary" /> Message
                            </label>
                            <textarea
                                rows={4}
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                            Send Message <Send size={18} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
