"use client";

import React from "react";

export default function AuthBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
            {/* Colorful noisy background pattern */}
            <div className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                }}
            />

            {/* Decorative Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full" />
            <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-400/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] bg-pink-400/15 blur-[120px] rounded-full" />
        </div>
    );
}
