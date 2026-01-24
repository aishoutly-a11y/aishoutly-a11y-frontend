"use client";

import React from "react";

interface ShoutlyLogoProps {
    className?: string;
    iconOnly?: boolean;
    dark?: boolean;
}

export default function ShoutlyLogo({ className = "", iconOnly = false, dark = false }: ShoutlyLogoProps) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {/* Robot Head Icon */}
            <div className={`relative w-9 h-9 ${dark ? 'bg-white' : 'bg-black'} rounded-xl flex items-center justify-center p-1.5 shadow-sm`}>
                {/* Face Container */}
                <div className={`w-full h-full border-[2.5px] ${dark ? 'border-black' : 'border-white'} rounded-lg flex flex-col items-center justify-center gap-1`}>
                    {/* Eyes */}
                    <div className="flex gap-1.5">
                        <div className={`w-1.5 h-1.5 ${dark ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                        <div className={`w-1.5 h-1.5 ${dark ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                    </div>
                    {/* Mouth Line */}
                    <div className={`w-3.5 h-[2.5px] ${dark ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                </div>

                {/* Antennas (Simplified) */}
                <div className={`absolute -top-1 left-1/4 w-0.5 h-1.5 ${dark ? 'bg-white' : 'bg-black'} rounded-full`}></div>
                <div className={`absolute -top-1 right-1/4 w-0.5 h-1.5 ${dark ? 'bg-white' : 'bg-black'} rounded-full`}></div>
            </div>

            {!iconOnly && (
                <span className={`text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    shoutly<span className="text-brand-500">.ai</span>
                </span>
            )}
        </div>
    );
}
