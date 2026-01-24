"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import ShoutlyLogo from "../common/ShoutlyLogo";
import AuthBackground from "./AuthBackground";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
      <AuthBackground />

      <div className="w-full max-w-[480px] z-10">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <ShoutlyLogo />
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Sign in to continue to your dashboard
          </p>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 py-4 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all mb-8 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.16H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.84l3.66-2.75z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.16l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative px-4 bg-white text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Or sign in with email
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-14 bg-gray-50 border border-transparent rounded-2xl px-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-black focus:ring-black/5" />
                <span className="text-sm text-gray-500 font-medium group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" title="Forgot password?" className="text-sm font-bold text-gray-900 hover:text-brand-600 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-black text-white rounded-2xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70 mt-4"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-10 text-center text-sm font-medium text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-gray-900 font-bold hover:text-brand-600 transition-colors">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
