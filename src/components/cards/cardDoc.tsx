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
        <div className="border  border-gray-300 rounded-2xl h-70 w-110 px-5 py-5 flex flex-col gap-4 shadow-lg transition duration-300 ease-in-out
         hover:border-blue-200 cursor-pointer hover:text-blue-400 hover:shadow-xl hover:-translate-y-1" onClick={handleOpenMarkDown}>
            <div className="flex items-center gap-3">
                <FileText size={40} color="#3B82F6" />
                <h1 className="text-2xl font-semibold w-80 wrap-break-word">{title}</h1>
                <div className="flex  gap-2 w-20  justify-center bg-(--background) py-1 px-2 border border-gray-300 rounded-lg ml-auto">
                    <Edit size={20} className=" text-(--foreground) hover:text-blue-600" onClick={(e) => {
                            e.stopPropagation(); 
                            handleUpdate && handleUpdate();
                        }}/>
                    <Trash2 size={20} cursor="red" className="text-(--foreground) cursor-pointer hover:text-red-500" onClick={(e) => {
                            e.stopPropagation(); 
                            handleDelete && handleDelete();
                    }}/>
                </div>
            </div>
            <p className="text-gray-500 text-lg wrap-break-word">{content}</p>
            <div className="text-gray-400 text-md items-end flex  mt-auto">
                <p >Criado em: {createdAt.toLocaleDateString()}</p>
            </div>
        </div>
    )
}