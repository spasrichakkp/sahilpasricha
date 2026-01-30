"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
    // --- SEO DOMINANCE (Top Priority) ---
    {
        id: "01",
        title: "Technical & Programmatic SEO",
        category: "SEO Infrastructure",
        desc: "Large-scale growth & technical health.",
        detail: "Complete technical auditing (Core Web Vitals, Crawl Budget, Schema) combined with Programmatic SEO to generate 1000s of high-intent landing pages dynamically. Perfect for capturing long-tail traffic at scale."
    },
    {
        id: "02",
        title: "Content & Semantic SEO",
        category: "On-Page SEO",
        desc: "Topical Authority & Content Clustering.",
        detail: "Dominate your niche by building 'Topical Authority'. I design content clusters, optimize for NLP/Semantic relevance, and ensure your content satisfies User Intent better than competitors."
    },
    {
        id: "03",
        title: "Local SEO & GMB Ranking",
        category: "Local SEO",
        desc: "Map Pack dominance for local biz.",
        detail: "Specific strategies for Local Service Businesses. Google Business Profile (GMB) optimization, local citation building, and automated review capture loops to secure the #1 spot in the Map Pack."
    },

    // --- High Value Tech ---
    {
        id: "04",
        title: "Custom AI Agent Integration",
        category: "AI & Automation",
        desc: "Intelligent Agents beyond basic chatbots.",
        detail: "Build custom AI Agents (LangGraph/CrewAI) that live inside 'Conversation AI' but connect to external knowledge bases. They handle complex queries, qualify leads, and sync data in real-time."
    },
    {
        id: "05",
        title: "API & Webhook Integration",
        category: "Infrastructure",
        desc: "The 'Gluer' connecting GHL to niche software.",
        detail: "Custom API bridges using AWS Lambda. Connect HighLevel to legacy ERPs, custom CRMs, or specific payment gateways that Zapier can't handle."
    },

    // --- Digital Marketing Core ---
    {
        id: "06",
        title: "Advanced Analytics & Tracking",
        category: "Data",
        desc: "GA4, GTM, and Server-Side tagging.",
        detail: "Full data hygiene setup. Google Analytics 4 (GA4), Google Tag Manager (GTM), and Facebook CAPI (Conversion API) implementation to ensure you track every dollar of revenue accurately."
    },
    {
        id: "07",
        title: "Performance Marketing (Ads)",
        category: "Growth",
        desc: "Google & Meta Ads structured for ROAS.",
        detail: "Scientific ad structure for Google Search, Youtube, and Meta (FB/Insta). Focus on incrementality, creative testing pipelines, and high-intent targeting to maximize Return on Ad Spend."
    },

    // --- Niche / SaaS ---
    {
        id: "08",
        title: "Automated Snapshot Engineering",
        category: "products",
        desc: "Plug & Play niche systems for GHL.",
        detail: "Design 'Niche Snapshots' (e.g., Real Estate, E-commerce) with pre-built funnels and workflows. Allows for rapid agency scaling and client onboarding."
    },
    {
        id: "09",
        title: "White-Labeled SaaS Implementation",
        category: "SaaS",
        desc: "Branded Business Suites for local mass-market.",
        detail: "Configure GHL SaaS Mode to offer a 'Business Management Suite' for Doctors, Gyms, or Lawyers. Includes sub-account architecture and feature gating."
    },
];

export function Services() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-background">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-mono text-primary mb-12 tracking-wide">/  CAPABILITIES & SERVICES</h2>

                <div className="grid grid-cols-1 gap-2">
                    {services.map((service, i) => {
                        const isOpen = expandedId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "rounded-xl border transition-all duration-300 overflow-hidden",
                                    isOpen ? "bg-white/[0.03] border-primary/20 shadow-lg shadow-black/20" : "bg-transparent border-transparent hover:bg-white/[0.02]"
                                )}
                            >
                                <div
                                    onClick={() => setExpandedId(isOpen ? null : service.id)}
                                    className="flex items-center justify-between p-4 cursor-pointer select-none"
                                >
                                    <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                                        <span className="font-mono text-xs text-muted-foreground/40 w-6 shrink-0">{service.id}</span>
                                        <div>
                                            <h3 className={cn(
                                                "text-lg md:text-xl font-bold font-heading transition-colors truncate",
                                                isOpen ? "text-primary" : "text-foreground"
                                            )}>
                                                {service.title}
                                            </h3>
                                            {!isOpen && (
                                                <p className="text-xs text-muted-foreground mt-0.5 truncate hidden md:block">
                                                    {service.desc}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "p-1.5 rounded-full border border-white/5 text-muted-foreground transition-all duration-300 shrink-0 ml-4",
                                        isOpen ? "bg-primary/10 text-primary rotate-180" : "bg-transparent rotate-0"
                                    )}>
                                        <Plus className={cn("w-4 h-4 transition-transform", isOpen && "hidden")} />
                                        <Minus className={cn("w-4 h-4 transition-transform", !isOpen && "hidden")} />
                                    </div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-4 pb-6 pt-0 pl-14 md:pl-16 pr-4 md:pr-12 text-muted-foreground/90 text-sm md:text-base leading-relaxed">
                                                <div className="h-px w-full bg-white/5 mb-4" />
                                                <p>
                                                    <span className="text-primary/70 font-mono text-[10px] uppercase tracking-wider block mb-1">
                                                        {service.category}
                                                    </span>
                                                    {service.detail}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
