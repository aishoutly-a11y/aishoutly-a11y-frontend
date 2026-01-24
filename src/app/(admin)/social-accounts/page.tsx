import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Social Accounts | Shoutly AI",
    description: "Connect and manage your social media accounts.",
};

export default function SocialAccounts() {
    return (
        <div className="p-6 font-outfit">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Social Accounts</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Connect your profiles to enable auto-posting.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Instagram */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-64">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Connected
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Instagram</h3>
                        <p className="text-sm text-gray-500">@shoutly.ai</p>
                    </div>
                    <button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition">
                        Manage Connection
                    </button>
                </div>

                {/* LinkedIn */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-64">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center text-white">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5.124v-8.334c0-2.193.36-4.329 3.123-4.329 2.763 0 2.809 2.583 2.809 4.595v8.068h5.105v-8.834c0-4.332-1.025-7.668-6.079-7.668-2.379 0-3.951 1.309-4.609 2.529h-.136v-2.127z" /></svg>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                            Not Connected
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">LinkedIn</h3>
                        <p className="text-sm text-gray-500">Company Page</p>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        Connect Account
                    </button>
                </div>

                {/* Twitter / X */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between h-64">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white dark:bg-white dark:text-black">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                            Not Connected
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Twitter / X</h3>
                        <p className="text-sm text-gray-500">Profile</p>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        Connect Account
                    </button>
                </div>
            </div>
        </div>
    );
}
