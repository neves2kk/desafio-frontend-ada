"use client"

import { createContext, useEffect, useState } from "react";

export const DocsContext = createContext({
    docs: [] as Docs[],
    addDoc: (doc: Docs) => {},
    deleteDoc: (id: string) => {},
    updateDoc: (id: string, updatedContent: Partial<Docs>) => {}
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
            updatedAt: new Date()
        }

        setDocs((prevDocs) => {
            const updatedDocs = [...prevDocs, newDoc];
            localStorage.setItem("docs", JSON.stringify(updatedDocs));
            return updatedDocs;
        });
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
    }

    return(
        <DocsContext.Provider value={{addDoc, docs, deleteDoc, updateDoc}}>
            {children}
        </DocsContext.Provider>
    )
}