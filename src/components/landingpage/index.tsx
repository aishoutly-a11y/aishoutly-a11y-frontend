// src/app/page.tsx
'use client'
import { Facebook, Instagram, LinkedIn, Logo, Reels, Twitter, Instagram as InstagramIcon, Facebook as FacebookIcon, LinkedIn as LinkedInIcon, Youtube as YoutubeIcon } from '@/icons';
import Link from 'next/link';
import React, { useState } from 'react'

export default function LandingPage() {
    const currentYear = new Date().getFullYear();
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
        <main className="w-full font-arial text-gray-900 bg-white">
            {/* NAVBAR */}
            <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="mx-auto max-w-7xl flex items-center justify-between px-8 h-20">
                    <div className="flex items-center gap-2">
                        <Logo className="h-8" />
                    </div>
                    <nav className="hidden lg:flex items-center gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-black transition-colors">Home</a>
                        <a href="#" className="hover:text-black transition-colors">Features</a>
                        <a href="#" className="hover:text-black transition-colors">Pricing</a>
                        <a href="#" className="hover:text-black transition-colors">Get Early Access</a>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link href='/signin' className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-brand-600 transition-colors">Login</Link>
                        <Link href='/signup'>
                            <button className="rounded-xl bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg shadow-black/10">Sign Up Free</button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-[#eff6ff]">
                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-200/30 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/30 blur-[100px] rounded-full animate-pulse delay-700" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl text-center px-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm border border-blue-50 mb-8">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        AI‑Powered Content Generation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-8">
                        Generate <span className="text-[#7C3AED]">365 Days</span> of Social <br className="hidden md:block" /> Content, Brand Designs & Reels.
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-500 font-medium mb-12 leading-relaxed">
                        Upload your logo → Enter one prompt → Get 365 days of <br className="hidden md:block" /> auto-branded content scheduled across your platforms.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button className="rounded-2xl bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-2xl shadow-black/20">⚡ Try For Free Now</button>
                        <button className="rounded-2xl bg-white text-gray-900 border border-gray-100 px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-3">
                            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px]">▶</div>
                            Watch Demo
                        </button>
                    </div>
                    <div className="flex justify-center gap-6">
                        {[InstagramIcon, FacebookIcon, LinkedInIcon, YoutubeIcon].map((Icon, i) => (
                            <div key={i} className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white hover:scale-110 transition-all">
                                <Icon className="w-5 h-5 text-gray-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEE IT IN ACTION */}
            <section className="py-32 bg-white px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">See it in Action</h2>
                        <div className="flex justify-center gap-4">
                            {["Post Design", "Captioning", "Scheduling", "Auto Branding"].map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 group">
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-950 flex flex-col items-center justify-center relative">
                            {/* Mockup UI implementation details would go here */}
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white scale-125 group-hover:scale-150 transition-all duration-700 cursor-pointer">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                            </div>
                            <div className="absolute bottom-10 left-10 text-white/40 text-xs font-bold tracking-widest uppercase">ShoutlyAI Platform Preview</div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "2 Minute Setup", icon: "⚡" },
                            { title: "Auto‑Branded", icon: "🛡️" },
                            { title: "365 Days Content", icon: "📅" },
                            { title: "Multi‑Platform", icon: "🌐" }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 text-center transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50">
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GENERATE YEAR */}
            <section className="py-32 bg-[#fafafa] px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg mb-4 inline-block">100% Automated</span>
                        <h2 className="text-4xl font-bold tracking-tight">Generate Your Year of Content</h2>
                        <p className="text-gray-400 font-medium mt-4">One prompt. 365 days of posts personalized for your brand.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">1</div>
                                <h3 className="text-xl font-bold">Select Your Industry</h3>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {["Health", "Food", "Fashion", "Real Estate", "Education", "Fitness"].map(i => (
                                    <button key={i} className="h-14 border border-gray-100 rounded-2xl text-xs font-bold uppercase tracking-widest text-gray-500 hover:border-black hover:text-black transition-all">{i}</button>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#fefce8]/50 p-12 rounded-[40px] border border-yellow-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">2</div>
                                <h3 className="text-xl font-bold text-gray-900">Describe Your Brand</h3>
                            </div>
                            <textarea className="w-full h-40 bg-white border border-gray-100 rounded-[24px] p-6 text-sm font-medium outline-none focus:border-brand-500 transition-all resize-none shadow-inner" placeholder="E.g. We are a luxury real estate agency focusing on modern beach villas..." />
                            <button className="w-full mt-6 h-16 bg-black text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-black/10">Generate 365 Days of Content</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEMPLATE LIBRARY */}
            <section className="py-32 bg-white px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="bg-pink-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg mb-4 inline-block">Built-in Assets</span>
                        <h2 className="text-4xl font-bold tracking-tight">Browse Our Library</h2>
                        <p className="text-gray-400 font-medium mt-4">Choose from thousands of high-quality templates tailored to your niche.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-[32px] border border-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div key={i} className="aspect-[3/4] bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 inline-block px-2.5 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-gray-500 border border-white">Template #{i + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO WE HELP */}
            <section className="py-32 bg-[#0a0a0a] text-white px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20 mb-8 inline-block">Industries We Serve</span>
                        <h2 className="text-5xl font-bold tracking-tight mb-6">Who We Help</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Industry-specific content automation for businesses in 50+ niches.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Health & Wellness", icon: "💪" },
                            { name: "Food & Beverage", icon: "🍕" },
                            { name: "Fashion & Lifestyle", icon: "👗" },
                            { name: "Real Estate", icon: "🏠" },
                            { name: "Education", icon: "🎓" },
                            { name: "Finance", icon: "💰" },
                            { name: "Agencies", icon: "🚀" },
                            { name: "E‑commerce", icon: "🛍️" }
                        ].map((ind, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{ind.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{ind.name}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">AI-generated posts and reels tailored for {ind.name.toLowerCase()} growth.</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <button className="h-16 px-12 bg-white text-gray-900 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl">Explore All Industries</button>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-32 bg-white px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold tracking-tight mb-8">Simple, Affordable Pricing</h2>
                        <div className="flex justify-center mb-16">
                            <div className="bg-gray-50 p-1.5 rounded-2xl flex items-center gap-2 border border-gray-100 shadow-sm">
                                <button onClick={() => setBillingCycle("monthly")} className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all ${billingCycle === "monthly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400"}`}>Monthly</button>
                                <button onClick={() => setBillingCycle("yearly")} className={`px-8 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "bg-white text-gray-900 shadow-md" : "text-gray-400"}`}>Yearly <span className="bg-green-500 text-white text-[8px] px-1.5 py-0.5 rounded">Save 20%</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Starter */}
                        <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                                <p className="text-gray-400 text-sm font-medium mb-10">For Individuals & Freelancers</p>
                                <div className="mb-10">
                                    <span className="text-5xl font-black italic">₹899</span>
                                    <span className="text-gray-400 font-bold ml-2">/month</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {["365 AI Posts Yearly", "Captions & Hashtags", "Auto Scheduling", "Direct Email Support"].map(f => (
                                        <li key={f} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                                            <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-500">✓</div> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="w-full h-16 bg-gray-50 text-gray-900 rounded-2xl font-bold text-sm uppercase tracking-widest border border-gray-100 hover:bg-gray-100 transition-all">Get Started</button>
                        </div>
                        {/* Growth */}
                        <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] p-12 rounded-[40px] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-6 right-6 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                                <p className="text-white/60 text-sm font-medium mb-10">For Teams & Businesses</p>
                                <div className="mb-10">
                                    <span className="text-5xl font-black italic">₹1,499</span>
                                    <span className="text-white/60 font-bold ml-2">/month</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {["Reels & Visual Creatives", "Multi-Platform Posting", "Advanced Analytics", "Priority Support", "Team Collaboration"].map(f => (
                                        <li key={f} className="flex items-center gap-4 text-sm font-bold text-white/90">
                                            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white">✓</div> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="w-full h-16 bg-white text-gray-900 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto rounded-[60px] bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#EF4444] p-1 text-white shadow-2xl">
                    <div className="bg-gray-900/90 rounded-[59px] py-32 text-center px-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight relative z-10">Generate Content Using <br /> 10,000+ AI Prompts</h2>
                        <button className="h-20 px-16 bg-white text-gray-900 rounded-[32px] font-black text-lg uppercase tracking-wider hover:bg-gray-50 transition-all shadow-2xl relative z-10">⚡ Start Now Free</button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white pt-32 pb-16 px-8 border-t border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-24">
                        <div className="col-span-2">
                            <Logo className="h-8 mb-8" />
                            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm mb-10">
                                Generate 365 days of social media content in minutes. AI-powered automation for modern businesses.
                            </p>
                            <div className="flex gap-4">
                                {[InstagramIcon, FacebookIcon, LinkedInIcon, YoutubeIcon].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-black transition-colors cursor-pointer">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Product</h4>
                            <ul className="space-y-4 text-sm font-bold text-gray-600">
                                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Templates</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Company</h4>
                            <ul className="space-y-4 text-sm font-bold text-gray-600">
                                <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8">Support</h4>
                            <ul className="space-y-4 text-sm font-bold text-gray-600">
                                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Terms of Use</a></li>
                                <li><a href="#" className="hover:text-black transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                        <p>© {currentYear} ShoutlyAI. All rights reserved.</p>
                        <p className="mt-4 md:mt-0">Built With ❤️ By DeepMind</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}
