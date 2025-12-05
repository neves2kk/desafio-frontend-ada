"use client"

import { MarkDownEditor } from "@/components/markdownEditor";
import { MarkdownHeader } from "@/components/markdownHeader";
import { MarkDownPreview } from "@/components/markdownPreview";
import SuccessToast from "@/components/toasts/SucessToast";
import { DocsContext } from "@/contexts/docsContext";
import { useRouter } from "next/navigation";
import { use, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MarkdownPage({params} : {params: Promise<{ markdownid: string }> }) {
    const  {markdownid}  = use(params);
    const {findDocById, updateMarkdownContent } = useContext(DocsContext);
    const [doc, setDoc] = useState<Docs | null>(null);
    const [markdownContent, setMarkdownContent] = useState<Docs["markdownContent"]>("");
    const router = useRouter();

    useEffect(() => {
        const fetchedDoc = findDocById(markdownid);
        setDoc(fetchedDoc || null);
        setMarkdownContent(fetchedDoc?.markdownContent || "");
    }, [markdownid, findDocById]);

    const handleSave = (id: string, content?: string) => {
        updateMarkdownContent(id, content || "");
        toast(<SuccessToast title="Salvo!" description="Conteúdo do Markdown salvo com sucesso." />)
    }
    

    return (
        <div>
            <MarkdownHeader 
             docTitle={doc?.title || ""}
             handleSave={() => {
                handleSave(markdownid, markdownContent)
             }}
             handleBack={()=>{router.push("/")}} 
             />
             <div className="flex">
                <MarkDownEditor 
                markdownContent={markdownContent} 
                onChange={(e)=> setMarkdownContent(e.target.value)} 
                />
                <MarkDownPreview markdownContent={markdownContent}></MarkDownPreview>
             </div>
             
        </div>
    )
}