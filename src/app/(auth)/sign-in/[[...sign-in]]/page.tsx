import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

export default function SignInPage() {
    return <SignIn
    appearance={{
        baseTheme: dark,
        variables: {
            colorPrimary: "#A3E635",
        },
        elements: {
            rootBox: {
                branded: false, // Hides branding
            },
            headerTitle: {
                color: "#fff", // Custom header title color
            },
        },
    }}
/>
}
