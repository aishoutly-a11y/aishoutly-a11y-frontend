import Image from "next/image";
import Link from "next/link";
import GenerateDemo from "@/components/public/GenerateDemo";
import { FAQ, Testimonials } from "@/components/public/SocialProof";

export default function HomePage() {
    return (
        <div className="bg-white text-slate-900 font-outfit">
            {/* HERO */}
            <section className="pt-24 pb-32 bg-gradient-to-b from-brand-50/50 to-white relative overflow-hidden dark:from-gray-900 dark:to-gray-950">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px] opacity-[0.25] dark:opacity-[0.05]" />
                <div className="relative mx-auto max-w-5xl text-center px-6 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-gray-800 px-4 py-1.5 text-xs font-semibold shadow-sm border border-gray-100 dark:border-gray-700 text-brand-600 dark:text-brand-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        AI‑Powered Content Generation
                    </span>
                    <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                        Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200">365 Days</span> of Content in Minutes.
                    </h1>
                    <p className="mt-8 text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Upload your logo → Enter one prompt → Get a full year of AI‑built marketing assets.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white px-8 py-4 text-lg font-semibold hover:bg-brand-700 transition shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transform hover:-translate-y-0.5"
                        >
                            Start for Free
                        </Link>
                        <button className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 px-8 py-4 text-lg font-medium hover:bg-gray-50 transition dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Watch Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* SEE IT IN ACTION */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">See it in Action</h2>

                    {/* Enhanced Video Player Mockup */}
                    <div className="relative mt-8 mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900 group cursor-pointer">
                        <div className="aspect-video relative grid place-items-center bg-gray-800">
                            {/* Mock Screen Content (Abstract UI) */}
                            <div className="absolute inset-4 bg-gray-900 rounded-lg border border-gray-700 opacity-50 flex flex-col overflow-hidden">
                                <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                                    <div className="col-span-1 bg-gray-800 rounded h-full animate-pulse"></div>
                                    <div className="col-span-2 flex flex-col gap-4">
                                        <div className="h-32 bg-gray-700 rounded w-full"></div>
                                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition">
                                <div className="transform group-hover:scale-110 transition duration-300">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                                        <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center shadow-lg">
                                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Player Controls Mockup */}
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent px-6 flex items-center gap-4 text-white/80">
                                <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-brand-500 rounded-full"></div>
                                </div>
                                <span className="text-xs font-medium">0:42 / 2:15</span>
                                <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { label: "2 Minutes Setup", icon: "⏱️" },
                            { label: "Auto‑Branded", icon: "🎨" },
                            { label: "365 Days Filled", icon: "📅" },
                            { label: "Multi‑Platform", icon: "📱" }
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm transition hover:shadow-md dark:bg-gray-900 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-900">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GENERATE YEAR */}
            <section className="py-24 bg-slate-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Interactive Demo</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Generate Your Year of Content</h2>
                        <p className="mt-4 text-xl text-slate-600 dark:text-gray-400">One prompt. 365 days of posts. Infinite possibilities.</p>
                    </div>

                    <GenerateDemo />
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* CTA */}
            <section className="relative py-24 overflow-hidden bg-brand-900">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to automate your social media?</h2>
                    <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto leading-relaxed">Join thousands of creators and businesses saving hours every week with Shoutly AI.</p>
                    <Link href="/signup" className="inline-block rounded-full bg-white text-brand-600 px-10 py-4 text-lg font-bold hover:bg-gray-100 transition shadow-2xl hover:scale-105 duration-200">
                        Get Started Now
                    </Link>
                    <p className="mt-6 text-sm text-brand-200 opacity-80">No credit card required · 14-day free trial</p>
                </div>
            </section>
        </div>
    );
}
