import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-card border-t border-white/10 py-12 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
                        Agency<span className="text-primary">.</span>
                    </Link>
                    <p className="mt-4 text-muted-foreground max-w-sm">
                        Elevating brands through data-driven marketing, psychological insights, and cutting-edge technology.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {["SEO & Content", "Paid Ads", "Analytics", "Automation", "Development"].map((item) => (
                            <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {["About Us", "Case Studies", "Blog", "Contact", "Privacy Policy"].map((item) => (
                            <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Marketing Agency. All rights reserved.
            </div>
        </footer>
    );
}
