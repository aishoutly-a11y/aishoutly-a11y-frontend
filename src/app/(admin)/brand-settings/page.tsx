"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PlusIcon, Facebook, Instagram, LinkedIn, Twitter, Youtube } from "@/icons";

export default function BrandSettings() {
    const [primaryColor, setPrimaryColor] = useState("#8B5CF6");
    const [secondaryColor, setSecondaryColor] = useState("#EC4899");
    const [logoPosition, setLogoPosition] = useState("bottom-right");
    const [logoSize, setLogoSize] = useState(64);
    const [overlayOpacity, setOverlayOpacity] = useState(90);

    return (
        <div className="p-10 font-arial max-w-[1600px] mx-auto">
            <div className="mb-8">
                <h1 className="text-[28px] font-bold text-gray-900 dark:text-white mb-2">Brand Overlay Settings</h1>
                <p className="text-gray-500 font-medium text-sm">Customize how your logo and contact info appear on posts</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Panel: Live Preview */}
                <div className="w-full lg:w-[480px] space-y-6 lg:sticky lg:top-32">
                    <div className="bg-white dark:bg-gray-800 rounded-[24px] p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-4">Live Preview</label>

                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 group">
                            {/* Background Image Placeholder */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                                <Image
                                    src="/images/placeholder-image.jpg"
                                    alt="Preview"
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>

                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none transition-opacity duration-300"
                                style={{ opacity: overlayOpacity / 100 }}
                            ></div>

                            {/* Logo */}
                            <div className={`absolute p-6 z-10 transition-all duration-300
                                ${logoPosition === 'top-left' ? 'top-0 left-0' :
                                    logoPosition === 'top-right' ? 'top-0 right-0' :
                                        logoPosition === 'bottom-left' ? 'bottom-0 left-0' :
                                            'bottom-0 right-0'}`}
                            >
                                <div
                                    className="bg-brand-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                                    style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
                                >
                                    <span className="text-2xl">✨</span>
                                </div>
                            </div>

                            {/* Contact Badge Example */}
                            <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg flex flex-col items-end z-20">
                                <span className="text-xs font-bold text-gray-900">+1 (555) 123-4567</span>
                                <span className="text-[10px] font-medium text-gray-500">www.yourcompany.com</span>
                            </div>
                        </div>

                        <div className="mt-4 bg-[#F5F3FF] dark:bg-brand-900/10 rounded-xl p-4 text-center">
                            <p className="text-xs font-bold text-brand-600 dark:text-brand-400">This overlay will be automatically applied to all generated posts</p>
                        </div>
                    </div>

                    {/* States Box */}
                    <div className="bg-white dark:bg-gray-800 rounded-[24px] p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <label className="block text-sm font-medium text-gray-400 mb-4">States</label>
                        <div className="p-4 bg-white border border-gray-100 rounded-2xl text-[10px] leading-relaxed text-gray-500 font-medium">
                            Fresh brews. Cozy vibes. Good food, great conversations, and your daily dose of happiness ☕✨ Whether it&apos;s your morning coffee or an evening catch-up, we&apos;ve got the perfect spot waiting for you. 📍 Visit us today 💛 Sip. Relax. Repeat. <br />
                            <span className="text-blue-500">#CafeVibes #CoffeeLovers #CafeTime</span> <br />
                            <span className="text-blue-500">#GoodCoffeeGoodMood #LocalCafe #CoffeeBreak #CafeLife</span>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Settings */}
                <div className="flex-1 space-y-6 w-full pb-10">
                    {/* Logo Settings */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-6 text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            <h2 className="text-sm font-bold">Logo</h2>
                        </div>

                        <div className="border-2 border-dashed border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center mb-8 cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="w-12 h-12 mb-4 text-gray-300">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            </div>
                            <p className="text-sm font-bold text-gray-500">Upload your logo</p>
                            <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">PNG, JPG or SVG (max. 5MB)</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-xs font-bold text-gray-400 mb-4 block uppercase tracking-wide">Logo Position</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'].map((pos) => (
                                        <button
                                            key={pos}
                                            onClick={() => setLogoPosition(pos.toLowerCase().replace(' ', '-'))}
                                            className={`py-3.5 px-4 rounded-xl text-xs font-bold border transition-all
                                                ${logoPosition === pos.toLowerCase().replace(' ', '-')
                                                    ? 'border-brand-500 text-brand-600 bg-brand-50/30'
                                                    : 'border-gray-100 text-gray-400 hover:border-gray-200 bg-white'}`}
                                        >
                                            {pos}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Logo Size:</label>
                                    <span className="text-xs font-bold text-gray-500">{logoSize}px</span>
                                </div>
                                <input
                                    type="range"
                                    min="32"
                                    max="128"
                                    value={logoSize}
                                    onChange={(e) => setLogoSize(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image overlay Text */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <h2 className="text-sm font-bold text-gray-900 mb-6">Image overlay Text</h2>
                        <textarea
                            className="w-full h-32 p-4 rounded-xl border border-gray-100 bg-white text-xs text-gray-500 font-medium leading-relaxed resize-none focus:outline-none focus:border-brand-500 transition-colors"
                            defaultValue="Fresh brews. Cozy vibes. Good food, great conversations, and your daily dose of happiness ☕✨ Whether it's your morning coffee or an evening catch-up, we've got the perfect spot waiting for you."
                        ></textarea>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-6 text-gray-900">
                            <span className="text-lg">T</span>
                            <h2 className="text-sm font-bold">Contact Information</h2>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 mb-3 block uppercase tracking-wide">Phone Number</label>
                            <input
                                type="text"
                                defaultValue="+1 (555) 123-4567"
                                className="w-full h-14 px-5 rounded-xl border border-gray-100 text-sm font-bold text-gray-900 focus:outline-none focus:border-brand-500 transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Brand Colors */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <div className="flex items-center gap-2 mb-6 text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"></path></svg>
                            <h2 className="text-sm font-bold">Brand Colors</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs font-bold text-gray-400 mb-2.5 block uppercase tracking-wide">Primary Color</label>
                                <div className="flex items-center gap-3 border border-gray-100 rounded-xl p-2 pr-4 bg-white">
                                    <div className="w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: primaryColor }}></div>
                                    <input
                                        type="text"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="w-full text-xs font-bold text-gray-700 outline-none uppercase"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 mb-2.5 block uppercase tracking-wide">Secondary Color</label>
                                <div className="flex items-center gap-3 border border-gray-100 rounded-xl p-2 pr-4 bg-white">
                                    <div className="w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: secondaryColor }}></div>
                                    <input
                                        type="text"
                                        value={secondaryColor}
                                        onChange={(e) => setSecondaryColor(e.target.value)}
                                        className="w-full text-xs font-bold text-gray-700 outline-none uppercase"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Social Icons Style Selector */}
                        <div className="mt-8 space-y-3">
                            {[
                                { name: "Facebook", icon: <Facebook className="w-4 h-4" />, color: "bg-blue-600" },
                                { name: "Twitter", icon: <Twitter className="w-4 h-4" />, color: "bg-black" },
                                { name: "LinkedIn", icon: <LinkedIn className="w-4 h-4" />, color: "bg-blue-700" },
                                { name: "Youtube", icon: <Youtube className="w-4 h-4" />, color: "bg-red-600" },
                                { name: "Instagram", icon: <Instagram className="w-4 h-4" />, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
                            ].map((social) => (
                                <div key={social.name} className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-all group">
                                    <div className={`p-2 rounded-full text-white shadow-sm ${social.color}`}>{social.icon}</div>
                                    <div className="flex bg-gray-100 p-1 rounded-lg gap-1">
                                        <div className="px-3 py-1.5 bg-white text-gray-900 rounded-md shadow-sm text-[10px] font-bold">Black</div>
                                        <div className="px-3 py-1.5 text-gray-400 rounded-md text-[10px] font-bold">White</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Overlay Settings */}
                    <div className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <h2 className="text-sm font-bold text-gray-900 mb-6">Overlay Settings</h2>
                        <div className="mb-4">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Opacity:</label>
                            <span className="text-xs font-bold text-gray-950 ml-2">{overlayOpacity}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={overlayOpacity}
                            onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                            className="w-full h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-black"
                        />
                    </div>

                    <button className="w-full h-16 bg-black text-white font-bold rounded-2xl text-base shadow-2xl shadow-black/20 hover:bg-gray-800 transition-all mt-4">
                        Save Brand Settings
                    </button>
                </div>
            </div>
        </div>
    );
}
