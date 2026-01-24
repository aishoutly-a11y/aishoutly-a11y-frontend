"use client";

import React from "react";

const industries = [
    { name: "Real Estate", icon: "🏠" },
    { name: "Health & Wellness", icon: "🧘" },
    { name: "Finance", icon: "💰" },
    { name: "Fashion", icon: "👗" },
    { name: "Technology", icon: "💻" },
    { name: "Retail", icon: "🛍️" },
    { name: "Food & Drink", icon: "🍷" },
    { name: "Travel", icon: "✈️" },
    { name: "Beauty", icon: "💄" },
    { name: "Education", icon: "🎓" },
    { name: "Fitness", icon: "🏋️" },
    { name: "Legal", icon: "⚖️" },
];

export default function IndustrySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Who We Help</h2>
                    <p className="text-gray-500 text-lg font-medium">Built for professionals across every major industry.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {industries.map((item) => (
                        <div
                            key={item.name}
                            className="group bg-gray-50/50 border border-gray-100 p-8 rounded-[32px] text-center transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:border-white hover:-translate-y-1"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <p className="text-sm font-bold text-gray-900">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
