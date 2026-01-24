"use client";

import { useState } from "react";

const industries = ["Health", "Food", "Fashion", "Real Estate", "Education", "Finance"];

export default function GenerateDemo() {
    const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 2000);
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold dark:bg-brand-900/30">1</span>
                    Select Your Industry
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {industries.map((i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndustry(i)}
                            className={`border rounded-lg py-3 px-2 text-sm font-medium transition duration-200 ${selectedIndustry === i
                                    ? "border-brand-500 text-brand-600 bg-brand-50 dark:bg-brand-900/20 dark:text-brand-400"
                                    : "border-gray-200 text-gray-600 hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-brand-900/10"
                                }`}
                        >
                            {i}
                        </button>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm dark:bg-gray-950 dark:border-gray-800 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold dark:bg-brand-900/30">2</span>
                    Describe Your Brand
                </h3>
                <textarea
                    className="w-full flex-grow min-h-[120px] border border-gray-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none dark:bg-gray-900 dark:border-gray-700 dark:text-white transition-all"
                    placeholder={`e.g., I'm a ${selectedIndustry.toLowerCase()} professional focusing on...`}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="mt-4 w-full rounded-xl bg-brand-600 text-white py-3 font-medium hover:bg-brand-700 transition shadow-lg shadow-brand-600/20 disabled:opacity-75 flex items-center justify-center gap-2"
                >
                    {isGenerating ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating Plan...
                        </>
                    ) : (
                        "Generate 365 Days of Content"
                    )}
                </button>
            </div>
        </div>
    );
}
