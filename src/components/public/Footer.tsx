"use client";

import Link from "next/link";
import ShoutlyLogo from "../common/ShoutlyLogo";
import { Twitter, Facebook, LinkedIn, Instagram } from "@/icons";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "#" },
            { name: "Contact", href: "/contact" },
            { name: "Blog", href: "#" },
        ],
        Product: [
            { name: "Features", href: "#features" },
            { name: "Google Chrome", href: "#" },
            { name: "Mobile App", href: "#" },
            { name: "API", href: "#" },
        ],
        Solutions: [
            { name: "Health & Wellness", href: "#" },
            { name: "Education", href: "#" },
            { name: "Real Estate", href: "#" },
            { name: "E-Commerce", href: "#" },
        ],
        Resources: [
            { name: "Help Center", href: "#" },
            { name: "Data Safety", href: "#" },
            { name: "Data Export", href: "#" },
            { name: "Tutorials", href: "#" },
        ],
    };

    return (
        <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 md:col-span-1">
                        <ShoutlyLogo dark />
                        <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-[200px]">
                            Generate 365 Days of Social Content, Brand Designs & Reels in Minutes.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <Twitter className="w-5 h-5 fill-white" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <Instagram className="w-5 h-5 fill-white" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <Facebook className="w-5 h-5 fill-white" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <LinkedIn className="w-5 h-5 fill-white" />
                            </Link>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-white font-bold mb-6">{title}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} shoutly.ai. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
