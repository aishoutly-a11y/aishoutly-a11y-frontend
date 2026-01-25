"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import ShoutlyLogo from "../common/ShoutlyLogo";
import AuthBackground from "./AuthBackground";

export default function SignInForm() {
  const router = useRouter();
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
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-10 overflow-hidden">
      <AuthBackground />

      <div className="w-full max-w-[480px] z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-10">
          <Link href="/">
            <ShoutlyLogo />
          </Link>
        </div>

        {/* Main Card */}
        <div className="w-full bg-white rounded-[40px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center">
          <h1 className="text-center text-[32px] font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500 mb-10 text-sm">
            Sign in to continue to your dashboard
          </p>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 h-14 border border-gray-100 rounded-2xl text-sm font-bold text-gray-900 hover:bg-gray-50 transition-all mb-8 shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.16H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.84l3.66-2.75z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.16l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2.5 ml-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl pl-14 pr-5 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2.5 ml-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl pl-14 pr-14 text-gray-900 text-sm focus:bg-white focus:border-brand-500 transition-all outline-none shadow-sm"
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
                <span className="text-sm text-gray-400 font-bold group-hover:text-gray-900 transition-colors">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-bold text-gray-500 hover:text-brand-600 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-black text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-black/10 disabled:opacity-70 mt-4"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="mt-10 text-center text-sm font-bold text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-gray-900 font-bold hover:text-brand-600 transition-colors">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

