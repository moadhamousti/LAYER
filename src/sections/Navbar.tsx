// "use client";

// import Image from "next/image";
// import logoImage from "@/assets/images/logo.svg";
// import Button from "@/components/Button";
// import { useState } from "react";
// import { twMerge } from "tailwind-merge";
// import { AnimatePresence, motion } from "framer-motion";

// const navLinks = [
//     { label: "Home", href: "#" },
//     { label: "Features", href: "#features" },
//     { label: "Integrations", href: "#integrations" },
//     { label: "FAQs", href: "#faqs" },
// ];

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <>
//             <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
//                 <div className="container max-w-5xl">
//                     <div className="border border-white/15 md:rounded-full rounded-[27px] bg-neutral-950/70 backdrop-blur">
//                         <div className="grid grid-cols-2 lg:grid-cols-3 px-4 items-center md:pr-2 p-2 ">
//                             <div className="">
//                                 <Image
//                                     src={logoImage}
//                                     alt="logo"
//                                     className="h-9 w-auto md:h-auto sm:h-[50px]"
//                                 />
//                             </div>
//                             <div className="justify-center items-center hidden lg:flex">
//                                 <nav className="flex gap-6 font-medium">
//                                     {navLinks.map((link) => (
//                                         <a href={link.href} key={link.label}>
//                                             {link.label}
//                                         </a>
//                                     ))}
//                                 </nav>
//                             </div>
//                             <div className="flex justify-end gap-4">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="feather feather-menu md:hidden"
//                                     onClick={() => setIsOpen(!isOpen)}
//                                 >
//                                     <line
//                                         x1="3"
//                                         y1="6"
//                                         x2="21"
//                                         y2="6"
//                                         className={twMerge(
//                                             "origin-left transition",
//                                             isOpen && "rotate-45 -translate-y-1"
//                                         )}
//                                     ></line>
//                                     <line
//                                         x1="3"
//                                         y1="12"
//                                         x2="21"
//                                         y2="12"
//                                         className={twMerge(
//                                             "transition",
//                                             isOpen && "opacity-0"
//                                         )}
//                                     ></line>
//                                     <line
//                                         x1="3"
//                                         y1="18"
//                                         x2="21"
//                                         y2="18"
//                                         className={twMerge(
//                                             "origin-left transition",
//                                             isOpen && "-rotate-45 translate-y-1"
//                                         )}
//                                     ></line>
//                                 </svg>

//                                 <Button
//                                     variant="secondary"
//                                     className="hidden md:inline-flex items-center"
//                                 >
//                                     Log In
//                                 </Button>
//                                 <Button
//                                     variant="primary"
//                                     className="hidden md:inline-flex items-center"
//                                 >
//                                     Sign Up
//                                 </Button>
//                             </div>
//                         </div>
//                         <AnimatePresence>
//                             {isOpen && (
//                                 <motion.div
//                                     initial={{ height: 0 }}
//                                     animate={{ height: "auto" }}
//                                     exit={{ height: 0 }}
//                                     className="overflow-hidden"
//                                 >
//                                     <div className="flex flex-col items-center gap-4 py-4">
//                                         {navLinks.map((link) => (
//                                             <a
//                                                 href={link.href}
//                                                 key={link.label}
//                                                 className=""
//                                             >
//                                                 {link.label}
//                                             </a>
//                                         ))}
//                                         <Button variant="secondary">Log In</Button>
//                                         <Button variant="primary" >Sign Up</Button>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 </div>
//             </section>
//             <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

//             </div>
//         </>
//     );
// }





"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import loaderGif from "@/assets/images/loader.gif";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const { isSignedIn, isLoaded } = useUser();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 md:rounded-full rounded-[27px] bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 items-center md:pr-2 p-2">
                            <div className="flex items-center">
                                <Image
                                    src={logoImage}
                                    alt="logo"
                                    className="md:h-auto sm:h-[50px]"
                                    height={9}
                                    width={150}
                                />
                            </div>
                            <div className="justify-center items-center hidden lg:flex">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label} className="hover:text-white transition">
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end mr-4 items-center gap-4">
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
                                    className="feather feather-menu md:hidden cursor-pointer"
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

                                {isLoaded ? (
                                    isSignedIn ? (
                                        <Button
                                            variant="secondary"
                                            className="cursor-pointer hidden md:inline-flex items-center justify-center"
                                        >
                                            <Link href="/dashboard">
                                                Dashboard
                                            </Link>
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                variant="secondary"
                                                className="hidden md:inline-flex items-center justify-center"
                                            >
                                                <Link href="/sign-in">
                                                    Log In
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className="hidden md:inline-flex items-center justify-center"
                                            >
                                                <Link href="/sign-up">
                                                    Sign Up
                                                </Link>
                                            </Button>
                                        </>
                                    )
                                ) : (
                                    <div className="hidden md:flex items-center justify-center mr-11">
                                        <Image
                                            src={loaderGif}
                                            alt="Loading..."
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className="hover:text-white transition"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        {isLoaded ? (
                                            isSignedIn ? (
                                                <Button variant="secondary">
                                                    <Link href="/dashboard">
                                                        Dashboard
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <>
                                                    <Button variant="secondary">
                                                        <Link href="/sign-in">
                                                            Log In
                                                        </Link>
                                                    </Button>
                                                    <Button variant="primary">
                                                        <Link href="/sign-up">
                                                            Sign Up
                                                        </Link>
                                                    </Button>
                                                </>
                                            )
                                        ) : (
                                            <Image
                                                src={loaderGif}
                                                alt="Loading..."
                                                width={24}
                                                height={24}
                                            />
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}