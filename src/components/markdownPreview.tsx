"use client"
import Markdown from "react-markdown";
import '../app/markdown.css'

interface MarkDownPreviewProps{
    markdownContent?: string ;
}

export function MarkDownPreview({markdownContent}: MarkDownPreviewProps){

    return(
        <div className="markdown-body text-2xl h-190 px-6 py-6 w-1/2  flex-wrap overflow-y-auto border border-gray-300 " >
            <Markdown>{markdownContent}</Markdown>
        </div>
    )
}