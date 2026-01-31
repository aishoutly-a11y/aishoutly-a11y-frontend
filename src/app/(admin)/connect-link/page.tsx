"use client";

import React, { useState } from "react";
import { PlusIcon } from "@/icons";

export default function ConnectLink() {
    return (
        <div className="p-10 font-arial max-w-[1000px]">
            <div className="mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Connect Accounts</h1>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Manage your connected social platforms and integrations.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-[40px] p-10 border border-gray-100 dark:border-gray-700 shadow-sm space-y-10">
                <div className="text-center py-10">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <PlusIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Link New Account</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm max-w-sm mx-auto mb-8">Connect your favorite platforms to start auto-posting and analyzing your growth.</p>
                    <button className="h-14 px-10 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 hover:bg-gray-800 transition-all">
                        Connect Platform
                    </button>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-700 pt-10">
                    <h4 className="text-lg font-black text-gray-900 dark:text-white mb-6">Active Connections</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm">
                                    <span className="font-black text-lg">IG</span>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">Instagram</p>
                                    <p className="text-xs text-gray-400 font-bold">@shoutly.ai</p>
                                </div>
                            </div>
                            <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">Connected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
