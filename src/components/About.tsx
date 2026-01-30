"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Globe, Server } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 px-8 md:px-16 bg-background relative border-b border-white/5">
            <div className="max-w-6xl mx-auto">

                {/* Profile Header */}
                <div className="max-w-4xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">/ ABOUT_ME</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-6">
                            Senior Solutions Architect | <br className="hidden md:block" />
                            AI & Automation Specialist | Full-Stack Engineer
                        </h3>

                        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-6">
                            <p>
                                <span className="text-white font-bold">9+ Years of Engineering Excellence.</span> Bridging the gap between
                                complex software architecture and high-growth business automation. I specialize in building
                                "Intelligent Systems" that leverage AI Agents, Custom SaaS Infrastructure, and Data-Driven SEO
                                to dominate markets. Based in India, serving global clients with scalable, code-first solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Column 1: AI */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Cpu className="w-6 h-6 text-primary" />
                            <h4 className="text-xl font-bold font-heading">AI & Intelligent Automation</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Custom AI Agents</strong>
                                <p className="text-sm text-muted-foreground">LangGraph/CrewAI agents for automated customer support and lead nurturing.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">GHL Workflow Engineering</strong>
                                <p className="text-sm text-muted-foreground">Architecting complex GoHighLevel "Snapshots" with logic-heavy automation.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Enterprise Integration</strong>
                                <p className="text-sm text-muted-foreground">Integrating Python/Go/Node.js stacks with CRMs via custom Middleware.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: SEO */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Globe className="w-6 h-6 text-primary" />
                            <h4 className="text-xl font-bold font-heading">Comprehensive SEO</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Technical SEO</strong>
                                <p className="text-sm text-muted-foreground">Audits for React/Next.js apps, Core Web Vitals, and Schema Markup.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Local SEO (Tier II/III)</strong>
                                <p className="text-sm text-muted-foreground">Optimized Google Business Profile (GBP) & automated review systems.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Programmatic SEO</strong>
                                <p className="text-sm text-muted-foreground">Data-driven landing pages at scale using Python scripts.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">AI-Driven Content</strong>
                                <p className="text-sm text-muted-foreground">RAG systems for high-authority, fact-checked ranking content.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3: SaaS */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Server className="w-6 h-6 text-primary" />
                            <h4 className="text-xl font-bold font-heading">SaaS & Product</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">White-Label SaaS</strong>
                                <p className="text-sm text-muted-foreground">Setting up branded business suites (via HighLevel) for niche industries.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">MVP Development</strong>
                                <p className="text-sm text-muted-foreground">Rapid prototyping of AI-powered SaaS applications for the Indian market.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <strong className="block text-white mb-1">Cloud Infrastructure</strong>
                                <p className="text-sm text-muted-foreground">Scalable AWS/Azure deployment ensuring 99.9% uptime.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
