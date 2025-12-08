"use client"

import { MarkDownEditor } from "@/components/markdownEditor";
import { MarkdownHeader } from "@/components/markdownHeader";
import { MarkDownPreview } from "@/components/markdownPreview";
import SuccessToast from "@/components/toasts/SucessToast";
import { Toolbar } from "@/components/toolbar";
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
        <div>
            <MarkdownHeader 
             docTitle={doc?.title || ""}
             handleSave={() => {
                handleSave(markdownid, markdownContent)
             }}
             handleBack={()=>{router.push("/")}} 
             />
             <div className="flex overflow-y-hidden">
                <div className="w-1/2">

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