
interface InputCreateMarkdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
    titulo: string;
    placeholder?: string;
}

export function InputCreateMarkdown({ titulo, placeholder, ...props }: InputCreateMarkdownProps) {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">{titulo}</h1>
            <input placeholder={placeholder} className="outline-blue-400 bg-(--background) border border-gray-300 py-3 px-3 rounded-md w-full " {...props} >
            </input>
        </div>
    )
}