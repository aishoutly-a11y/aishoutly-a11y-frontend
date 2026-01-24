"use client";

import { useState } from "react";

const faqs = [
    {
        question: "How does the AI content generation work?",
        answer: "Shoutly uses advanced LLMs to analyze your brand details and industry. It then generates high-quality, relevant captions, hashtags, and post ideas tailored to your specific voice."
    },
    {
        question: "Can I edit the generated content?",
        answer: "Absolutely! You have full control. You can edit any caption, swap images, or tweak hashtags before scheduling or posting."
    },
    {
        question: "Which platforms do you support?",
        answer: "Currently, we support Instagram, LinkedIn, Twitter/X, and Facebook. We are working on adding TikTok and Pinterest soon."
    },
    {
        question: "Is there a free trial?",
        answer: "Yes, we offer a 14-day free trial on the Growth plan so you can experience the full power of Shoutly AI risk-free."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Everything you need to know about Shoutly.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote: "Shoutly has completely saved my sanity. I used to spend Sundays stressed about content. Now it's all done in 10 minutes.",
        author: "Sarah J.",
        role: "Small Business Owner",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        quote: "The brand voice feature is incredible. It actually sounds like me, not a robot. My engagement has doubled.",
        author: "Mark T.",
        role: "Marketing Freelancer",
        avatar: "https://i.pravatar.cc/150?u=mark"
    },
    {
        quote: "I manage 5 clients and Shoutly is the only reason I can sleep at night. Best investment for my agency.",
        author: "Elena R.",
        role: "Social Media Manager",
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Loved by Creators</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Don&apos;t just take our word for it.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1 mb-6 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">&quot;{t.quote}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                    {/* Fallback for avatar if external not allowed, but using standard placeholder pattern */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{t.author}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
