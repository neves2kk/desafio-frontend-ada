"use client"

import { DocsContext } from "@/contexts/docsContext";
import { use, useContext, useEffect, useState } from "react";

export default function MarkdownPage({params} : {params: Promise<{ markdownid: string }> }) {
    const  {markdownid}  = use(params);
    const {findDocById} = useContext(DocsContext);
    const [doc, setDoc] = useState<Docs | null>(null);

    useEffect(() => {
        const fetchedDoc = findDocById(markdownid);
        setDoc(fetchedDoc || null);
    }, [markdownid, findDocById]);

    return (
        <div>
            
        </div>
    )
}