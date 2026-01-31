"use client";

import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const INTERESTS = [
    "Marketing", "Technology", "Design", "Content Creation",
    "Social Media", "Artificial Intelligence", "E-commerce",
    "Business Strategy", "Productivity", "Graphic Design",
    "Video Editing", "Copywriting", "SEO", "Analytics"
];

export default function InterestsSelection() {
    const router = useRouter();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    const handleSubmit = async () => {
        if (selectedInterests.length < 3) return;
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        router.push("/success");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 font-arial dark:bg-gray-950">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-brand-600/20">S</div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">Shoutly</span>
                        </div>
                    </Link>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900/50 dark:border dark:border-gray-800">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between text-xs font-semibold text-gray-400 uppercase mb-2">
                            <span>Step 4 of 5</span>
                            <span className="text-brand-600">80% Complete</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                            <div className="h-full bg-brand-600 rounded-full w-[80%] transition-all duration-500"></div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Choose your interests
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                        Select at least 3 topics to help us tailor your experience.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {INTERESTS.map((interest) => (
                            <button
                                key={interest}
                                onClick={() => toggleInterest(interest)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedInterests.includes(interest)
                                    ? "bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/20"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-brand-200 hover:bg-brand-50/50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-750"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>

                    <div className="pt-2">
                        <Button
                            onClick={handleSubmit}
                            disabled={loading || selectedInterests.length < 3}
                            className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? "Completing..." : "Complete Setup"}
                        </Button>
                        {selectedInterests.length < 3 && (
                            <p className="mt-3 text-center text-xs text-gray-400">
                                Please select {3 - selectedInterests.length} more topic{3 - selectedInterests.length === 1 ? "" : "s"}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push("/success")}
                        className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Skip for now
                    </button>
                </div>
            </div>
        </div>
    );
}
