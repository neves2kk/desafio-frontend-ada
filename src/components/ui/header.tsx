"use client"

import { DocsContext } from "@/contexts/docsContext";
import { FileText, Moon, Plus } from "@deemlol/next-icons";
import { useContext } from "react";
import { CustomButton } from "./customButton";
import { usePopUp } from "@/hooks/usePopUp";
import { CardCreateDoc } from "../cards/cardCreateDoc";
import { useTheme } from "next-themes";





export function Header(){

    const {docs} = useContext(DocsContext)
    const {popUpOpen, setPopUpOpen} = usePopUp();
    const {theme,setTheme} = useTheme();
        
    console.log(theme)

    return(
        docs.length > 0 ? (
            <header className="flex items-center gap-3 px-30 py-6 shadow-lg justify-between">
                <div className="flex items-center gap-3">
                    <FileText size={40} color="#3B82F6" />
                    <h1 className={`text-3xl text-(--foreground) font-medium pt-1 `}>AdaMarkdown</h1>  
                </div>
                <div className="flex items-center gap-4">
                    <CustomButton icon={<Plus size={20}/>} text="Novo documento"  role="create" onClick={() => setPopUpOpen(true)} />
                    <Moon onClick={() => setTheme(theme === "dark" ? "light" : "dark")} cursor="pointer" size={24}  className="text-blue-500 hover:fill-blue-500"/>
                </div>
                {popUpOpen && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-10" />
                        <div className="fixed inset-0 flex justify-center items-center z-20">
                            <CardCreateDoc handleCancel={() => setPopUpOpen(false)}  handleCreate={() => setPopUpOpen(false)}/>
                        </div>
                    </>
                )}
            
            </header>
        ) : (
            <header className="flex  px-30 py-6 shadow-lg justify-between">
                <div className="flex gap-3 items-center">
                    <FileText size={40} color="#3B82F6" />
                    <h1 className="text-3xl font-medium">AdaMardown</h1>
                </div>
                <div className="flex items-center">
                   <Moon onClick={() => setTheme(theme === "dark" ? "light" : "dark")} cursor="pointer" size={24}  className="hover:fill-blue-500"/>

                </div>
            </header>
        )

        
    )
}