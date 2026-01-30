"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 bg-background relative overflow-hidden">

            {/* Subtle Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block border-l-2 border-primary pl-4">
                        Senior Solutions Architect
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter leading-[1.05] mb-8"
                >
                    Hi, I'm <span className="text-primary">Sahil Pasricha.</span> <br />
                    I Architect <br />
                    Digital Dominance.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
                >
                    I don't just build systems—I engineer the future of your business.
                    Meet the mind blending AI, Strategy, and Code to turn your vision into
                    scalable, automated reality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link
                        href="#about"
                        className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-primary transition-colors group"
                    >
                        Get to know the Engineer
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}
