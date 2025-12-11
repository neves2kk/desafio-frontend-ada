import { Save } from "@deemlol/next-icons";

interface SaveMarkdownButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
text: string;
}

export function SaveMarkdownButton({text, ...props}: SaveMarkdownButtonProps){
    return(
        <button {...props} className="border-2 border-gray-300 text-(--foreground) rounded-2xl flex items-center px-5 py-3
             cursor-pointer gap-3 hover:text-blue-500 hover:border-blue-500 transition-colors duration-200">
            <Save/>
            <p className="text-lg">{text}</p>

        </button>
    )
}