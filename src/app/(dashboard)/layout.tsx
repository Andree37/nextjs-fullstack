import GlassPane from "../../components/GlassPane";
import {ReactNode} from "react";
import '../../styles/global.css'
import Sidebar from "@/components/Sidebar";

export default function DashboardRootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head/>
        <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="min-h-full w-full h-full flex items-center">
            <Sidebar/>
            {children}
        </GlassPane>
        </body>
        </html>
    )
}
