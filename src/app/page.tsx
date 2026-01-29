"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import IndustrySection from "@/components/public/IndustrySection";
import PricingSection from "@/components/public/PricingSection";
import { CheckCircleIcon, ArrowRightIcon, ShootingStarIcon, BoltIcon } from "@/icons";

export default function LandingPage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit min-h-screen text-gray-900 dark:text-white selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-semibold">
                            S
                        </div>
                        <span className="text-xl font-semibold tracking-tight text-black">
                            Shoutly<span className="text-black">.ai</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
                        <Link href="/" className="hover:text-brand-500 transition-colors">
                            Home
                        </Link>
                        <Link href="#features" className="hover:text-brand-500 transition-colors">
                            Features
                        </Link>
                        <Link href="#pricing" className="hover:text-brand-500 transition-colors">
                            Pricing
                        </Link>
                        <Link
                            href="#early-access"
                            className="hover:text-brand-500 transition-colors"
                        >
                            Get Early Access
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/sign-in"
                            className="text-sm font-medium text-black hover:text-brand-500 transition-colors hidden sm:block"
                        >
                            Log in
                        </Link>

                        <Link
                            href="/sign-up"
                            className="h-10 px-6 bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider flex items-center hover:opacity-80 transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                </div>
            </nav>
            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 relative overflow-hidden bg-white">
                {/* Background Image with subtle floating animation */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.6]"
                    style={{ backgroundImage: "url('/images/sky.jpg')" }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Gradient Glow */}
                <motion.div
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Content */}
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.span
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/50 dark:bg-brand-900/20 text-brand-200 dark:text-brand-100 text-[10px] font-black uppercase tracking-widest mb-8 border border-brand-100 dark:border-brand-900/30"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-200 animate-pulse" />
                        AI-Powered Content Generation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-6xl font-semibold mb-8 tracking-tight leading-[1.05]"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-purple-500 to-blue-500 animate-gradient-x">
                            Generate 365 Days of Social Content, Brand <br />
                            Designs, Reels & Hashtags — in Minutes.
                        </span>
                    </motion.h1>

                    <motion.div
                        className="text-xl md:text-xl text-black dark:text-black mb-12 max-w-2xl mx-auto font-normal leading-relaxed space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p>Upload your logo → Enter one prompt → Get 365 days of AI-built content</p>
                        <p className="text-lg text-blue-600 font-light">
                            Images • Reels • Captions • Hashtags • Auto Scheduling
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <Link
                            href="/sign-up"
                            className="h-16 px-12 bg-black text-white rounded-full text-lg font-semibold flex items-center gap-3 shadow-xl shadow-brand-500/20 hover:bg-brand-600 transition-all hover:-translate-y-1 motion-safe:animate-bounce"
                        >
                            Try Free
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-16 px-12 bg-white text-gray-900 rounded-full text-lg font-medium border border-gray-300 hover:border-brand-300 transition-all hover:bg-gray-50"
                        >
                            Watch Demo
                        </motion.button>
                    </motion.div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        {/** Facebook */}
                        <motion.a
                            href="#"
                            aria-label="Facebook"
                            className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H16l-.4 3h-2.5v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </motion.a>

                        {/** Twitter */}
                        <motion.a
                            href="#"
                            aria-label="Twitter"
                            className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.2 2H21l-6.6 7.5L22 22h-6.6l-4.7-6.1L5.3 22H2l7.1-8.1L2 2h6.8l4.2 5.6L18.2 2z" />
                            </svg>
                        </motion.a>

                        {/** LinkedIn */}
                        <motion.a
                            href="#"
                            aria-label="LinkedIn"
                            className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.4 20.4h-3.5v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.5V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6v6zM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 20.4H3.6V9H7v11.4z" />
                            </svg>
                        </motion.a>

                        {/** YouTube */}
                        <motion.a
                            href="#"
                            aria-label="YouTube"
                            className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.6 2.5 12 2.5 12 2.5h0s-4.6 0-8.5.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.2.4 7.2.4s4.6 0 8.5-.4c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5 2.5-5 2.5z" />
                            </svg>
                        </motion.a>

                        {/** Instagram */}
                        <motion.a
                            href="#"
                            aria-label="Instagram"
                            className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white transition-all"
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-7.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </header>
            {/* See It In Action Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-semibold text-black mb-12">
                        See it in Action
                    </h2>

                    {/* Flow Steps */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        {[
                            "Select Industry",
                            "Enter Prompt",
                            "AI Generates",
                            "Auto Schedule",
                        ].map((step, index) => (
                            <div key={step} className="flex items-center gap-4">
                                <div className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-black bg-white shadow-sm">
                                    {step}
                                </div>
                                {index !== 3 && (
                                    <span className="text-gray-400 text-xl">→</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <div className="relative max-w-4xl mx-auto mb-20">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-black">

                            {/* Video */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                src="/videos/ai_video.mp4"
                                poster="/images/demo.jpg"
                            />

                            {/* Play Button Overlay */}
                            {!isPlaying && (
                                <button
                                    onClick={() => {
                                        videoRef.current?.play();
                                        setIsPlaying(true);
                                    }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                                >
                                    <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-transform">
                                        ▶
                                    </div>
                                </button>
                            )}

                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { emoji: "⚡", title: "2-Minutes Setup" },
                            { emoji: "🎨", title: "Auto-Branded" },
                            { emoji: "📅", title: "365 Days Filled" },
                            { emoji: "🌍", title: "Multi-Platform" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="text-4xl mb-4">{item.emoji}</div>
                                <h3 className="text-lg font-semibold text-black">
                                    {item.title}
                                </h3>
                            </div>
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
