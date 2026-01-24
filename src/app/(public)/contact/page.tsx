"use client";

import React from "react";
import { PaperPlaneIcon } from "@/icons";

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit min-h-screen relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <section className="relative py-32 max-w-7xl mx-auto px-6 z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Content Side */}
                    <div>
                        <span className="inline-block py-2 px-6 rounded-full bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-brand-100">
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.95]">
                            Let&apos;s build<br />
                            something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 font-black italic">extraordinary.</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed font-medium max-w-lg">
                            Have a question or a project idea? Reach out and let&apos;s start a conversation that changes everything.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-3xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-brand-500/20 border border-gray-100 dark:border-gray-800">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                                    <a href="mailto:hello@shoutly.ai" className="text-xl font-black text-gray-900 dark:text-white hover:text-brand-500 transition-colors">hello@shoutly.ai</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 rounded-3xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-brand-500/20 border border-gray-100 dark:border-gray-800">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Global HQ</p>
                                    <p className="text-xl font-black text-gray-900 dark:text-white">Melbourne, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white dark:bg-gray-900 p-12 rounded-[60px] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-black/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 to-purple-600" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                                    <input type="text" className="w-full h-16 bg-gray-50 border border-transparent rounded-2xl px-6 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" placeholder="Alex" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                                    <input type="text" className="w-full h-16 bg-gray-50 border border-transparent rounded-2xl px-6 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" placeholder="Morgan" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <input type="email" className="w-full h-16 bg-gray-50 border border-transparent rounded-2xl px-6 text-gray-900 dark:text-white text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" placeholder="alex@creators.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea className="w-full h-40 bg-gray-50 border border-transparent rounded-[32px] p-6 text-sm text-gray-900 dark:text-white focus:bg-white focus:border-brand-500 transition-all outline-none resize-none" placeholder="How can we help your brand grow?" />
                            </div>
                            <button className="w-full h-16 bg-black text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-2xl shadow-black/10 hover:-translate-y-0.5 mt-4">
                                <PaperPlaneIcon className="w-6 h-6" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
