"use client"

import { Header } from "@/components/ui/header";
import { ThemeProvider } from "next-themes";

export default function HomeLayout({children}: Readonly<{
  children: React.ReactNode;}>) {
    return (
        <>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
            <Header/>
            {children}
        </ThemeProvider>
        </>
    )
}
