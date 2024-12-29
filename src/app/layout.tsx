import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Adjusted the path for globals.css
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Picova",
    description: "Ai SaaS Image Generator ",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: "#A3E635",
                },
            }}
        >
            <html lang="en">
                <body
                    className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
                >
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        {children}
                    </NextThemesProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
