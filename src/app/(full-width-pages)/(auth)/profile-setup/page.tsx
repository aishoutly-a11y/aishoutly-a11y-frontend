"use client";

import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileSetup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        displayName: "",
        bio: "",
        role: "creator",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        router.push("/interests");
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
                            <span>Step 3 of 5</span>
                            <span className="text-brand-600">60% Complete</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                            <div className="h-full bg-brand-600 rounded-full w-[60%] transition-all duration-500"></div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Complete your profile
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                        Tell us a bit about yourself to personalize your experience.
                    </p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Display Name</Label>
                            <Input
                                type="text"
                                placeholder="How should we call you?"
                                value={formData.displayName}
                                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                required
                            />
                        </div>

                        <div>
                            <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Your Role</Label>
                            <div className="grid grid-cols-2 gap-3">
                                {["Creator", "Marketer", "Business", "Other"].map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, role: role.toLowerCase() })}
                                        className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all ${formData.role === role.toLowerCase()
                                            ? "bg-brand-50 border-brand-200 text-brand-600 dark:bg-brand-900/20 dark:border-brand-800 dark:text-brand-400"
                                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-750"
                                            }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Short Bio (Optional)</Label>
                            <textarea
                                placeholder="A little bit about you..."
                                rows={3}
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all text-sm resize-none"
                            />
                        </div>

                        <div className="pt-2">
                            <Button
                                disabled={loading}
                                className="w-full bg-brand-600 hover:bg-brand-700 text-white rounded-xl py-3 font-semibold shadow-lg shadow-brand-600/20 transition-all disabled:opacity-70"
                            >
                                {loading ? "Saving..." : "Continue"}
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center px-4">
                    <p className="text-xs text-gray-500 leading-relaxed">
                        You can always change these details later in your account settings.
                    </p>
                </div>
            </div>
        </div>
    );
}
