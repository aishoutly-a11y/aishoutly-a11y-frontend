import LandingHero from "@/components/public/LandingHero";
import IndustrySection from "@/components/public/IndustrySection";
import PricingSection from "@/components/public/PricingSection";
import GenerateDemo from "@/components/public/GenerateDemo";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="bg-white text-gray-900 font-outfit">
            {/* 1. HERO SECTION */}
            <LandingHero />

            {/* 2. SEE IT IN ACTION / VIDEO SECTION */}
            <section id="features" className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">See it in Action</h2>
                    </div>

                    <div className="relative mx-auto max-w-5xl rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 bg-gray-900 group">
                        <div className="aspect-video relative bg-slate-800">
                            {/* Mock video content */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-500">
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center shadow-2xl">
                                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "2 Minutes Setup", icon: "✨" },
                            { title: "Auto-Branded", icon: "🎨" },
                            { title: "365 Days Filled", icon: "📅" },
                            { title: "Multi-Platform", icon: "🚀" }
                        ].map(f => (
                            <div key={f.title} className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 text-center hover:bg-white hover:shadow-xl hover:border-white transition-all">
                                <div className="text-4xl mb-4">{f.icon}</div>
                                <h4 className="font-black text-gray-900">{f.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. GENERATE YEAR DEMO */}
            <section className="py-32 bg-gray-50/30 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full text-brand-600 text-xs font-black uppercase tracking-widest mb-4">Interactive Demo</div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Generate Your Year of Content</h2>
                        <p className="text-gray-500 text-lg font-medium lg:px-20">One prompt. 365 days of posts. Infinite possibilities for your brand growth.</p>
                    </div>

                    <GenerateDemo />
                </div>
            </section>

            {/* 4. LIBRARY SHOWCASE */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Browse Our Library</h2>
                        <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">Access 10,000+ AI-generated high-quality images and reels template designed to convert.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="aspect-[3/4] bg-gray-100 rounded-[32px] overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <button className="w-full py-3 bg-white/90 backdrop-blur text-black font-bold rounded-xl text-sm">Preview</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/library" className="inline-flex items-center gap-2 text-brand-500 font-black hover:gap-3 transition-all">
                            Explore full library
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. INDUSTRY SECTION */}
            <IndustrySection />

            {/* 6. PRICING SECTION */}
            <PricingSection />

            {/* 7. PRE-FOOTER CTA */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-black rounded-[50px] p-12 lg:p-24 relative overflow-hidden text-center text-white">
                        {/* Decorative background */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent opacity-50" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent opacity-50" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-[1]">Ready to automate your <br className="hidden md:block" /> social media success?</h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto ring-offset-slate-50">Join thousands of creators and businesses saving 20+ hours every week with AI-powered automation.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="/signup"
                                    className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-[22px] font-black text-lg hover:bg-gray-100 transition-all hover:scale-[1.02]"
                                >
                                    Get Started for Free
                                </Link>
                                <div className="text-sm font-bold text-gray-500">14-day trial · No credit card required</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
