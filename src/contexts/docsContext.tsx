"use client"

import ErrorToast from "@/components/toasts/ErrorToast.";
import SuccessToast from "@/components/toasts/SucessToast";
import { defaultMarkdownText } from "@/utils/markdownTextDefault";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DocsContext = createContext({
    docs: [] as Docs[],
    addDoc: (doc: Docs) => {},
    deleteDoc: (id: string) => {},
    updateDoc: (id: string, updatedContent: Partial<Docs>) => {},
    findDocById: (id: string): Docs | undefined => undefined,
    findMarkDownById: (id: string): string | undefined => undefined,
    updateMarkdownContent: (id: string, markdownContent: string) => {}
});

interface DocsContextProvider{
    children: React.ReactNode;
}

export function DocsContextProvider({ children }: DocsContextProvider) {

    const [docs, setDocs] = useState<Docs[]>([])

    useEffect(()=> {
        if (typeof window !== 'undefined') {
            const storedDocs = localStorage.getItem("docs");
            if (storedDocs) {
                try {
                    setDocs(JSON.parse(storedDocs));
                } catch (e) {
                    localStorage.removeItem("docs");
                }
            }
        }
    },[])

    const addDoc = (doc: Docs) => {

        const newDoc ={
            id: crypto.randomUUID(),
            title: doc.title,
            content: doc.content,
            createdAt: new Date(),
            updatedAt: new Date(),
            markdownContent: defaultMarkdownText
        }

        const existingDoc = docs.find((doc) => doc.title === newDoc.title);

        if (existingDoc) {
            toast(<ErrorToast title="Erro!" description="Já existe um documento com esse título." />);
            return;
        }else{
            setDocs((prevDocs) => {
            const updatedDocs = [...prevDocs, newDoc];
            localStorage.setItem("docs", JSON.stringify(updatedDocs));
            return updatedDocs;
            
        });

        toast(<SuccessToast title="Sucesso!" description="Documento criado com sucesso." />);
        }

    }

    const deleteDoc = (id: string) =>{
        setDocs((prevDocs) => {
            const updatedDocs = prevDocs.filter((doc) => doc.id !== id);
            localStorage.setItem("docs", JSON.stringify(updatedDocs));
            return updatedDocs;
        });
    }

    const updateDoc = (id: string, updatedContent: Partial<Docs>) => {
        setDocs((prevDocs) => {
            const updatedDocs = prevDocs.map((doc) =>
                doc.id === id ? { ...doc, ...updatedContent, updatedAt: new Date() } : doc
            );
            localStorage.setItem("docs", JSON.stringify(updatedDocs));
            
            return updatedDocs;
        },);
        toast(<SuccessToast title="Atualizado!" description="Documento atualizado com sucesso." />);
    }

    const findDocById = (id: string) => {
        return docs.find((doc) => doc.id === id)
    }

    const findMarkDownById = (id: string) => {
        const doc = docs.find((doc) => doc.id === id);
        return doc ? doc.markdownContent : undefined;
    }

    const updateMarkdownContent = (id: string, markdownContent: string) => {
        setDocs((prevDocs) => {
            const updatedDocs = prevDocs.map((doc) =>
                doc.id === id ? { ...doc, markdownContent, updatedAt: new Date() } : doc
            );
            localStorage.setItem("docs", JSON.stringify(updatedDocs));
            return updatedDocs;
        });
    }

    return(
        <DocsContext.Provider value={{addDoc, docs, deleteDoc, updateDoc, findDocById, findMarkDownById, updateMarkdownContent}}>
            {children}
        </DocsContext.Provider>
    )
}