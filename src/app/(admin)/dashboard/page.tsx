import React from "react";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function Dashboard() {
    return (
        <div className="p-10 font-outfit max-w-[1600px] mx-auto">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                        Welcome back, Shovon! 👋
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                        Here&apos;s what&apos;s happening with your brand today.
                    </p>
                </div>
                <button className="inline-flex items-center gap-2 justify-center rounded-2xl bg-black px-8 py-4 text-sm font-bold text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 hover:-translate-y-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New Content
                </button>
            </div>

            {/* Quick Summary / Plan Info */}
            <div className="mb-12 bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-900/20 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-brand-500 text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-widest">Growth Plan</span>
                        <span className="text-brand-600 dark:text-brand-400 text-sm font-bold">Expires in 12 days</span>
                    </div>
                    <p className="text-brand-900 dark:text-white font-bold leading-relaxed max-w-md">
                        You&apos;ve used <span className="font-black text-brand-600 dark:text-brand-400">85%</span> of your monthly credits.
                        Upgrade to Pro for unlimited content generation.
                    </p>
                </div>
                <div className="w-full md:w-64">
                    <div className="w-full bg-gray-200 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden mb-3">
                        <div className="bg-brand-500 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(251,107,31,0.5)]"></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        <span>850 Used</span>
                        <span>1000 Total</span>
                    </div>
                </div>
                <button className="bg-white text-black px-8 py-3.5 rounded-2xl text-sm font-black shadow-sm border border-gray-100 hover:bg-gray-50 transition-all">
                    Upgrade Plan
                </button>
            </div>

            <DashboardGrid />
        </div>
    );
}
