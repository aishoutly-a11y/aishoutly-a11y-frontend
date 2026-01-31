import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-arial">
            {/* Mission Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[600px] bg-brand-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-2 px-6 rounded-full bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-brand-100">
                        Our Mission
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                        Human Ingenuity.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600">AI Precision.</span>
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        Shoutly AI was built to bridge the gap between complex technology and creative freedom. We empower brands to tell their story effortlessly.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 relative z-10">
                            <Image
                                src="/images/team-office.png"
                                alt="Team collaboration"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full z-0" />
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">The Shoutly Story</h2>
                        <div className="space-y-8 text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium">
                            <p>
                                Founded in 2024, Shoutly AI emerged from a simple question: Why should social media management take hours when AI can do it in seconds?
                            </p>
                            <p>
                                We didn&apos;t just want to build another scheduling tool. We wanted to build a creative partner—one that understands brand voice, visual aesthetics, and the pulse of digital trends.
                            </p>
                            <p>
                                Today, Shoutly helps thousands of businesses maintain a stunning, consistent online presence without the creative burnout. We handle the data so you can handle the vision.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-10 border-t border-gray-100 dark:border-gray-800 pt-12">
                            <div>
                                <h4 className="text-5xl font-black text-brand-600 tracking-tighter">12k+</h4>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Active Creators</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-black text-brand-600 tracking-tighter">2.5M</h4>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Assets Created</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Our Core Principles</h2>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg font-medium">The foundation of every pixel we design.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Simplicity First", desc: "Complexity is the enemy of creativity. We build tools that feel as natural as breathing." },
                            { title: "Aesthetic Excellence", desc: "AI should not just be smart; it should be beautiful. We prioritize high-end design in every output." },
                            { title: "Radical Innovation", desc: "We don&apos;t follow trends. We use state-of-the-art models to define the future of content." }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-12 rounded-[48px] border border-gray-100 dark:border-gray-700 hover:border-brand-500 transition-all duration-500 group">
                                <span className="text-5xl font-black text-brand-500/20 group-hover:text-brand-500 transition-colors mb-8 block">0{idx + 1}</span>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{value.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
