import MobileNav from "@/components/dashboard/MobileNav";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="root">
            <Sidebar/>
            <MobileNav/>
            <div className="root-container">
                <div className="wrapper">{children}</div>
            </div>
        </main>
    );
}
