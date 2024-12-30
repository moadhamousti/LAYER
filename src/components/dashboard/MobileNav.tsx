"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.svg";
import { SignedIn, UserButton } from "@clerk/nextjs";
import HamburgerMenu from "../../../public/assets/icons/menu.svg";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../constants";

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src={logoImage} alt="logo" width={160} height={28} />
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src={HamburgerMenu}
                                alt="menu"
                                className="cursor-pointer"
                                width={32}
                                height={32}
                            />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-80">
                            <>
                                <Image
                                    src="/assets/images/logo-text.svg"
                                    alt="logo"
                                    width={152}
                                    height={23}
                                />

                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive =
                                            link.route === pathname;

                                        return (
                                            <li
                                                key={link.route}
                                                className={`${
                                                    isActive && "gradient-text"
                                                } p-18 flex whitespace-nowrap text-white`}
                                            >
                                                <Link
                                                    className="sidebar-link cursor-pointer"
                                                    href={link.route}
                                                >
                                                    <Image
                                                        src={link.icon}
                                                        alt="logo"
                                                        width={24}
                                                        height={24}
                                                        
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
            </nav>
        </header>
    );
}
