import React from "react";

interface MarkDownEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  markdownContent?: string;
  textareaRef?: React.Ref<HTMLTextAreaElement>; // nossa ref “normal”
}

export function MarkDownEditor({ markdownContent, textareaRef,...props}: MarkDownEditorProps) {
  return (
    <textarea
      className="w-full h-166 min-h-155 resize-none outline-none border border-gray-300 px-6 py-6 text-2xl"
      placeholder="Digite seu contéudo..."
      value={markdownContent}
      ref={textareaRef}         
      {...props}
    />
  );
}
