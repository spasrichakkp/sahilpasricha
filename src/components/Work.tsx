"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Infoblox Automation Platform",
        summary: "High-integrity automation service for executing DNS/DHCP/IPAM changes with audit trails.",
        tech: ["Java", "Spring Boot", "REST API"],
        contributions: [
            "Built Java + Spring Boot services to execute DNS/DHCP/IPAM changes with request validation.",
            "Implemented idempotency keys and approval gates for production safety.",
            "Designed immutable audit trails to ensure compliance and traceability."
        ],
        decisions: [
            "Adopted structured domain models and DTO boundaries for safe API contracts.",
            "Optimized I/O-heavy integrations using non-blocking patterns."
        ]
    },
    {
        title: "Flow Editor - Siemens Smart Buildings",
        summary: "Node-RED based flow editor for IoT device orchestration and cloud integration.",
        tech: ["Node-RED", "AWS Cloud", "JavaScript"],
        contributions: [
            "Developed custom features for Siemens Smart Buildings Flow Editor on Node-RED.",
            "Connected edge nodes to AWS Cloud services for real-time telemetry.",
            "Implemented custom UI components for user input collection within the flow."
        ]
    },
    {
        title: "Datalab - Unilever Internal",
        summary: "Multi-stage data visualization tool integrating React with R computational backends.",
        tech: ["React", "Docker", "R Studio"],
        contributions: [
            "Contributed to React-based data visualization tool for Unilever scientists.",
            "Built multi-stage Docker images to optimize container size and build speed.",
            "Integrated R Studio within the React application for seamless statistical analysis."
        ]
    },
    {
        title: "iGetHappy - Live Streaming App",
        summary: "Real-time doctor-patient consultation platform with hybrid data architecture.",
        tech: ["WebSockets", "WebRTC (Agora)", "Python", "MongoDB", "MySQL"],
        contributions: [
            "Built low-latency consultation platform using WebSockets and Agora WebRTC.",
            "Created hybrid database architecture using MongoDB for chat/logs and MySQL for relational data.",
            "Engineered Python analytics pipeline for session quality metrics."
        ]
    },
    {
        title: "Refill Partner Application",
        summary: "IoT stock management system for vending machines with mobile controls.",
        tech: ["Node.js", "Microservices", "Flutter", "Google Maps"],
        contributions: [
            "Developed vending machine stock management system with Node.js microservices.",
            "Created Flutter mobile app with real-time notifications for refill alerts.",
            "Integrated Google Maps for optimized refill routing."
        ]
    },
    {
        title: "Hospital Sales & Stock Management",
        summary: "Comprehensive hospital ERP for ticketing, appointments, and inventory.",
        tech: ["Node.js", "Express.js", "REST API"],
        contributions: [
            "Developed hospital management system with ticketing and appointment booking features.",
            "Created robust HTTP API backend with Node.js/Express.js.",
            "Integrated SMS services for automated patient notifications."
        ]
    }
];

export function Work() {
    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-background border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-mono text-primary mb-12 tracking-wide">/  SELECTED_WORK</h2>

                <div className="space-y-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative pl-6 border-l-2 border-white/10 hover:border-primary transition-colors pb-8 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-white/10 group-hover:border-primary transition-colors" />

                            <h3 className="text-2xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground mb-4 text-lg">
                                {project.summary}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-muted-foreground/80 border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Key Contributions */}
                            <div className="space-y-4">
                                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                    {project.contributions.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            <span className="text-foreground/80">{item.split(' ')[0]}</span> {item.split(' ').slice(1).join(' ')}
                                        </li>
                                    ))}
                                </ul>

                                {project.decisions && (
                                    <div className="bg-white/[0.02] p-4 rounded-lg border border-white/5 mt-4">
                                        <span className="text-xs font-mono text-primary uppercase tracking-wider block mb-2">Trade-offs & Decisions</span>
                                        <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground/80">
                                            {project.decisions.map((d, idx) => (
                                                <li key={idx}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
