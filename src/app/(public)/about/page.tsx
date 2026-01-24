import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit">
            {/* Header Section */}
            <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:40px_40px] opacity-[0.4] dark:opacity-[0.1]" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/50 to-transparent dark:from-brand-900/10 dark:to-transparent" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold mb-6 dark:bg-brand-900/30 dark:text-brand-400">
                        About Shoutly AI
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Empowering Creators with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Intelligent AI</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We&apos;re on a mission to simplify social media content creation, giving you back the time to focus on what truly matters—your business.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-gray-100 dark:bg-gray-800 transform rotate-2 hover:rotate-0 transition duration-500">
                            <Image
                                src="/images/team-office.png"
                                alt="Shoutly Team collaborating in a modern office"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-100 rounded-full z-[-1] dark:bg-brand-900/20"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full z-[-1] dark:bg-purple-900/20"></div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            <p>
                                Founded in 2024, Shoutly AI was born from a simple frustration: social media marketing is essential, but it is also incredibly time-consuming.
                            </p>
                            <p>
                                We realized that small business owners and creators were spending hours every week brainstorming captions, designing posts, and researching hashtags—time that could be better spent serving their customers.
                            </p>
                            <p>
                                So we built Shoutly. An intelligent, automated assistant that handles the heavy lifting of content creation, ensuring your brand stays active and engaging, 365 days a year.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                            <div>
                                <h4 className="text-4xl font-bold text-brand-600 dark:text-brand-400">10k+</h4>
                                <p className="text-sm font-medium text-gray-500 mt-1">Active Users</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-brand-600 dark:text-brand-400">1M+</h4>
                                <p className="text-sm font-medium text-gray-500 mt-1">Posts Generated</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-brand-600 dark:text-brand-400">50+</h4>
                                <p className="text-sm font-medium text-gray-500 mt-1">Industries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Core Values</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">The principles that guide everything we build.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Simplicity First", desc: "We believe powerful tools shouldn't be complicated. We design for absolute ease of use, making AI accessible to everyone." },
                            { title: "Creator Centric", desc: "Everything we do is to help creators and business owners succeed. Your growth is our primary metric." },
                            { title: "Continuous Innovation", desc: "We are constantly pushing the boundaries of what AI can do for marketing, delivering state-of-the-art features." }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition duration-300">
                                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-6 text-xl font-bold dark:bg-brand-900/20 dark:text-brand-400">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
