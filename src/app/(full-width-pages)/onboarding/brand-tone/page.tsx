"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const tones = [
    { name: "Professional", icon: "💼" },
    { name: "Friendly", icon: "🤝" },
    { name: "Luxury", icon: "💎" },
    { name: "Exciting", icon: "⚡" },
    { name: "Informative", icon: "📚" },
    { name: "Witty", icon: "✨" },
];

export default function BrandTonePage() {
    const router = useRouter();
    const [selectedTone, setSelectedTone] = useState("Professional");

    return (
        <div className="w-full bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Brand Tone</h2>
            <p className="text-gray-400 text-sm mb-10">Select the vibe you want for your AI-generated content</p>

            <div className="grid grid-cols-2 gap-4 mb-12">
                {tones.map((tone) => (
                    <button
                        key={tone.name}
                        onClick={() => setSelectedTone(tone.name)}
                        className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${selectedTone === tone.name ? "border-brand-500 bg-brand-50/50 shadow-lg shadow-brand-500/5 scale-105" : "border-gray-50 hover:border-gray-200 bg-gray-50/50"}`}
                    >
                        <span className="text-3xl">{tone.icon}</span>
                        <span className={`text-xs font-bold uppercase tracking-widest ${selectedTone === tone.name ? "text-brand-600" : "text-gray-500"}`}>{tone.name}</span>
                    </button>
                ))}
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => router.push("/onboarding/brand-info")}
                    className="flex-1 h-14 bg-gray-50 text-gray-400 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-100 hover:text-gray-600 transition-all border border-gray-100"
                >
                    Back
                </button>
                <button
                    onClick={() => router.push("/onboarding/connect-accounts")}
                    className="flex-[2] h-14 bg-black text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
