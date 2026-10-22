import React from "react";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen m-6 gap-6">
            <Sidebar/>
            <main className="flex-1">{children}</main>
        </div>
    )
}