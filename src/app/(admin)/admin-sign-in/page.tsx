"use client";

import { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle admin login
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-8">

                {/* Shield Icon */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <ShieldCheckIcon className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-center text-lg font-semibold text-gray-900">
                    Shoutly AI Admin
                </h1>

                {/* Subtitle */}
                <p className="text-center text-sm text-gray-600 mb-6">
                    Content Moderation & Control System
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="admin@shoutly.ai"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="......."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                            required
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full h-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
                    >
                        Sign in
                    </button>
                </form>

                {/* Demo Credentials */}
                <div className="mt-6 bg-gray-100 rounded-xl p-4 text-sm text-gray-700">
                    <p className="font-semibold mb-2">Demo Credentials:</p>

                    <p>Super Admin: admin@shoutly.ai / admin123</p>
                    <p>Content: content@shoutly.ai / content123</p>
                    <p>Technical: tech@shoutly.ai / tech123</p>
                    <p>Finance: finance@shoutly.ai / finance123</p>
                </div>

            </div>
        </div>
    );
}
