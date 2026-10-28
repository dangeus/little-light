import React from "react";
import Sidebar from "@/components/Sidebar";

export default function AppLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex gap-6 justify-center">
            <Sidebar/>
            <main>{children}</main>
        </div>
    )
}