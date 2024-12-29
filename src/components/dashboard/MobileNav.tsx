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

export default function MobileNav() {
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src={logoImage} alt="logo" width={160} height={28} />
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger >
                            <Image
                                src={HamburgerMenu}
                                alt="menu"
                                className="cursor-pointer"
                                width={32}
                                height={32}
                            />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    Are you absolutely sure?
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
            </nav>
        </header>
    );
}
