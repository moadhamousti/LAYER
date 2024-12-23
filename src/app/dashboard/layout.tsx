import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="">
            {children}
        </main>
    );
}
