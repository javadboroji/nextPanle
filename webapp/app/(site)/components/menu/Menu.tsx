"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaShoppingBag } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import useAddToBasket from "@/app/store/basket";

type NavItem = {
    label: string;
    href?: string;
    children?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
    { label: "خانه ", href: "/" },
    { label: "محصولات ", href: "/products" },
    { label: "درباره ما", href: "/about" },
    {
        label: "خدمات",
        children: [

        ],
    },
    { label: "بلاگ", href: "/blog" },
    { label: "تماس باما", href: "/contact" },
];

function useActivePath() {
    const pathname = usePathname();

    return (href?: string) => {
        if (!href) return false;
        // exact or prefix match for parent items
        return pathname === href || pathname?.startsWith(href + "/");
    };
}

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const isActive = useActivePath();
    const { products } = useAddToBasket();


    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                N
                            </div>
                            <span className="font-semibold text-lg">MyApp</span>
                        </Link>
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {NAV_ITEMS.map((item, idx) => (
                            <div key={idx} className="relative">
                                {item.children ? (
                                    <div className="group">
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            className={`inline-flex items-center gap-2 text-sm font-medium py-2 px-1 focus:outline-none ${item.href && isActive(item.href) ? "text-indigo-600" : "text-gray-700"
                                                }`}
                                        >
                                            {item.label}
                                            <ChevronDown size={16} className="opacity-70" />
                                        </button>

                                        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                                            {item.children.map((child, cidx) => (
                                                <Link
                                                    key={cidx}
                                                    href={child.href || "#"}
                                                    className={`block px-4 py-2 text-sm hover:bg-gray-50 ${isActive(child.href) ? "text-indigo-600 font-semibold" : "text-gray-700"
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        className={`text-sm font-medium py-2 px-1 hover:text-indigo-600 ${isActive(item.href) ? "text-indigo-600" : "text-gray-700"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions & mobile toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex md:items-center md:gap-3">
                            <button className="relative">
                                <span className="absolute left-1 -top-1 bg-red-50 rounded-full w-4 h-4 flex justify-center items-center text-red-400 text-xs"> {products.length}</span>
                                <Link href={"/cart"}><SlBasket size={24} className="mx-2" /></Link>
                            </button>
                            <Link href="/login" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">
                                ورود
                            </Link>
                            <Link
                                href="/signup"
                                className="text-sm px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                ثبت نام
                            </Link>
                        </div>

                        <button
                            className="md:hidden p-2 rounded-md focus:outline-none"
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((s) => !s)}
                        >
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {NAV_ITEMS.map((item, idx) => (
                        <div key={idx}>
                            {item.children ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left ${item.href && isActive(item.href) ? "text-indigo-600" : "text-gray-700"
                                            }`}
                                        aria-expanded={openDropdown === idx}
                                    >
                                        <span className="font-medium">{item.label}</span>
                                        <ChevronDown size={16} className={`transform ${openDropdown === idx ? "-rotate-180" : "rotate-0"} transition-transform`} />
                                    </button>

                                    {openDropdown === idx && (
                                        <div className="mt-1 ml-2 border-l pl-3">
                                            {item.children.map((child, cidx) => (
                                                <Link
                                                    key={cidx}
                                                    href={child.href || "#"}
                                                    className={`block py-2 text-sm ${isActive(child.href) ? "text-indigo-600 font-semibold" : "text-gray-700"}`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className={`block px-3 py-2 rounded-md text-sm ${isActive(item.href) ? "text-indigo-600 font-semibold" : "text-gray-700"}`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}

                    <div className="border-t pt-3">
                        <Link href="/login" className="block px-3 py-2 text-sm">
                            Sign in
                        </Link>
                        <Link href="/signup" className="block px-3 py-2 text-sm font-medium">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
