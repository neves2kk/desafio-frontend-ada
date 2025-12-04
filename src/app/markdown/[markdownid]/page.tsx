"use client"

import { BackButton } from "@/components/backButton";
import { MarkdownHeader } from "@/components/markdownHeader";
import { DocsContext } from "@/contexts/docsContext";
import { useRouter } from "next/navigation";
import { use, useContext, useEffect, useState } from "react";

export default function MarkdownPage({params} : {params: Promise<{ markdownid: string }> }) {
    const  {markdownid}  = use(params);
    const {findDocById} = useContext(DocsContext);
    const [doc, setDoc] = useState<Docs | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchedDoc = findDocById(markdownid);
        setDoc(fetchedDoc || null);
    }, [markdownid, findDocById]);

    return (
        <div>
            <MarkdownHeader docTitle={doc?.title || ""} handleSave={() => {}} handleBack={()=>{router.push("/")}} />
        </div>
    )
}