"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/images/logo.svg";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "../../../constants";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image src={logoImage} alt="logo" width={180} height={28} />
                </Link>

                <nav className="sidebar-nav">
                    <SignedIn>
                        {/* First List: First 6 Elements */}
                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(0, 5).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive
                                                ? "bg-lime-gradient text-white bg-lime-500"
                                                : "text-white"
                                        }`}
                                    >
                                        <Link
                                            className="sidebar-link"
                                            href={link.route}
                                        >
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`transition-all group-hover:brightness-200 ${
                                                    isActive
                                                        ? "brightness-200"
                                                        : ""
                                                }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Second List: Remaining Elements */}
                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(5).map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li
                                        key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive
                                                ? "bg-lime-gradient text-white bg-lime-500"
                                                : "text-white"
                                        }`}
                                    >
                                        <Link
                                            className="sidebar-link"
                                            href={link.route}
                                        >
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`transition-all group-hover:brightness-200 ${
                                                    isActive
                                                        ? "brightness-200"
                                                        : ""
                                                }`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                            {/* UserButton */}
                            <li className="flex-center p-4 cursor-pointer gap-2">
                                <UserButton afterSignOutUrl="/" showName />
                            </li>
                        </ul>
                    </SignedIn>
                </nav>
            </div>
        </aside>
    );
}
