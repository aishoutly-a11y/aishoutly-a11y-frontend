import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit">
            {/* Header */}
            <section className="relative py-24 text-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px] opacity-[0.25] dark:opacity-[0.05]" />
                <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                    Our Services & Pricing
                </h1>
                <p className="relative z-10 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Everything you need to dominate social media, powered by AI.
                </p>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-gray-50/50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "AI Content Generation", desc: "Generate months of content in minutes with a single prompt.", icon: "✨" },
                            { title: "Auto-Scheduling", desc: "Automatically post to Instagram, LinkedIn, and Twitter/X.", icon: "📅" },
                            { title: "Brand Customization", desc: "Your colors, your fonts, your voice. Consistent every time.", icon: "🎨" },
                            { title: "Reel Creation", desc: "Turn text into engaging video reels automatically.", icon: "🎥" },
                            { title: "Hashtag Research", desc: "AI finds the best hashtags to maximize your reach.", icon: "#️⃣" },
                            { title: "Analytics Dashboard", desc: "Track performance and grow your audience with data.", icon: "📊" }
                        ].map((feature, i) => (
                            <div key={i} className="flex gap-5 p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition duration-200 group">
                                <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Plans for everyone</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">Choose the plan that fits your growth.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Starter Plan */}
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-950 flex flex-col">
                            <h3 className="font-bold text-2xl text-gray-900 dark:text-white">Starter</h3>
                            <p className="mt-2 text-gray-500 text-sm">For individuals & small brands</p>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white">$19</span>
                                <span className="ml-2 text-gray-500">/month</span>
                            </div>
                            <ul className="mt-8 space-y-4 text-sm text-gray-600 dark:text-gray-400 flex-1">
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> 365 AI Posts</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Caption Generator</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Basic Scheduling</li>
                            </ul>
                            <Link href="/signup?plan=starter" className="block w-full mt-8 py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-center rounded-xl transition dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                Get Started
                            </Link>
                        </div>

                        {/* Growth Plan */}
                        <div className="relative rounded-2xl border border-brand-200 p-8 shadow-xl bg-gradient-to-b from-white to-brand-50/50 dark:from-gray-900 dark:to-brand-900/10 dark:border-brand-900 flex flex-col transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-sm">MOST POPULAR</div>
                            <h3 className="font-bold text-2xl text-brand-600 dark:text-brand-400">Growth</h3>
                            <p className="mt-2 text-gray-500 text-sm">For teams & agencies scaling up</p>
                            <div className="mt-6 flex items-baseline">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
                                <span className="ml-2 text-gray-500">/month</span>
                            </div>
                            <ul className="mt-8 space-y-4 text-sm text-gray-600 dark:text-gray-400 flex-1">
                                <li className="flex items-center gap-3 text-gray-900 dark:text-white font-medium"><svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Everything in Starter</li>
                                <li className="flex items-center gap-3 text-gray-900 dark:text-white font-medium"><svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> AI Video Reels</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Multi-Platform Posting</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Advanced Analytics</li>
                                <li className="flex items-center gap-3"><svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Priority Support</li>
                            </ul>
                            <Link href="/signup?plan=growth" className="block w-full mt-8 py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-center rounded-xl transition shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30">
                                Start Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
