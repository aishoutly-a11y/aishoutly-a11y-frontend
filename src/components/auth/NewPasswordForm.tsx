"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EyeCloseIcon, EyeIcon } from "@/icons";

export default function NewPasswordPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            router.push("/success?type=reset");
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

            {/* Logo */}
            <div className="mb-6">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={180}
                    height={120}
                    priority
                    className="mx-auto"
                />
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

                {/* Title */}
                <h1
                    className="text-2xl text-center text-black mb-2"
                    style={{ fontFamily: "Arial", fontWeight: 400 }}
                >
                    New Password
                </h1>

                {/* Subtitle */}
                <p
                    className="text-left text-gray-600 mb-6"
                    style={{ fontFamily: "Arial", fontWeight: 400, paddingBottom: "1rem" }}
                >
                    Set the new password for your account so you can login and access all featuress.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Password */}
                    <div>
                        <label
                            className="block text-sm text-gray-700 mb-1"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            Enter new password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="8 symbols at least"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                                style={{ fontFamily: "Arial", fontWeight: 400 }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            className="block text-sm text-gray-700 mb-1"
                            style={{ fontFamily: "Arial", fontWeight: 400 }}
                        >
                            Confirm password
                        </label>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="8 symbols at least"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                                style={{ fontFamily: "Arial", fontWeight: 400 }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={
                            loading ||
                            !formData.password ||
                            formData.password !== formData.confirmPassword
                        }
                        className="w-full h-12 bg-[#000000] text-white hover:opacity-90 transition disabled:opacity-60"
                        style={{ fontFamily: "Arial", fontWeight: 400 }}
                    >
                        {loading ? "Updating..." : "Update Password"}
                    </button>

                </form>
            </div>
        </div>
    );
}
