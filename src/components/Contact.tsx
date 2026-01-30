"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 bg-card/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">
                            Ready to <span className="text-gradient">Scale?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Book a free strategy call to discuss your growth infrastructure. No fluff, just actionable insights.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="p-3 bg-primary/10 rounded-full text-primary"><Mail className="w-5 h-5" /></div>
                                <span>sahilpasrichakkp@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="p-3 bg-primary/10 rounded-full text-primary"><Phone className="w-5 h-5" /></div>
                                <span>+91-9872541337</span>
                            </div>
                            <div className="flex items-center gap-4 text-foreground/80">
                                <div className="p-3 bg-primary/10 rounded-full text-primary"><MapPin className="w-5 h-5" /></div>
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                    <form
                        action="https://formsubmit.co/sahilpasrichakkp@gmail.com"
                        method="POST"
                        className="space-y-4"
                    >
                        {/* Honeypot for anti-spam */}
                        <input type="text" name="_honey" className="hidden" />

                        {/* Config */}
                        <input type="hidden" name="_subject" value="New Lead: Portfolio Contact" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I've received your message and will get back to you shortly. - Sahil" />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input required name="firstName" type="text" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input name="lastName" type="text" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Company / Website</label>
                            <input name="company" type="text" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="acme.com" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Interest</label>
                                <div className="relative">
                                    <select name="service" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="AI Agents">Custom AI Agents</option>
                                        <option value="SEO">Technical / Local SEO</option>
                                        <option value="SaaS">White-Label SaaS</option>
                                        <option value="Integrations">API Integrations</option>
                                        <option value="Other">Other Query</option>
                                    </select>
                                    <div className="absolute right-3 top-3.5 pointer-events-none opacity-50">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Budget Range</label>
                                <div className="relative">
                                    <select name="budget" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                        <option value="" disabled selected>Project Budget</option>
                                        <option value="<1k">&lt; $1k</option>
                                        <option value="1k-5k">$1k - $5k</option>
                                        <option value="5k-10k">$5k - $10k</option>
                                        <option value="10k+">$10k+</option>
                                    </select>
                                    <div className="absolute right-3 top-3.5 pointer-events-none opacity-50">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <input required name="email" type="email" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="jane@company.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Project Details</label>
                            <textarea required name="message" className="w-full bg-background/50 border border-white/10 rounded-lg p-3 h-32 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Tell me about your goals and current infrastructure..." />
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                            Send Request <Send className="w-4 h-4" />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
