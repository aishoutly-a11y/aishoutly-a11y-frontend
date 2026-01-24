// src/app/page.tsx
'use client'
import { Facebook, Instagram, LinkedIn, Logo, Reels, Twitter } from '@/icons';
import Link from 'next/link';
import React from 'react'

export default function LandingPage() {
    const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <Twitter />, href: "#" },
    { icon: <LinkedIn />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Facebook />, href: "#" },
    { icon: <Reels />, href: "#" },
  ];

  const companyLinks = ["About Us", "Careers", "Contact", "Blog"];
  const productLinks = ["Features", "Pricing", "Template Library", "API"];
  const industryLinks = ["Health & Wellness", "Real Estate", "Food & Beverage", "Fashion"];
  const resourceLinks = ["Help Center", "Affiliate Program", "Case Studies", "Tutorials"];

  const renderLinks = (links: string[]) =>
    links.map((link) => (
      <li key={link}>
        <a href="#" className="hover:underline">
          {link}
        </a>
      </li>
    ));
  return (
    <main className="w-full text-slate-900">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2 font-semibold">
           <Logo/>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a>Home</a><a>Features</a><a>Pricing</a><a>Get Early Access</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href='/signin'>
            <button className="text-sm">Login</button>
            </Link>
            <Link href='/signup'>
            <button className="rounded-full bg-black text-white px-4 py-2 text-sm">Sign Up Free</button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-sky-200 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/clouds.svg')] opacity-40" />
        <div className="relative mx-auto max-w-5xl text-center px-6">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs shadow">⚡ AI‑Powered Content Generation</span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Generate <span className="text-[#7C3AED]">365 Days</span> of Social Content, Brand Designs, Reels & Hashtags — in Minutes.
          </h1>
          <p className="mt-6 text-slate-600">Upload your logo → Enter one prompt → Get 365 days of AI‑built content</p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-black text-white px-6 py-3">⚡ Try Free</button>
            <button className="rounded-full border px-6 py-3">▶ Watch Demo</button>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-xl">
            <span>🌐</span><span>🐦</span><span>💼</span><span>📺</span><span>📸</span>
          </div>
        </div>
      </section>

      {/* SEE IT IN ACTION */}
      <section className="py-24">
        <h2 className="text-center text-2xl font-semibold">See it in Action</h2>
        <div className="mt-10 mx-auto max-w-6xl rounded-2xl overflow-hidden shadow">
          <div className="aspect-video bg-black grid place-items-center text-white">▶</div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-6">
          {["2 Minutes Setup","Auto‑Branded","365 Days Filled","Multi‑Platform"].map(i => (
            <div key={i} className="rounded-xl border p-4 text-center text-sm">⚡ {i}</div>
          ))}
        </div>
      </section>

      {/* GENERATE YEAR */}
      <section className="py-24 bg-slate-50">
        <h2 className="text-center text-3xl font-semibold">Generate Your Year of Content</h2>
        <p className="text-center text-slate-600 mt-2">One prompt. 365 days of posts.</p>
        <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          <div className="rounded-xl bg-white p-6 border">
            <h3 className="font-semibold mb-4">1. Select Your Industry</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              {["Health","Food","Fashion","Real Estate","Education","Finance"].map(i => (
                <button key={i} className="border rounded-lg py-3">{i}</button>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 border">
            <h3 className="font-semibold mb-4">2. Describe Your Brand</h3>
            <textarea className="w-full h-28 border rounded-lg p-3" placeholder="I'm an architect…" />
            <button className="mt-4 w-full rounded-lg bg-[#7C3AED] text-white py-3">Generate 365 Days of Content</button>
          </div>
        </div>
      </section>

      {/* TEMPLATE LIBRARY */}
      <section className="py-24">
        <h2 className="text-center text-3xl font-semibold">Browse Our Library</h2>
        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-[#E9D5FF] to-[#FBCFE8]" />
          ))}
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block mb-3 rounded-full bg-orange-100 text-orange-600 px-4 py-1 text-xs font-medium">Built for Every Industry</span>
          <h2 className="text-3xl font-semibold text-center">Who We Help</h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {["Health & Fitness","Food & Beverage","Fashion & Lifestyle","Real Estate & Construction","Finance & Crypto","Education & Coaching","E‑commerce Brands","Agencies & Creators"].map(i => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium">{i}</p>
                <p className="mt-2 text-slate-500 text-xs">AI-generated posts, reels & creatives tailored to your niche.</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-black text-white px-8 py-3 text-sm">Find Your Industry</button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block mb-3 rounded-full bg-violet-100 text-violet-600 px-4 py-1 text-xs font-medium">Simple Pricing</span>
          <h2 className="text-center text-3xl font-semibold">Simple, Affordable Pricing</h2>
          <p className="mt-2 text-center text-slate-600">Choose the plan that fits your content goals</p>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="font-semibold text-lg">Starter</h3>
              <p className="mt-2 text-slate-500 text-sm">For individuals & small brands</p>
              <p className="mt-6 text-4xl font-bold">₹899<span className="text-base font-medium text-slate-500">/month</span></p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li>✔ 365 AI Posts</li>
                <li>✔ Captions & Hashtags</li>
                <li>✔ Auto Scheduling</li>
              </ul>
              <button className="mt-8 w-full rounded-xl border border-slate-300 py-3 text-sm font-medium hover:bg-slate-100 transition">Get Started</button>
            </div>

            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563EB] to-[#7C3AED] shadow-lg">
              <div className="rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] p-8 text-white">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs">Most Popular</span>
                <h3 className="font-semibold text-lg">Growth</h3>
                <p className="mt-2 text-white/80 text-sm">For teams & growing businesses</p>
                <p className="mt-6 text-4xl font-bold">₹1,499<span className="text-base font-medium text-white/80">/month</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li>✔ Everything in Starter</li>
                  <li>✔ Reels & Visual Creatives</li>
                  <li>✔ Multi-Platform Posting</li>
                </ul>
                <button className="mt-8 w-full rounded-xl bg-white text-black py-3 text-sm font-semibold">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-[length:200%_200%] animate-pulse" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold">Generate Content Using 10,000+ AI Prompts</h2>
          <p className="mt-4 text-white/80">Create a full year of branded content in minutes.</p>
          <button className="mt-8 rounded-full bg-white text-black px-10 py-4 text-sm font-semibold">Create My Content</button>
        </div>
      </section>

      {/* FOOTER */}
       <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg font-bold">
              S
            </div>
            <span className="ml-2 text-xl font-semibold">ShoutlyAI</span>
          </div>
          <p className="text-gray-400 text-sm">
            Generate 365 days of social media content in minutes. AI-powered automation for modern businesses.
          </p>
          <div className="flex space-x-3 mt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-400">{renderLinks(companyLinks)}</ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-gray-400">{renderLinks(productLinks)}</ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Industries</h4>
          <ul className="space-y-1 text-gray-400">{renderLinks(industryLinks)}</ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-gray-400">{renderLinks(resourceLinks)}</ul>
        </div>
      </div>

      {/* Bottom Policy */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-sm flex flex-col md:flex-row justify-between text-gray-500">
        <span>© {currentYear} ShoutlyAI. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
    </main>
  )
}
