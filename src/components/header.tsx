import { FileText } from "@deemlol/next-icons"
import { Saira_Stencil_One } from "next/font/google"


export function Header(){
    return(
        <header className="flex items-center gap-3 px-30 py-6 shadow-lg">
            <FileText size={40} color="#3B82F6" />
            <h1 className="text-3xl font-medium">AdaMardown</h1>
        </header>
    )
}