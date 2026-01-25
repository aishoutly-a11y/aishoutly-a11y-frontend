"use client";

import React from "react";
import Link from "next/link";
import IndustrySection from "@/components/public/IndustrySection";
import PricingSection from "@/components/public/PricingSection";
import { CheckCircleIcon, ArrowRightIcon, ShootingStarIcon, BoltIcon } from "@/icons";

export default function LandingPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit min-h-screen text-gray-900 dark:text-white selection:bg-brand-500 selection:text-white">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-black">S</div>
                        <span className="text-xl font-black tracking-tight">Shoutly<span className="text-brand-500">.ai</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500 dark:text-gray-400">
                        <Link href="#features" className="hover:text-brand-500 transition-colors">Features</Link>
                        <Link href="#industries" className="hover:text-brand-500 transition-colors">Industries</Link>
                        <Link href="#pricing" className="hover:text-brand-500 transition-colors">Pricing</Link>
                        <Link href="/contact" className="hover:text-brand-500 transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/sign-in" className="text-sm font-bold hover:text-brand-500 transition-colors hidden sm:block">Log in</Link>
                        <Link href="/sign-up" className="h-10 px-6 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center hover:opacity-80 transition-all">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-100 dark:border-brand-900/30">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                        AI-Powered Social Growth
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
                        Social media content,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-purple-500 to-blue-500">generated in seconds.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Create, schedule, and publish engaging content for all your social channels with the power of artificial intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/sign-up" className="h-16 px-10 bg-brand-500 text-white rounded-2xl text-lg font-black flex items-center gap-3 shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all hover:-translate-y-1">
                            Start Free Trial
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                        <button className="h-16 px-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl text-lg font-bold border border-gray-200 dark:border-gray-700 hover:border-brand-300 transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
                            View Demo
                        </button>
                    </div>

                    <div className="mt-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-950 via-transparent to-transparent z-10 h-20 bottom-0" />
                        <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl shadow-black/20 border border-gray-800 rotate-x-12 transform perspective-1000">
                            {/* Mockup Placeholder */}
                            <div className="bg-gray-800 rounded-[32px] h-[400px] md:h-[600px] w-full flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                                <div className="text-center p-10 relative z-10">
                                    <div className="w-20 h-20 bg-brand-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-brand-500/30">
                                        <ShootingStarIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2">Generating Magic...</h3>
                                    <p className="text-gray-400 font-medium">Creating your next viral post</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Social Proof */}
            <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Trusted by 10,000+ modern brands</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - In real app use SVGs */}
                        {['Acme Inc', 'GlobalTech', 'Nebula', 'FoxRun', 'Circle'].map(brand => (
                            <span key={brand} className="text-xl font-black text-gray-900 dark:text-white">{brand}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-32 bg-white dark:bg-gray-950 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Everything you need<br />to scale your presence.</h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Stop wasting hours on content creation. Let our AI handle the heavy lifting while you focus on strategy.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[40px] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-500 transition-all group">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all">
                                <BoltIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Instant Generation</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Create weeks worth of content in seconds. Text, images, and hashtags included.</p>
                        </div>
                        <div className="p-10 rounded-[40px] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-500 transition-all group">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-purple-500 group-hover:text-white transition-all">
                                <CheckCircleIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Brand Consistency</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Our AI learns your brand voice and style to ensure every post sounds like you.</p>
                        </div>
                        <div className="p-10 rounded-[40px] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-500 transition-all group">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <ShootingStarIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Smart Scheduling</h3>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Auto-publish to all your channels at the times your audience is most active.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <div id="industries">
                <IndustrySection />
            </div>

            {/* Pricing */}
            <div id="pricing">
                {/* Assuming PricingSection is robust, otherwise wrap it */}
                <PricingSection />
            </div>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-brand-500 rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to transform<br />your social game?</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/sign-up" className="h-16 px-12 bg-white text-brand-600 rounded-2xl text-lg font-black flex items-center justify-center hover:bg-gray-50 transition-all shadow-xl">
                                Get Started Now
                            </Link>
                            <span className="text-brand-100 font-bold block sm:hidden">or</span>
                            <button className="text-white font-bold hover:underline">Talk to Sales</button>
                        </div>
                        <p className="mt-8 text-brand-100 text-sm font-bold uppercase tracking-widest">No credit card required</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-black">S</div>
                            <span className="text-xl font-black tracking-tight">Shoutly<span className="text-brand-500">.ai</span></span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm mb-8">
                            Empowering creators and brands with AI-driven content tools that save time and amplify impact.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholders */}
                            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all cursor-pointer">X</div>
                            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all cursor-pointer">In</div>
                            <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all cursor-pointer">Ig</div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-black text-gray-900 dark:text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-500">Features</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-gray-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-500">About Us</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Careers</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-500">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs font-bold">© 2026 Shoutly AI Inc. All rights reserved.</p>
                    <div className="flex gap-8 text-gray-400 text-xs font-bold">
                        <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
