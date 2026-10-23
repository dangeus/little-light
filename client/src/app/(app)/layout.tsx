import React from "react";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex gap-6 max-w-340 mx-auto p-6 min-h-screen">
            <Sidebar/>
            <main className="flex-1 min-w-0">{children}</main>
        </div>
    )
}