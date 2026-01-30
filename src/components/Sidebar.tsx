"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Briefcase,
    Layers,
    Cpu,
    Mail,
    Menu,
    X,
    Github,
    Linkedin,
    Twitter
} from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
    { name: "Home", icon: <Home className="w-5 h-5" />, href: "#hero" },
    { name: "Services", icon: <Layers className="w-5 h-5" />, href: "#services" },
    { name: "Portfolio", icon: <Briefcase className="w-5 h-5" />, href: "#work" },
    { name: "Process", icon: <Cpu className="w-5 h-5" />, href: "#process" },
    { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-card border border-white/10 rounded-full text-primary shadow-lg backdrop-blur-md"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Main Sidebar - Desktop Fixed / Mobile Overlay */}
            <aside className={cn(
                "fixed top-0 left-0 z-40 h-full w-72 bg-[#020617]/95 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col justify-between p-8",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Top: Brand */}
                <div>
                    <h1 className="text-2xl font-bold font-heading tracking-tight mb-1 text-white">
                        Sahil Pasricha<span className="text-primary">.</span>
                    </h1>
                    <p className="text-sm text-muted-foreground font-mono">Full Stack Growth</p>
                </div>

                {/* Middle: Nav */}
                <nav className="space-y-2">
                    {tracks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-muted-foreground hover:text-white hover:bg-white/5 transition-all group"
                        >
                            <span className="group-hover:text-primary transition-colors">{item.icon}</span>
                            <span className="font-medium tracking-wide">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                {/* Bottom: Socials & Footer */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 pl-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
                    </div>
                    <p className="text-xs text-muted-foreground/50 font-mono">
                        © {new Date().getFullYear()} Sahil Pasricha.<br />
                        Designed for Growth.
                    </p>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
