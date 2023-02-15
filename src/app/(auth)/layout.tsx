import GlassPane from "../../components/GlassPane";
import {ReactNode} from "react";
import '../../styles/global.css'

export default function AuthRootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head/>
        <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-ful flex items-center justify-center">
            {children}
        </GlassPane>
        </body>
        </html>
    )
}
