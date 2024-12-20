"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="py-4 lg:py-8 sticky top-0 z-50">
            <div className="container max-w-5xl">
                <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3 px-4 items-center md:pr-2 p-2 ">
                        <div className="">
                            <Image
                                src={logoImage}
                                alt="logo"
                                className="h-9 w-auto md:h-auto"
                            />
                        </div>
                        <div className="justify-center items-center hidden lg:flex">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <a href={link.href} key={link.label}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu md:hidden"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <line
                                    x1="3"
                                    y1="6"
                                    x2="21"
                                    y2="6"
                                    className={twMerge(
                                        "origin-left transition",
                                        isOpen && "rotate-45 -translate-y-1"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    className={twMerge(
                                        "transition",
                                        isOpen && "opacity-0"
                                    )}
                                ></line>
                                <line
                                    x1="3"
                                    y1="18"
                                    x2="21"
                                    y2="18"
                                    className={twMerge(
                                        "origin-left transition",
                                        isOpen && "-rotate-45 translate-y-1"
                                    )}
                                ></line>
                            </svg>

                            <Button
                                variant="secondary"
                                className="hidden md:inline-flex items-center"
                            >
                                Log In
                            </Button>
                            <Button
                                variant="primary"
                                className="hidden md:inline-flex items-center"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="flex flex-col items-center gap-4 py-4">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className=""
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="secondary">Log In</Button>
                            <Button variant="primary">Sign Up</Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
