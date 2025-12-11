"use client"

import { ThemeProvider } from "next-themes";


export default function MarkdownLayout({children}: Readonly<{
  children: React.ReactNode;}>) {
    return (
        <>
                {children}

        </>
    )
}
