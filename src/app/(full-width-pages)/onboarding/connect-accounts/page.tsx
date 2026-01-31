"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Instagram, Facebook, LinkedIn, Twitter, Youtube } from "@/icons";

const platforms = [
    { name: "Instagram", user: "@yourcompany", icon: <Instagram className="w-5 h-5 text-pink-500" /> },
    { name: "Facebook", user: "Not connected", icon: <Facebook className="w-5 h-5 text-blue-600" /> },
    { name: "LinkedIn", user: "Not connected", icon: <LinkedIn className="w-5 h-5 text-blue-700" /> },
    { name: "X (Twitter)", user: "Not connected", icon: <Twitter className="w-5 h-5 text-black" /> },
    { name: "YouTube", user: "Not connected", icon: <Youtube className="w-5 h-5 text-red-600" /> },
];

export default function ConnectAccountsPage() {
    const router = useRouter();
    const [connected, setConnected] = useState(["Instagram"]);

    const togglePlatform = (name: string) => {
        setConnected(prev => prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]);
    };

    return (
        <div className="w-full bg-white rounded-[40px] p-10 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 font-arial">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Social Accounts</h2>
            <p className="text-gray-400 text-sm mb-10">Select platforms where you want to auto-schedule posts</p>

            <div className="space-y-3 mb-10">
                {platforms.map((plat) => (
                    <div
                        key={plat.name}
                        onClick={() => togglePlatform(plat.name)}
                        className={`p-5 rounded-[22px] border-2 transition-all flex items-center justify-between cursor-pointer group ${connected.includes(plat.name) ? "border-green-500 bg-green-50/10 shadow-lg shadow-green-500/5 scale-[1.02]" : "border-gray-50 bg-gray-50/50 hover:border-gray-200"}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${connected.includes(plat.name) ? "bg-white shadow-sm" : "bg-white/50"}`}>{plat.icon}</div>
                            <span className={`text-[13px] font-bold ${connected.includes(plat.name) ? "text-gray-900" : "text-gray-500"}`}>{plat.name}</span>
                        </div>
                        {connected.includes(plat.name) && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-4 text-center mb-8">
                <p className="text-[11px] text-blue-700 font-bold uppercase tracking-widest">You can connect more accounts later from Settings</p>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => router.push("/onboarding/brand-tone")}
                    className="flex-1 h-14 bg-gray-50 text-gray-400 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-100 hover:text-gray-600 transition-all border border-gray-100"
                >
                    Back
                </button>
                <button
                    onClick={() => router.push("/success")}
                    className="flex-[2] h-14 bg-black text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                >
                    Complete Setup
                </button>
            </div>
        </div>
    );
}
