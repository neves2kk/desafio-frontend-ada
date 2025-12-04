"use client"

import { Edit, FileText, Trash2 } from "@deemlol/next-icons";


interface CardDocProps {
    title: string;
    content: string;
    createdAt: Date;
    handleDelete?: () => void;
    handleUpdate?: () => void;
    handleOpenMarkDown?: () => void;
}

export function CardDoc({title, content, createdAt,handleDelete, handleUpdate, handleOpenMarkDown}: CardDocProps){

    return(
        <div className="border border-gray-300 rounded-2xl h-45 w-120 px-5 py-5 flex flex-col gap-4 shadow-lg transition duration-300 ease-in-out
         hover:border-blue-200 cursor-pointer hover:text-blue-400 hover:shadow-xl hover:-translate-y-1" onClick={handleOpenMarkDown}>
            <div className="flex items-center gap-3">
                <FileText size={40} color="#3B82F6" />
                <h1 className="text-2xl font-semibold w-80">{title}</h1>
                <div className="flex  gap-2 w-20  justify-center bg-gray-100 py-1 px-2 border border-gray-300 rounded-lg ml-auto">
                    <Edit size={20} className=" text-black hover:text-blue-600" onClick={handleUpdate}/>
                    <Trash2 size={20} cursor="red" className="text-black cursor-pointer hover:text-red-500" onClick={handleDelete}/>
                </div>
            </div>
            <p className="text-gray-500 text-lg">{content}</p>
            <div className="text-gray-400 text-md">
                <p>Criado em: {createdAt.toLocaleDateString()}</p>
            </div>
        </div>
    )
}