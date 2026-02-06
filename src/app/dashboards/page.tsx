"use client";

import Image from "next/image";
import { useState } from "react";
import {
    HomeIcon,
    SparklesIcon,
    CalendarIcon,
    PhotoIcon,
    SwatchIcon,
    ShareIcon,
    CreditCardIcon,
    Cog6ToothIcon,
    BellIcon,
    UserCircleIcon,
    BoltIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    ArrowTrendingUpIcon,
    ClockIcon,
    ArrowUpTrayIcon, PencilIcon, EyeIcon, TrashIcon

} from "@heroicons/react/24/outline";
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Generate Content", icon: SparklesIcon },
    { name: "Content Calendar", icon: CalendarIcon },
    { name: "Image & Reel Library", icon: PhotoIcon },
    { name: "Brand Settings", icon: SwatchIcon },
    { name: "Social Accounts", icon: ShareIcon },
    { name: "Subscription & Billing", icon: CreditCardIcon },
    { name: "Settings", icon: Cog6ToothIcon },
];

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="flex min-h-screen bg-gray-50 font-arial">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r px-6 py-6">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={140}
                    height={60}
                    className="mb-8"
                />

                <nav className="space-y-2">
                    {menuItems.map(({ name, icon: Icon }) => (
                        <button
                            key={name}
                            onClick={() => setActiveTab(name)}
                            className={`w-full flex items-center gap-3 px-2 py-1 rounded-xl text-left transition
                            ${activeTab === name
                                    ? "bg-black text-white"
                                    : "text-black hover:bg-gray-100"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {name}
                        </button>
                    ))}
                </nav>
            </aside>
            <div className="flex-1 flex flex-col bg-gray-50">
                <header className="bg-white border-b w-full">
                    <div className="flex justify-between items-center px-6 py-4">

                        {/* Left */}
                        <div>
                            <h1 className="text-2xl text-black font-arial">
                                My Workspace
                            </h1>
                            <p className="text-gray-500 font-arial">
                                Premium Plan
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-3">

                            {[
                                { icon: FaYoutube, color: "text-red-600" },
                                { icon: FaInstagram, color: "text-pink-600" },
                                { icon: FaFacebook, color: "text-blue-600" },
                                { icon: FaLinkedin, color: "text-blue-700" },
                                { icon: FaTwitter, color: "text-sky-500" },
                            ].map(({ icon: Icon, color }, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 bg-white border rounded-full flex items-center justify-center"
                                >
                                    <Icon className={`w-4 h-4 ${color}`} />
                                </div>
                            ))}

                            <div className="w-9 h-9 bg-white border rounded-full flex items-center justify-center">
                                <BellIcon className="w-5 h-5 text-gray-700" />
                            </div>

                            <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-arial">FA</span>
                            </div>

                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 bg-white">

                    {activeTab === "Dashboard" && (
                        <div className="p-6 bg-gray-50">

                            {/* Header */}
                            <div className="p-6 bg-gray-50">



                                {/* Welcome */}
                                <div className="mb-6">
                                    <h2 className="text-xl">Welcome back! 👋</h2>
                                    <p className="text-gray-500">
                                        Here's what happening with your content
                                    </p>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    {[
                                        {
                                            icon: ChartBarIcon,
                                            value: "365",
                                            text: "Posts Generated",
                                            iconColor: "text-blue-600",
                                        },
                                        {
                                            icon: CalendarIcon,
                                            value: "31",
                                            text: "Scheduled This Month",
                                            iconColor: "text-violet-600",
                                        },
                                        {
                                            icon: ShareIcon,
                                            value: "4",
                                            text: "Platforms Connected",
                                            iconColor: "text-green-600",
                                        },
                                        {
                                            icon: ClockIcon,
                                            value: "2h 15m",
                                            text: "Next Post Time",
                                            iconColor: "text-red-600",
                                        },
                                    ].map(({ icon: Icon, value, text, iconColor }) => (
                                        <div
                                            key={text}
                                            className="bg-white p-5 rounded-xl shadow"
                                        >
                                            {/* Icon */}
                                            <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                                <Icon className={`w-5 h-5 ${iconColor}`} />
                                            </div>

                                            {/* Value — NOT bold */}
                                            <h3 className="text text-[#000000] font-normal">
                                                {value}
                                            </h3>

                                            {/* Description — NOT bold */}
                                            <p className="text-gray-500 text-sm font-normal">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>


                                {/* Automation Card */}
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 flex justify-between items-center mb-8">
                                    <div className="flex items-center gap-4">
                                        <BoltIcon className="w-8 h-8" />
                                        <div>
                                            <p className="">Automation Status: ON</p>
                                            <p className="text-sm opacity-90">
                                                AI content is being auto-generated and scheduled
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Active
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="grid grid-cols-3 gap-6">

                                    {/* Left Side */}
                                    <div className="col-span-2">
                                        <h3 className="mb-4">Quick Actions</h3>

                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            {[
                                                {
                                                    title: "View Calendar",
                                                    text: "See your content schedule",
                                                    icon: CalendarIcon,
                                                    color: "text-blue-600",
                                                },
                                                {
                                                    title: "Generate New Content",
                                                    text: "Create more posts",
                                                    icon: SparklesIcon,
                                                    color: "text-violet-600",
                                                },
                                                {
                                                    title: "Connect Social Accounts",
                                                    text: "Add more platforms",
                                                    icon: ShareIcon,
                                                    color: "text-green-600",
                                                },
                                            ].map(({ title, text, icon: Icon, color }) => (
                                                <div
                                                    key={title}
                                                    className="bg-white p-4 rounded-xl shadow"
                                                >
                                                    {/* Icon with gray background */}
                                                    <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mb-3">
                                                        <Icon className={`w-5 h-5 ${color}`} />
                                                    </div>

                                                    <h4 className="text-black font-normal">
                                                        {title}
                                                    </h4>

                                                    <p className="text-sm text-gray-500 font-normal">
                                                        {text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Performance Overview */}
                                        <div className="bg-white p-6 rounded-xl shadow">
                                            <div className="flex justify-between mb-4">
                                                <h4 className="">Performance Overview</h4>
                                                <input
                                                    className="border rounded-lg px-3 py-1 text-sm"
                                                    placeholder="Last 7 days"
                                                />
                                            </div>

                                            <div className="grid grid-cols-3 text-center">
                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-center justify-center gap-2 mb-1">
                                                        <ArrowTrendingUpIcon className="w-5 h-5 text-gray-600" />
                                                        <p className="text-gray-500">Engagement Rate</p>
                                                    </div>

                                                    <p className="">+24.5%</p>
                                                    <p className="text-green-500 text-sm">12% from last week</p>
                                                </div>

                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-center justify-center gap-2 mb-1">
                                                        <ChartBarIcon className="w-5 h-5 text-gray-600" />
                                                        <p className="text-gray-500">Total Reach</p>
                                                    </div>

                                                    <p className="">45.2K</p>
                                                    <p className="text-green-500 text-sm">8% from last week</p>
                                                </div>

                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-center justify-center gap-2 mb-1">
                                                        <CursorArrowRaysIcon className="w-5 h-5 text-gray-600" />
                                                        <p className="text-gray-500">Posts Published</p>
                                                    </div>

                                                    <p className="">21</p>
                                                    <p className="text-gray-500 text-sm">On schedule</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div>
                                        <h3 className="mb-4">Recent Activity</h3>

                                        <div className="bg-white p-4 rounded-xl shadow mb-4 space-y-3">
                                            {[
                                                ["green", "Content generated for January 2025", "2 mins ago"],
                                                ["green", "Posted to Instagram", "1 hour ago"],
                                                ["red", "Edited caption for Dec 15 post", "3 hours ago"],
                                                ["green", "Connected LinkedIn account", "1 day ago"],
                                            ].map(([color, title, time]) => (
                                                <div key={title} className="flex gap-3">
                                                    <span className={`w-3 h-3 rounded-full mt-1 bg-${color}-500`} />
                                                    <div>
                                                        <p className="text-sm">{title}</p>
                                                        <p className="text-xs text-gray-500">{time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-white p-4 rounded-xl shadow">
                                            <h4 className="mb-3">Upcoming posts</h4>
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="border rounded-lg p-3 mb-2">
                                                    <p className="">Holiday Special</p>
                                                    <p className="text-sm text-gray-500">
                                                        Tomorrow 10:00 AM
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Generate Content" && (
                        <div className="p-6 bg-gray-50">
                            {/* Page Title */}
                            <div className="mb-6">
                                <h2 className="text-xl">Generate Content</h2>
                                <p className="text-gray-500">
                                    Create a full year of AI-powered social media content
                                </p>
                            </div>

                            {/* Main Card */}
                            <div className="bg-white rounded-xl shadow p-6 mb-6 ml-12">

                                {/* Industry Selection */}
                                <h3 className="mb-4">Select Your Industry</h3>

                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    {[
                                        { emoji: "🧘‍♀️", label: "Health & Wellness" },
                                        { emoji: "🍔", label: "Food & Beverage" },
                                        { emoji: "👗", label: "Fashion & Apparel" },
                                        { emoji: "🏠", label: "Real Estate" },
                                        { emoji: "🏋️‍♂️", label: "Fitness & Gym" },
                                        { emoji: "💇‍♀️", label: "Beauty & Salon" },
                                        { emoji: "🎓", label: "Education & Training" },
                                        { emoji: "🏦", label: "Finance & Banking" },
                                    ].map(({ emoji, label }) => (
                                        <div
                                            key={label}
                                            className="border rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                                        >
                                            <div>
                                                <div className="text-2xl mb-1">{emoji}</div>
                                                <p className="text-sm text-gray-700">{label}</p>
                                            </div>
                                            <span className="text-gray-400">⌄</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Upload Logo */}
                                <label className="block mb-2 text-sm">
                                    Upload Your Logo (Optional)
                                </label>

                                <div className="border-2 rounded-xl p-8 mb-6 bg-gray-50 flex flex-col items-center justify-center">
                                    <ArrowUpTrayIcon className="w-10 h-10 text-gray-400 mb-2" />

                                    <p className="text-sm text-gray-700 text-center">
                                        Click to upload or drag and drop
                                    </p>

                                    <p className="text-xs text-gray-500 text-center">
                                        PNG, JPG up to 10MB
                                    </p>
                                </div>


                                {/* Business Description */}
                                <label className="block mb-2 text-sm">
                                    Describe Your Business
                                </label>

                                <textarea
                                    rows={5}
                                    placeholder="I'm an architect specializing in modern residential design, Generate 365 Instagram posts, reels, and festival creativity. I'm a fitness trainer focused on..."
                                    className="w-full border rounded-xl p-4 text-sm focus:outline-none mb-6"
                                />

                                {/* Generate Button (Disabled Style) */}
                                <button
                                    disabled
                                    className="w-full h-12 bg-gray-300 text-white rounded-xl flex items-center justify-center gap-2 cursor-not-allowed"
                                >
                                    <BoltIcon className="w-5 h-5" />
                                    Generate 365 Days of Content
                                </button>

                            </div>

                            {/* What Happens Next */}
                            <div className="bg-blue-50 rounded-xl p-6 ml-12">
                                <h3 className="mb-4">What happens next?</h3>

                                <ul className="space-y-3">
                                    {[
                                        "AI generates 365 unique posts tailored to your industry",
                                        "All content is auto-branded with your logo, phone, and website",
                                        "Posts are automatically scheduled throughout the year",
                                        "You can edit any post individually without affecting others",
                                    ].map((text) => (
                                        <li key={text} className="flex items-start gap-3">
                                            <span className="text-blue-600 mt-1">✔</span>
                                            <p className="text-sm text-gray-700">{text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    )}
                    {activeTab === "Content Calendar" && (
                        <div className="p-6 bg-gray-50">

                            {/* Page Header */}
                            <div className="flex justify-between items-center mb-6">
                                {/* Left */}
                                <div>
                                    <h2 className="text-xl">Content Calendar</h2>
                                    <p className="text-gray-500">
                                        Manage your auto-scheduled content
                                    </p>
                                </div>

                                {/* Right Controls */}
                                <div className="flex items-center gap-3">
                                    {/* View Tabs */}
                                    <div className="flex border rounded-lg overflow-hidden">
                                        {["14-day", "monthly", "365-day"].map((tab) => (
                                            <button
                                                key={tab}
                                                className={`px-4 py-2 text-sm ${tab === "14-day"
                                                    ? "bg-black text-white"
                                                    : "bg-white text-gray-600"
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Schedule Button */}
                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                                        <CalendarIcon className="w-5 h-5" />
                                        Schedule New
                                    </button>
                                </div>
                            </div>

                            {/* Calendar Card */}
                            <div className="bg-white shadow p-6">

                                {/* Month Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h3>December 2024</h3>

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <button>
                                            ‹
                                        </button>
                                        <span>Today</span>
                                        <button>
                                            ›
                                        </button>
                                    </div>
                                </div>
                                {/* Calendar Grid */}
                                <div className="grid grid-cols-4 gap-4">

                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                        >

                                            {/* Date */}
                                            <p className="text-sm text-gray-600 mb-1">
                                                Sunday - {28 + i}
                                            </p>

                                            {/* Time + Platforms */}
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-700">
                                                    08:00 PM
                                                </span>

                                                <div className="flex gap-2">
                                                    <FaFacebook className="text-blue-600 w-4 h-4" />
                                                    <FaInstagram className="text-pink-600 w-4 h-4" />
                                                    <FaTwitter className="text-sky-500 w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-gray-600 mb-3">
                                                Guess the next hotspot in town 😊 We can't wait to see you at the...
                                            </p>

                                            {/* Video Placeholder */}
                                            <div className="relative h-28 mb-3 overflow-hidden rounded-lg">
                                                {/* Image */}
                                                <img
                                                    src="/images/coffee.jpg"
                                                    alt="Post preview"
                                                    className="w-full h-full object-cover"
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                    <span className="w-12 h-12 flex items-center justify-center bg-white/50 rounded-full">
                                                        <span className="text-white text-xl">▶</span>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex justify-center gap-6 text-gray-400">
                                                <PencilIcon className="w-5 h-5 cursor-pointer hover:text-black transition" />
                                                <EyeIcon className="w-5 h-5 cursor-pointer hover:text-black transition" />
                                                <TrashIcon className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}
