"use client"

import { DocsContext } from "@/contexts/docsContext";
import { FileText, Plus } from "@deemlol/next-icons";
import { useContext } from "react";
import { CustomButton } from "./customButton";
import { usePopUp } from "@/hooks/usePopUp";
import { CardCreateDoc } from "./cardCreateDoc";


export function Header(){

    const {docs} = useContext(DocsContext)
    const {popUpOpen, setPopUpOpen} = usePopUp();


    return(
        docs.length > 0 ? (
            <header className="flex items-center gap-3 px-30 py-6 shadow-lg justify-between">
                <div className="flex items-center gap-3">
                    <FileText size={40} color="#3B82F6" />
                    <h1 className="text-3xl font-medium pt-1">AdaMarkdown</h1>
                </div>
                <CustomButton icon={<Plus size={20}/>} text="Novo documento"  role="create" onClick={() => setPopUpOpen(true)} />
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
            <header className="flex items-center gap-3 px-30 py-6 shadow-lg">
                <FileText size={40} color="#3B82F6" />
                <h1 className="text-3xl font-medium">AdaMardown</h1>
            </header>
        )

        
    )
}