import { Plus } from "@deemlol/next-icons";
import { ButtonHTMLAttributes } from "react";

interface RoleButtonStyles {
    cancel: string;
    createDoc: string;
    create: string;
}

interface CreateMarkdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    text: string;
    role: keyof RoleButtonStyles;
}

export function CustomButton({ text ,icon, role, ...props} : CreateMarkdownButtonProps) {

    const roleStyles: RoleButtonStyles = {
        cancel: "border-2 border-gray-300 text-black rounded-2xl flex items-center px-5 py-3 cursor-pointer gap-3",
        createDoc: " text-white bg-blue-500 rounded-2xl flex items-center px-5 py-3 cursor-pointer",
        create: "flex items-center gap-3 bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg cursor-pointer"
    }

    return (
        <button className={`${roleStyles[role]}`} {...props}>
            {icon}
            <h1 className="text-lg font-semibold">{text}</h1>
        </button>
    )
}