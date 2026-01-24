export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-gray-950 font-outfit min-h-screen">
            <section className="relative py-24 max-w-7xl mx-auto px-6">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-50 z-0 dark:bg-brand-900/10 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-4">Contact Us</span>
                        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Let&apos;s start a conversation</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                            Have questions about Shoutly AI? We&apos;re here to help. Chat with our team or fill out the form below.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition duration-300 dark:hover:bg-gray-900 dark:hover:border-gray-800">
                                <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 shrink-0">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chat to support</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">Speak to our friendly team for technical support or general queries.</p>
                                    <a href="mailto:support@shoutly.ai" className="text-brand-600 font-semibold hover:underline mt-3 inline-block">support@shoutly.ai</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition duration-300 dark:hover:bg-gray-900 dark:hover:border-gray-800">
                                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shrink-0">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visit us</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">Visit our office HQ for a coffee.</p>
                                    <p className="text-gray-900 dark:text-white mt-3 font-medium">100 Smith Street, Melbourne VIC 3000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl dark:border-gray-800 relative">
                        {/* Form decorative blob */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-10 pointer-events-none"></div>

                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First name</label>
                                    <input type="text" id="first-name" className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3.5 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900" placeholder="First name" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last name</label>
                                    <input type="text" id="last-name" className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3.5 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900" placeholder="Last name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input type="email" id="email" className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3.5 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900" placeholder="you@company.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white transition-all shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3.5 px-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:bg-gray-900 resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-4 rounded-xl transition shadow-lg shadow-brand-600/20 transform hover:-translate-y-0.5 mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
