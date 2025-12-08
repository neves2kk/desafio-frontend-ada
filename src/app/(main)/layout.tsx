"use client"

import { Header } from "@/components/ui/header";

export default function HomeLayout({children}: Readonly<{
  children: React.ReactNode;}>) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
