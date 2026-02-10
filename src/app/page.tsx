"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import IndustrySection from "@/components/public/IndustrySection";
import PricingSection from "@/components/public/PricingSection";
import { CheckCircleIcon, ArrowRightIcon, ShootingStarIcon, BoltIcon } from "@/icons";
import {
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
} from "react-icons/fa";

export default function LandingPage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="bg-white dark:bg-gray-950 font-arial min-h-screen text-gray-900 dark:text-white selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-40 h-36 relative">
                            <Image
                                src="/images/logo.png"
                                alt="Shoutly.ai Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
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
                            className="h-10 px-6 bg-[#000000] text-white rounded-full text-xs tracking-wider flex items-center hover:opacity-80 transition-all"
                        >
                            Sign Up Free
                        </Link>
                    </div>

                </div>
            </nav>
            {/* Hero Section */}
            <header className="pt-32 pb-40 px-6 relative overflow-hidden bg-white">
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
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full 
               bg-white/60 backdrop-blur-sm text-blue-600 
               text-[10px] uppercase tracking-widest mb-8 
               border border-blue-200"
                        style={{ fontFamily: "Arial", fontWeight: 600 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <SparklesIcon className="w-4 h-4 text-blue-600" />
                        AI-Powered Content Generation
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-6xl font-normal mb-8 tracking-tight leading-[1.05]"

                    >
                        <h1 className="text-5xl md:text-7xl lg:text-6xl font-normal mb-8 tracking-tight leading-[1.05]">
                            {/* Generate */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                                Generate{" "}
                            </span>

                            {/* 365 Days */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                                365 Days{" "}
                            </span>

                            {/* of Social Content, Brand */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
                                of Social Content, Brand
                            </span>

                            <br />

                            {/* Designs, Reels & Hashtags - in Minutes. */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black">
                                Designs, Reels & Hashtags — in Minutes.
                            </span>
                        </h1>

                    </motion.h1>
                    <motion.div
                        className="text-xl md:text-xl text-[#000000] dark:text-black mb-12 max-w-2xl mx-auto font-normal leading-relaxed space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p>Upload your logo → Enter one prompt → Get 365 days of AI-built content</p>
                        <p className="text-lg text-blue-600 font-light">
                            Images • Reels • Captions • Hashtags • Auto Scheduling
                        </p>

                    </motion.div>
                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4 mb-6">

                        {/* Try Free Button */}
                        <button
                            className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#000000] text-white hover:opacity-90 transition"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                            </svg>

                            <span className="text-sm">Try Free</span>
                        </button>

                        {/* Watch Video Button */}
                        <button
                            className="flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-50 transition"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-sm">Watch Video</span>
                        </button>

                    </div>

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
                    {/* Rocket Accent */}
                    <span className="absolute bottom-6 left-6 text-5xl select-none">
                        🚀
                    </span>

                </div>
            </header>
            {/* See It In Action Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl text-[#000000] font-arial mb-12">
                        See it in Action
                    </h2>

                    {/* Flow Steps */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        {[
                            { label: "Select Industry", color: "bg-blue-500" },
                            { label: "Enter Prompt", color: "bg-violet-500" },
                            { label: "AI Generates", color: "bg-pink-500" },
                            { label: "Auto Schedule", color: "bg-green-500" },
                        ].map((step, index) => (
                            <div key={step.label} className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-black bg-gray-200 shadow-sm">

                                    {/* Colored dot */}
                                    <span className={`w-2.5 h-2.5 rounded-full ${step.color}`} />

                                    {step.label}
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
                                className="bg-gray-200 border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all"
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
            {/* Generate Your Year of Content Section */}
            <section className="py-24 bg-white text-black">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Top Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                            </svg>
                            <span>3 Simple Steps</span>
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl text-center mb-4">
                        Generate Your Year of Content
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                        One prompt, 365 days of posts. Including local festivals & events.
                    </p>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* CARD 1 */}
                        <div className="border border-gray-200 rounded-3xl p-8 shadow-sm">

                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-semibold">
                                    1
                                </span>
                                <h3 className="text-xl font-semibold">
                                    Select your industry
                                </h3>
                            </div>

                            {/* Dropdown */}
                            <select className="w-full mb-8 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
                                <option>Choose your industry</option>
                                <option>Health</option>
                                <option>Food</option>
                                <option>Fashion</option>
                                <option>Real Estate</option>
                                <option>Education</option>
                                <option>Finance</option>
                            </select>

                            {/* Industry Cards */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { emoji: "🏥", label: "Health" },
                                    { emoji: "🍔", label: "Food" },
                                    { emoji: "👗", label: "Fashion" },
                                    { emoji: "🏠", label: "Real Estate" },
                                    { emoji: "🎓", label: "Education" },
                                    { emoji: "💰", label: "Finance" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="border border-gray-200 rounded-2xl py-6 flex flex-col items-center justify-center hover:shadow-md transition"
                                    >
                                        <span className="text-2xl mb-2">{item.emoji}</span>
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="border border-gray-200 rounded-3xl p-8 shadow-sm bg-gray-100">

                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-semibold">
                                    2
                                </span>
                                <h3 className="text-xl font-semibold">
                                    Describe Your Brand
                                </h3>
                            </div>

                            {/* Textarea */}
                            <div className="relative">
                                <textarea
                                    className="w-full h-50 p-4 bg-white rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                    placeholder="I'm an architect- generate 365 instagram posts, reels and festival creatives."
                                />

                                {/* Buttons inside textarea */}
                                <div className="absolute bottom-4 left-4 flex gap-3">
                                    <button className="px-4 py-2 rounded-lg bg-gray-300 text-black text-sm font-medium">
                                        Create Now Health Photo!
                                    </button>
                                    <button className="px-4 py-2 bg-gray-300 rounded-lg border border-black text-sm font-medium">
                                        I want to Reals Health Photo!
                                    </button>
                                </div>
                            </div>

                            {/* Hint */}
                            <p className="text-sm text-gray-500 mt-4">
                                <b>Hint:</b> Be specific about your services, target audience, and content style
                            </p>
                            {/* Final CTA */}
                            <button className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-gray-300 to-gray-500 text-white text-lg font-semibold hover:opacity-90 transition">
                                Generate 365 Days of Content
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            {/* Browse Our Library Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Top Gradient Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold">
                            <SparklesIcon className="w-4 h-4 text-white" />
                            10,000+ Professional Templates
                        </span>
                    </div>


                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl text-center text-black mb-4">
                        Browse Our Library
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                        Industry-specific templates that update instantly based on your selection
                    </p>

                    {/* Main Card */}
                    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-gray-200">

                        {/* Top Controls */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                            {/* Tabs */}
                            <div className="flex gap-3">
                                {["Images", "Reels", "Festivals & Occasions"].map((tab, i) => (
                                    <button
                                        key={tab}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${i === 0
                                                ? "bg-black text-white shadow"
                                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Search + Dropdown */}
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Search templates"
                                    className="px-4 py-2 rounded-xl bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />

                                <select className="px-4 py-2 rounded-xl bg-white text-gray-800 border border-gray-300 focus:outline-none">
                                    <option>Food & Beverages</option>
                                    <option>Health</option>
                                    <option>Fashion</option>
                                    <option>Real Estate</option>
                                    <option>Education</option>
                                </select>
                            </div>
                        </div>

                        {/* Templates Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-square rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all"
                                >
                                    {/* Badge */}
                                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-gray-400 text-xs font-semibold shadow">
                                        #{i + 1}
                                    </span>
                                    {/* Image / Placeholder */}
                                    {i < 4 ? (
                                        <img
                                            src={`/templates/template-${i + 1}.jpg`}
                                            alt={`Template ${i + 1}`}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                            Template Preview
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Who We Help Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Gradient Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
                            <SparklesIcon className="w-4 h-4 text-white" />
                            Built for Every Industry
                        </span>
                    </div>


                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl text-black mb-4">
                        Who We Help
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Industry-specific content automation for businesses of all sizes
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                        {[
                            { title: "Health & Fitness", emoji: "💪" },
                            { title: "Food & Beverage", emoji: "🍔" },
                            { title: "Fashion & Lifestyle", emoji: "👗" },
                            { title: "Real Estate & Construction", emoji: "🏗️" },
                            { title: "Education & Coaching", emoji: "🎓" },
                            { title: "Finance & Business Services", emoji: "💼" },
                            { title: "Medical & Healthcare", emoji: "🩺" },
                            { title: "Technology & IT Services", emoji: "💻" },
                            { title: "Hospitality & Tourism", emoji: "🏨" },
                            { title: "Automobile Industry", emoji: "🚗" },
                            { title: "Beauty, Salon & Wellness", emoji: "💅" },
                            { title: "Retail & E-Commerce", emoji: "🛒" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-3xl p-6 bg-white border border-gray-200 text-left hover:-translate-y-1 hover:shadow-xl transition-all"
                            >
                                {/* Emoji */}
                                <div className="text-4xl mb-4">{item.emoji}</div>

                                {/* Title */}
                                <h3 className=" text-black mb-4">
                                    {item.title}
                                </h3>

                                {/* List */}
                                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                    <li>• Daily social media posts</li>
                                    <li>• Reels & short videos</li>
                                    <li>• Festival & promo creatives</li>
                                </ul>

                                {/* More Link */}
                                <a
                                    href="#"
                                    className="text-sm font-medium text-blue-500 hover:text-black-600"
                                >
                                    +5 more
                                </a>
                            </div>
                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="flex justify-center">
                        <button className="px-10 h-14 rounded-full bg-black text-white text-sm font-semibold hover:opacity-90 transition">
                            Find Your Industry
                        </button>
                    </div>

                </div>
            </section>

            {/* Pricing */}
            <div id="pricing">
                {/* Assuming PricingSection is robust, otherwise wrap it */}
                <PricingSection />
            </div>
            {/* CTA Section */}
            <section className="py-32 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto text-center relative overflow-hidden">

                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                            Generate Content Using 10,000+ <br />
                            AI Prompts
                        </h2>

                        {/* Subtitle */}
                        <p className="md:text-xl text-white/90 mb-12">
                            In any tone of voice, for any industry
                        </p>

                        {/* Button */}
                        <Link
                            href="/sign-up"
                            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-white text-blue-600 text-lg hover:bg-gray-100 transition shadow-xl"
                        > <SparklesIcon className="w-6 h-6 text-blue-600" />&nbsp;
                            Create My Content
                        </Link>


                    </div>
                </div>
            </section>
            {/* Follow Us Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    {/* Title */}
                    <h2 className="text-4xl md:text-4xl text-black mb-4">
                        Follow Us — Where We Post the Future
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 mb-12">
                        Join our community for tips, updates, and inspiration
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6">

                        {[
                            { icon: <FaTwitter />, label: "Twitter" },
                            { icon: <FaInstagram />, label: "Instagram" },
                            { icon: <FaLinkedinIn />, label: "LinkedIn" },
                            { icon: <FaFacebookF />, label: "Facebook" },
                            { icon: <FaYoutube />, label: "YouTube" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                aria-label={item.label}
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 text-black bg-white
                     hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                            >
                                <span className="text-xl">{item.icon}</span>
                            </a>
                        ))}

                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-white dark:bg-[#000000] py-20 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">

                    {/* Brand + Social */}
                    <div className="col-span-1 md:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-black text-lg">
                                S
                            </div>
                            <span className="text-xl font-black tracking-tight text-black dark:text-white">
                                Shoutly<span className="text-brand-500">.ai</span>
                            </span>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm mb-8">
                            Empowering creators and brands with AI-driven content tools that save time and amplify impact.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border border-white dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center text-white hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                                >
                                    <Icon className="w-5 h-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="font-black text-gray-900 dark:text-white mb-6">Products</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-500">Features</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Changelog</Link></li>
                        </ul>
                    </div>

                    {/* Industries Column */}
                    <div>
                        <h4 className="font-black text-gray-900 dark:text-white mb-6">Industries</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-500">Health & Fitness</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Food & Beverage</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Education</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Real Estate</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-black text-gray-900 dark:text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-brand-500">Blog</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Guides</Link></li>
                            <li><Link href="#" className="hover:text-brand-500">Case Studies</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
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
