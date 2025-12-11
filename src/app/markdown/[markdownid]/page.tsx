"use client"

import { MarkDownEditor } from "@/components/markdown/markdownEditor";
import { MarkdownHeader } from "@/components/markdown/markdownHeader";
import { MarkDownPreview } from "@/components/markdown/markdownPreview";
import SuccessToast from "@/components/toasts/SucessToast";
import { Toolbar } from "@/components/ui/toolbar";
import { DocsContext } from "@/contexts/docsContext";
import { useMarkdownFunctions } from "@/hooks/useMarkdownFunctions";
import { useRouter } from "next/navigation";
import { use, useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function MarkdownPage({params} : {params: Promise<{ markdownid: string }> }) {
    const  {markdownid}  = use(params);
    const {findDocById, updateMarkdownContent } = useContext(DocsContext);
    const [doc, setDoc] = useState<Docs | null>(null);
    const [markdownContent, setMarkdownContent] = useState<string>("");
    const router = useRouter();
    const textareaRef =  useRef<HTMLTextAreaElement>(null);
    const { 
        handleTitleH1, 
        handleTitleH2, 
        handleTitleH3, 
        handleTitleH4, 
        handleBoldText, 
        handleItalicText,
        handleCodeText,
        handleList,
    } = useMarkdownFunctions(textareaRef, setMarkdownContent);

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
        <div className="h-full">
            <MarkdownHeader 
             textButton={markdownContent === (doc?.markdownContent || "") ? "Salvo" : "Salvar"}
             docTitle={doc?.title || ""}
             handleSave={() => {
                handleSave(markdownid, markdownContent)
             }}
             handleBack={()=>{router.push("/")}} 
             />
             <div className="flex overflow-y-hidden h-[calc(100vh-94.67px)]"> 
                <div className="w-1/2 flex flex-col border-r border-gray-300">

                <Toolbar 
                handleH1={handleTitleH1}
                handleH2={handleTitleH2} 
                handleH3={handleTitleH3} 
                handleH4={handleTitleH4} 
                handleBold={handleBoldText} 
                handleItalic={handleItalicText}
                handleCode={handleCodeText}
                handleList={handleList}
                />

                <MarkDownEditor 
                textareaRef={textareaRef}
                markdownContent={markdownContent} 
                onChange={(e)=> setMarkdownContent(e.target.value)} 
                />
                
                </div>
                <MarkDownPreview markdownContent={markdownContent}></MarkDownPreview>
             </div>
             
        </div>
    )
}