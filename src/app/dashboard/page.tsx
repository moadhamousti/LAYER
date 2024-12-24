import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Dashboard() {
    return (
        <div className="">
            <p>Dashboard</p>

            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
