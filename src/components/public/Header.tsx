"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoutlyLogo from "../common/ShoutlyLogo";
import { UserCircleIcon } from "@/icons";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => {
        if (path === "/" && pathname !== "/") return false;
        return pathname === path;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/70 backdrop-blur-xl border-b border-gray-100 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <ShoutlyLogo />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-bold transition-all hover:text-brand-500 ${isActive(item.href)
                                        ? "text-brand-500"
                                        : "text-gray-900"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/signup"
                            className="bg-black text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg shadow-black/5"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/signin"
                            className="flex items-center gap-2 px-2 py-2 text-gray-900 hover:text-brand-500 transition-colors"
                        >
                            <div className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center hover:border-brand-200 transition-all bg-white shadow-sm">
                                <UserCircleIcon className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-900"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
                    <div className="px-6 py-8 space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block text-lg font-bold ${isActive(item.href) ? "text-brand-500" : "text-gray-900"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-gray-50 flex flex-col gap-4">
                            <Link
                                href="/signup"
                                className="w-full bg-black text-white py-4 rounded-2xl text-center font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/signin"
                                className="w-full border border-gray-200 text-gray-900 py-4 rounded-2xl text-center font-bold bg-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
