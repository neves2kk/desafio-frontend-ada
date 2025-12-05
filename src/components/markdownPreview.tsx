"use client"
import Markdown from "react-markdown";
import '../app/markdown.css'

interface MarkDownPreviewProps{
    markdownContent?: string ;
}

export function MarkDownPreview({markdownContent}: MarkDownPreviewProps){

    return(
        <div className="markdown-body text-2xl px-6 py-6 w-1/2 h-217 flex-wrap overflow-auto" >
            <Markdown>{markdownContent}</Markdown>
        </div>
    )
}