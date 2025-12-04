"use client"

import { Header } from "@/components/header";

export default function HomeLayout({children}: Readonly<{
  children: React.ReactNode;}>) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
