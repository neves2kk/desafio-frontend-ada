interface MarkDownEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    markdownContent?: string;
}

export function MarkDownEditor({markdownContent, ...props}: MarkDownEditorProps){
    return(
        <textarea 
        className="w-1/2 h-217 resize-none outline-none border border-gray-300 px-6 py-6 text-2xl" 
        placeholder="Digite seu contéudo..."
        value={markdownContent} 
        {...props}
        />
    )
}