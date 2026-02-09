"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, StarIcon } from "lucide-react";
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
    ArrowUpTrayIcon, PencilIcon, EyeIcon, TrashIcon, PlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon,
    GlobeAltIcon,
    CheckIcon,
    LockClosedIcon,
    UserIcon,
    EnvelopeIcon, LinkIcon,

} from "@heroicons/react/24/outline";
import {
    FaYoutube,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaCheckCircle,
    FaCheck,
    FaInstagram,
    FaFacebookF,
    FaSyncAlt,
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
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
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

                                            <div className="grid grid-cols-3 text-left">
                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-start justify-start gap-2 mb-1">
                                                        <ArrowTrendingUpIcon className="w-5 h-5 text-gray-600" />
                                                        <p className="text-gray-500">Engagement Rate</p>
                                                    </div>

                                                    <p className="">+24.5%</p>
                                                    <p className="text-green-500 text-sm">12% from last week</p>
                                                </div>

                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-start justify-start gap-2 mb-1">
                                                        <ChartBarIcon className="w-5 h-5 text-gray-600" />
                                                        <p className="text-gray-500">Total Reach</p>
                                                    </div>

                                                    <p className="">45.2K</p>
                                                    <p className="text-green-500 text-sm">8% from last week</p>
                                                </div>

                                                <div>
                                                    {/* Icon + Title */}
                                                    <div className="flex items-start justify-start gap-2 mb-1">
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
                                                <div key={i} className="border rounded-lg p-3 mb-2 flex flex-col gap-1">

                                                    {/* Title with image */}
                                                    <div className="flex items-center gap-2">
                                                        <img
                                                            src="/images/holiday1.jpg" // replace with your image path
                                                            alt="Holiday"
                                                            className="w-5 h-5"
                                                        />
                                                        <p className="font-medium">Holiday Special</p>
                                                    </div>

                                                    {/* Time with image */}
                                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                                        <p>Tomorrow 10:00 AM</p>
                                                    </div>

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
                                                Guess the next hotspot in town 😊 We can't wait to see you ...
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
                    {activeTab === "Image & Reel Library" && (
                        <div className="p-6 bg-gray-50">

                            {/* Title + Action */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-xl">Image & Reel Library</h2>
                                    <p className="text-gray-500">
                                        Browse and manage your content templates
                                    </p>
                                </div>

                                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl">
                                    <PlusIcon className="w-4 h-4" />
                                    Upload Custom
                                </button>
                            </div>

                            {/* Library Card */}
                            <div className="bg-white rounded-xl shadow-lg p-5">

                                {/* Top Controls */}
                                <div className="flex justify-between items-center mb-6">

                                    {/* Tabs */}
                                    <div className="flex gap-6">
                                        {["Images", "Reels", "Festivals & Occasions"].map((tab, i) => (
                                            <span
                                                key={tab}
                                                className={`cursor-pointer pb-1 ${i === 0
                                                    ? "text-black border-b-2 border-black"
                                                    : "text-gray-400"
                                                    }`}
                                            >
                                                {tab}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Search + Filter */}
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                placeholder="Search library..."
                                                className="pl-9 pr-3 py-2 border rounded-lg text-sm"
                                            />
                                        </div>

                                        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white">
                                            <FunnelIcon className="w-4 h-4 text-black" />
                                            Filters
                                        </button>
                                    </div>
                                </div>

                                {/* Cards Grid */}
                                <div className="grid grid-cols-6 gap-4">
                                    {Array.from({ length: 24 }).map((_, i) => {
                                        const badges = ["Motivation", "Product", "Tutorial", "Festival"];
                                        const badge = badges[i % badges.length];

                                        return (
                                            <div
                                                key={i}
                                                className="
                    relative
                    h-64
                    rounded-xl
                    overflow-hidden
                    shadow-xl
                    bg-gray-200
                "
                                            >
                                                {/* Image */}
                                                <img
                                                    src="images/motivation.jpg"
                                                    alt="Post preview"
                                                    className="w-full h-full object-cover"
                                                />

                                                {/* Overlay (optional – gives better contrast) */}
                                                <div className="absolute inset-0 bg-black/10" />

                                                {/* Badge */}
                                                <span
                                                    className="
                        absolute
                        top-3
                        left-3
                        bg-white
                        text-gray-600
                        text-xs
                        px-2
                        py-1
                        rounded-md
                        shadow
                    "
                                                >
                                                    {badge}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    )}

                    {activeTab === "Brand Settings" && (
                        <div className="p-6 bg-gray-50">

                            {/* Page Title */}
                            <div className="mb-6">
                                <h2 className="text-xl">Brand Overlay Settings</h2>
                                <p className="text-gray-500">
                                    Customize how your logo and contact info appear on posts
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">

                                {/* LEFT SIDE */}
                                <div className="space-y-6">

                                    {/* Live Preview Card */}
                                    <div className="bg-white p-4 shadow-xl">

                                        <p className="text-sm text-gray-600 mb-3">Live Preview</p>

                                        {/* Image Preview */}
                                        <div className="relative h-96 bg-gray-200 overflow-hidden rounded-xl">

                                            {/* Image */}
                                            <img
                                                src="/images/sport.jpg" // replace with your image path
                                                alt="Template Preview"
                                                className="w-full h-full object-cover"
                                            />

                                            {/* AI Badge */}
                                            <div className="absolute top-3 left-3 bg-white p-2 rounded-md shadow flex items-center gap-1">
                                                <Sparkles className="w-4 h-4 text-purple-600" />
                                            </div>

                                            {/* Contact Info */}
                                            <div className="absolute bottom-3 right-3 bg-white px-3 py-2 text-xs text-gray-600 shadow rounded-md">
                                                <p>+1 (555) 123-4567</p>
                                                <p>www.yourcompany.com</p>
                                            </div>
                                        </div>
                                        {/* Info Text */}
                                        <p className="mt-4 text-sm text-violet-600 bg-gray-100 border border-gray-300 p-3">
                                            This overlay will be automatically applied to all generated posts
                                        </p>
                                    </div>

                                    {/* States */}
                                    <div>
                                        <h3 className="mb-2">States</h3>
                                        <div className="border p-4 text-sm text-gray-700 whitespace-pre-line">
                                            Fresh brews. Cozy vibes. Good food, great conversations, and your daily
                                            dose of happiness ☕️✨ Whether it’s your morning coffee or an evening
                                            catch-up, we’ve got the perfect spot waiting for you. 📍 Visit us today 💛
                                            Sip. Relax. Repeat.
                                            <br />
                                            <span className="text-blue-600">
                                                #CafeVibes #CoffeeLovers #CafeTime #GoodCoffeeGoodMood #LocalCafe
                                                #CoffeeBreak #CafeLife
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="space-y-6">

                                    {/* Logo Card */}
                                    <div className="bg-white p-5 shadow-xl">

                                        <div className="flex items-center gap-2 mb-3">
                                            <ArrowUpTrayIcon className="w-5 h-5" />
                                            <h3>Logo</h3>
                                        </div>

                                        {/* Upload Box */}
                                        <div className="border h-40 flex flex-col items-center justify-center mb-4 bg-gray-50">
                                            <ArrowUpTrayIcon className="w-8 h-8 text-gray-400 mb-2" />
                                            <p className="text-sm">Upload your logo</p>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG or SVG (max 5MB)
                                            </p>
                                        </div>

                                        {/* Logo Position */}
                                        <p className="mb-2">Logo Position</p>
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {["Top Left", "Top Right", "Bottom Left", "Bottom Right"].map(pos => (
                                                <button
                                                    key={pos}
                                                    className="border px-3 py-2 text-sm hover:border-purple-500"
                                                >
                                                    {pos}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Logo Size */}
                                        <p>Logo Size:</p>
                                        <p className="text-sm mb-2">64px</p>
                                        <div className="h-2 bg-gray-200">
                                            <div className="h-2 bg-black-500 w-1/2" />
                                        </div>
                                    </div>

                                    {/* Image Overlay Text */}
                                    <div className="bg-white p-5 shadow-xl">
                                        <h3 className="mb-2">Image Overlay Text</h3>

                                        <textarea
                                            className="w-full border p-3 text-sm mb-4"
                                            rows={4}
                                            placeholder="Fresh brews, Cozy vibes, Good food, great conversations and your daily dose of happiness ☕️✨ Whether it's your morning."
                                        />

                                        <h4 className="mb-2">Contact Information</h4>

                                        <label className="text-sm block mb-1">Phone Number</label>
                                        <input
                                            className="w-full border p-2 text-sm"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    {/* Brand Colors */}
                                    <div className="bg-white p-5 shadow-xl">
                                        <div className="flex items-center gap-2 mb-4">
                                            <SwatchIcon className="w-5 h-5" />
                                            <h3>Brand Colors</h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm block mb-1">Primary Color</label>
                                                <div className="flex gap-2">
                                                    <div className="w-8 h-8 bg-purple-500" />
                                                    <input
                                                        className="border p-2 text-sm flex-1"
                                                        placeholder="#8B5CF6"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-sm block mb-1">Secondary Color</label>
                                                <div className="flex gap-2">
                                                    <div className="w-8 h-8 bg-pink-500" />
                                                    <input
                                                        className="border p-2 text-sm flex-1"
                                                        placeholder="#EC4899"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Social Time */}
                                    <div className="space-y-3">
                                        {[
                                            { icon: FaFacebook, color: "text-blue-600" },
                                            { icon: FaTwitter, color: "text-sky-500" },
                                            { icon: FaLinkedin, color: "text-blue-700" },
                                            { icon: FaYoutube, color: "text-red-600" },
                                            { icon: FaInstagram, color: "text-pink-500" },
                                        ].map(({ icon: Icon, color }, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <Icon className={`w-5 h-5 ${color}`} />

                                                <div className="flex bg-gray-200 rounded overflow-hidden">
                                                    <span className="bg-black text-white px-2">8</span>
                                                    <span className="bg-black text-white px-2">30</span>
                                                    <span className="px-2 text-black">pm</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>


                                    {/* Overlay Settings */}
                                    <div className="bg-white p-5 shadow-xl">
                                        <h3 className="mb-2">Overlay Settings</h3>
                                        <p>Opacity:</p>
                                        <p className="text-sm mb-2">90%</p>
                                        <div className="h-2 bg-gray-200">
                                            <div className="h-2 bg-black w-[90%]" />
                                        </div>
                                    </div>

                                    {/* Save Button */}
                                    <button className="w-full bg-[#000000] text-white py-3">
                                        Save Brand Settings
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "Social Accounts" && (
                        <div className="space-y-6 pl-8 pr-8 pt-3">

                            {/* Title */}
                            <div>
                                <h2 className="text-xl text-gray-900">
                                    Social Accounts
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Connect your social media accounts to enable auto-posting
                                </p>
                            </div>

                            {/* Why Connect Card */}
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                        <FaCheckCircle className="text-white w-5 h-5" />
                                    </div>

                                    <div>
                                        <h4 className=" text-gray-900 mb-2">
                                            Why connect your accounts?
                                        </h4>

                                        <ul className="space-y-2 text-sm text-gray-700">
                                            <li className="flex gap-2 items-start">
                                                <FaCheck className="text-blue-600 mt-1" />
                                                Auto-publish content directly to your platforms
                                            </li>
                                            <li className="flex gap-2 items-start">
                                                <FaCheck className="text-blue-600 mt-1" />
                                                Schedule posts to go live at optimal times
                                            </li>
                                            <li className="flex gap-2 items-start">
                                                <FaCheck className="text-blue-600 mt-1" />
                                                Track performance and engagement metrics
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Instagram Card */}
                            <div className="bg-white rounded-xl border p-5 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mt-2">
                                            <FaInstagram className="text-pink-500 w-6 h-6" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className=" text-gray-900">
                                                    Instagram
                                                </h4>
                                                <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                                    <FaCheckCircle className="w-3 h-3" />
                                                    Connected
                                                </span>
                                            </div>

                                            <p className="text-sm text-gray-600">@yourbusiness</p>
                                            <p className="text-xs text-gray-400">
                                                Last synced: 2 mins ago
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-lg bg-white text-black">

                                            Refresh
                                        </button>
                                        <button className="px-3 py-1.5 text-sm border border-red-500 text-red-500 rounded-lg bg-white">
                                            Disconnect
                                        </button>
                                    </div>
                                </div>

                                <hr />

                                <div className="grid grid-cols-4 text-center">
                                    <div>
                                        <p className="">142</p>
                                        <p className="text-xs text-gray-500">Posts Published</p>
                                    </div>
                                    <div>
                                        <p className="">24.5k</p>
                                        <p className="text-xs text-gray-500">Total Reach</p>
                                    </div>
                                    <div>
                                        <p className="">8.2%</p>
                                        <p className="text-xs text-gray-500">Engagement</p>
                                    </div>
                                    <div>
                                        <p className="">1.2K</p>
                                        <p className="text-xs text-gray-500">New Followers</p>
                                    </div>
                                </div>
                            </div>

                            {/* Facebook Card */}
                            <div className="bg-white rounded-xl border p-5 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                                            <FaFacebookF className="text-blue-600 w-6 h-6" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h4 className=" text-gray-900">
                                                    Facebook
                                                </h4>
                                                <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                                    <FaCheckCircle className="w-3 h-3" />
                                                    Connected
                                                </span>
                                            </div>

                                            <p className="text-sm text-gray-600">
                                                Your Business Page
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Last synced: 5 mins ago
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-lg bg-white text-black">

                                            Refresh
                                        </button>
                                        <button className="px-3 py-1.5 text-sm border border-red-500 text-red-500 rounded-lg bg-white">
                                            Disconnect
                                        </button>
                                    </div>
                                </div>

                                <hr />

                                <div className="grid grid-cols-4 text-center">
                                    <div>
                                        <p className="">142</p>
                                        <p className="text-xs text-gray-500">Posts Published</p>
                                    </div>
                                    <div>
                                        <p className="">24.5k</p>
                                        <p className="text-xs text-gray-500">Total Reach</p>
                                    </div>
                                    <div>
                                        <p className="">8.2%</p>
                                        <p className="text-xs text-gray-500">Engagement</p>
                                    </div>
                                    <div>
                                        <p className="">1.2K</p>
                                        <p className="text-xs text-gray-500">New Followers</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )}
                    {activeTab === "Subscription & Billing" && (
                        <div className="p-10 bg-gray-50">

                            {/* Title */}
                            <div className="text-center mb-10">
                                <h2 className="text-3xl">
                                    Subscription & Billing
                                </h2>
                                <p className="text-gray-500 mt-2">
                                    Manage your plan and payment information
                                </p>
                            </div>

                            {/* Current Plan Card */}
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl mb-12 flex justify-between items-center">

                                {/* Left Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <StarIcon className="w-6 h-6 text-white" />
                                        <h3 className="text-xl font-medium">
                                            Current Plan: Professional
                                        </h3>
                                    </div>

                                    <p className="text-white/80 text-sm">
                                        Your subscription renews on December 15, 2025
                                    </p>

                                    <div className="flex gap-12 mt-4">
                                        <div>
                                            <p className="text-sm text-white/80">
                                                Posts this month
                                            </p>
                                            <p className="text-2xl">
                                                127
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-white/80">
                                                Connected accounts
                                            </p>
                                            <p className="text-2xl">
                                                3
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Button */}
                                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-medium shadow">
                                    Manage Billing
                                </button>
                            </div>

                            {/* Toggle */}
                            <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-2 max-w-xs mx-auto mb-12">
                                <div
                                    className="relative w-36 h-10 bg-white rounded-full shadow-inner cursor-pointer"
                                    onClick={() =>
                                        setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
                                    }
                                >
                                    <div
                                        className={`absolute top-1 left-1 w-16 h-8 bg-white rounded-full shadow transition-transform flex items-center justify-center text-black font-medium text-sm ${billingCycle === "yearly" ? "translate-x-16" : ""
                                            }`}
                                    >
                                        {billingCycle === "monthly" ? "Monthly" : "Yearly"}
                                    </div>
                                </div>

                                <span className="ml-4 px-3 py-1 text-green-700 text-sm font-semibold bg-green-100 rounded-full">
                                    Save 20%
                                </span>
                            </div>

                            {/* Pricing Cards */}
                            <div className="grid md:grid-cols-2 gap-10">

                                {/* Starter Plan */}
                                <div className="bg-white border border-gray-200 rounded-3xl p-10 text-left shadow-sm">

                                    <h3 className="text-2xl mb-1">Starter</h3>
                                    <p className="text-gray-500 mb-6">
                                        For Individual & Freelancer
                                    </p>

                                    <div className="mb-6">
                                        <div className="text-4xl">
                                            ₹899
                                            <span className="text-base text-gray-500">/month</span>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            $11 USD / month
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-8">
                                        <Link
                                            href="/signup"
                                            className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
                                        >
                                            Get Started
                                        </Link>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            "365 AI-generated posts",
                                            "Images, reels & festivals",
                                            "Auto scheduling",
                                            "Basic branding",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-gray-700">
                                                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                                    ✓
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Growth Plan */}
                                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-left shadow-xl">

                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="px-4 py-1 rounded-full bg-yellow-400 text-black text-xs">
                                            Most Popular
                                        </span>
                                    </div>

                                    <h3 className="text-2xl text-white mb-1">
                                        Growth
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        For Small Business
                                    </p>

                                    <div className="mb-6">
                                        <div className="text-4xl text-white">
                                            ₹1,499
                                            <span className="text-base text-white/80">/month</span>
                                        </div>
                                        <div className="text-sm text-white/80">
                                            $18 USD / month
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-8">
                                        <Link
                                            href="/signup"
                                            className="w-full px-8 py-3 rounded-full bg-white text-blue-600 text-center"
                                        >
                                            Get Started
                                        </Link>
                                    </div>

                                    <ul className="space-y-4">
                                        {[
                                            "Unlimited content generation",
                                            "Advanced branding",
                                            "Multi-platform scheduling",
                                            "Priority support",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-white">
                                                <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs">
                                                    ✓
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}
                    {activeTab === "Settings" && (
                        <div className="p-6 bg-gray-50 space-y-8">

                            {/* Page Title */}
                            <div>
                                <h2 className="text-2xl text-black">Account Settings</h2>
                                <p className="text-gray-500">
                                    Manage your profile and connected social accounts
                                </p>
                            </div>

                            {/* Profile Information */}
                            <div className="bg-white rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <UserIcon className="w-5 h-5 text-black" />
                                    <h3 className="text-lg">Profile Information</h3>
                                </div>

                                {/* Profile Photo */}
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-xl">
                                        JD
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 border rounded-lg bg-white text-black">
                                            Change Photo
                                        </button>
                                        <p className="text-xs text-gray-500 mt-1">
                                            JPG, PNG or GIF Max 5MB
                                        </p>
                                    </div>
                                </div>

                                {/* Inputs */}
                                <div className="grid grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <UserIcon className="w-4 h-4" />
                                            <label>Full Name</label>
                                        </div>
                                        <input
                                            placeholder="John Doe"
                                            className="w-full border rounded-lg px-3 py-2"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <EnvelopeIcon className="w-4 h-4" />
                                            <label>Email Address</label>
                                        </div>
                                        <input
                                            placeholder="john@example.com"
                                            className="w-full border rounded-lg px-3 py-2"
                                        />
                                    </div>
                                </div>

                                <button className="bg-black text-white px-6 py-2 rounded-lg">
                                    Save Changes
                                </button>
                            </div>

                            {/* Password & Security */}
                            <div className="bg-white rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <LockClosedIcon className="w-5 h-5" />
                                    <h3 className="text-lg">Password & Security</h3>
                                </div>

                                <div className="mb-4">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full border rounded-lg px-3 py-2 mt-1"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full border rounded-lg px-3 py-2 mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            className="w-full border rounded-lg px-3 py-2 mt-1"
                                        />
                                    </div>
                                </div>

                                <button className="bg-black text-white px-6 py-2 rounded-lg">
                                    Update Password
                                </button>
                            </div>
                            {/* Connected Social Accounts */}
                            <div className="bg-white rounded-xl shadow p-6 space-y-4">

                                <div className="flex items-center gap-2 mb-4">
                                    <GlobeAltIcon className="w-5 h-5 text-black" />
                                    <h3 className="text-lg">Connected Social Accounts</h3>
                                </div>

                                {[
                                    { name: "Instagram", icon: FaInstagram },
                                    { name: "Facebook", icon: FaFacebook },
                                    { name: "LinkedIn", icon: FaLinkedin },
                                    { name: "YouTube", icon: FaYoutube },
                                ].map(({ name, icon: Icon }) => (
                                    <div
                                        key={name}
                                        className="flex justify-between items-center border rounded-lg p-4"
                                    >
                                        {/* Left */}
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-black" />
                                            <div>
                                                <p className="text-black">{name}</p>
                                                <p className="text-sm text-gray-500">@yourcompany</p>
                                            </div>
                                        </div>

                                        {/* Right */}
                                        <div className="flex gap-3">
                                            <span className="flex items-center gap-1 text-green-600">
                                                <CheckIcon className="w-4 h-4" />
                                                Connected
                                            </span>
                                            <button className="border border-red-500 text-red-500 px-3 py-1 rounded-lg">
                                                Disconnect
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* Twitter */}
                                <div className="flex justify-between items-center border rounded-lg p-4">
                                    <div className="flex items-center gap-3">
                                        <FaTwitter className="w-5 h-5 text-black" />
                                        <div>
                                            <p className="text-black">X (Twitter)</p>
                                            <p className="text-sm text-gray-500">@yourcompany</p>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg">
                                        <LinkIcon className="w-4 h-4" />
                                        Connect
                                    </button>
                                </div>

                                {/* Info Box */}
                                <div className="bg-blue-50 text-blue-600 p-4 rounded-lg text-sm">
                                    Connect all your social accounts to enable cross-platform posting and scheduling
                                </div>

                            </div>
                            {/* Notifications */}
                            <div className="bg-white rounded-xl shadow p-6 space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <BellIcon className="w-5 h-5" />
                                    <h3 className="text-lg">Notification Preference</h3>
                                </div>

                                {[
                                    {
                                        title: "Email Notification",
                                        text: "Receive updates via email",
                                        on: true,
                                    },
                                    {
                                        title: "Push Notification",
                                        text: "Get notified in your browser",
                                        on: false,
                                    },
                                    {
                                        title: "Weekly Summary",
                                        text: "Get weekly performance reports",
                                        on: false,
                                    },
                                ].map(({ title, text, on }) => (
                                    <div
                                        key={title}
                                        className="flex justify-between items-center bg-gray-100 rounded-lg p-4"
                                    >
                                        {/* Text */}
                                        <div>
                                            <p className="font-medium">{title}</p>
                                            <p className="text-sm text-gray-500">{text}</p>
                                        </div>

                                        {/* Toggle */}
                                        <div
                                            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-300 ${on ? "bg-blue-500" : "bg-gray-400"
                                                }`}
                                        >
                                            <div
                                                className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${on ? "translate-x-6" : "translate-x-0"
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Danger Zone */}
                            <div className="border border-red-200 rounded-xl p-6 bg-white">
                                <h2 className="text-red-600 mb-2 text-2xl">Danger Zone</h2>

                                {/* Highlighted danger content */}
                                <div className="flex justify-between items-center bg-red-50 p-4 rounded-lg">
                                    <div>
                                        <p className="text-black font-medium">Delete Account</p>
                                        <p className="text-sm text-gray-500">
                                            Permanently delete your account and all data
                                        </p>
                                    </div>

                                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                                        Delete
                                    </button>
                                </div>
                            </div>


                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}
