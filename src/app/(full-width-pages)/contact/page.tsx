"use client";

import React from "react";
import { ChevronDownIcon } from "@/icons";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#eff2ff] relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-10 font-arial">
            {/* Decorative Background Elements */}
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/20 rotate-45 rounded-[120px]" />
            <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-300/30 -rotate-12 rounded-[160px]" />
            <div className="absolute top-[20%] left-[-50px] w-[200px] h-[200px] bg-blue-200/20 rotate-[30deg] rounded-[60px]" />

            <div className="w-full max-w-2xl bg-white/40 backdrop-blur-3xl rounded-[60px] p-10 sm:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-white/50 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Lets Get in <span className="text-[#6366f1]">Touch!</span>
                    </h1>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-lg mx-auto">
                        Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We&apos;re eager to assist you.
                    </p>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">First Name:</label>
                            <input type="text" className="w-full h-14 bg-blue-50/50 border border-blue-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">Last Name:</label>
                            <input type="text" className="w-full h-14 bg-blue-50/50 border border-blue-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">Email:</label>
                        <input type="email" className="w-full h-14 bg-blue-50/50 border border-blue-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">Phone Number:</label>
                        <input type="tel" defaultValue="+9185995488" className="w-full h-14 bg-blue-50/50 border border-blue-100 rounded-2xl px-6 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">Industry Type</label>
                        <div className="relative">
                            <div className="w-full h-14 bg-blue-50/50 border border-blue-100 rounded-2xl px-6 flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">🏥</span>
                                    <span className="text-sm font-medium text-gray-700">Health & Wellness</span>
                                </div>
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-3 ml-1">Message:</label>
                        <textarea className="w-full h-40 bg-blue-50/50 border border-blue-100 rounded-[32px] p-6 text-sm font-medium outline-none focus:bg-white focus:border-brand-500 transition-all resize-none shadow-inner" />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="h-14 px-12 bg-[#6366f1] text-white rounded-2xl font-bold text-sm hover:bg-[#4f46e5] transition-all shadow-xl shadow-indigo-500/20">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
