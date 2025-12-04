"use client"

import { FileText } from "@deemlol/next-icons";
import { InputCreateMarkdown } from "./inputMarkdown";
import { CustomButton } from "./customButton";
import { useContext, useEffect, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { useForm } from "react-hook-form";
import { usePopUp } from "@/hooks/usePopUp";
import { toast } from "react-toastify";
import SuccessToast from "./toasts/SucessToast";


interface CardCreateUpdateProps {
    handleCancel?: () => void;
    handleUpdate?: () => void;
    id: string;
}

interface inputsDocs{
    title: string;
    content: string;
}

export function CardUpdateDoc({ handleCancel,handleUpdate, id } : CardCreateUpdateProps) {

    const {handleSubmit,register, setValue} = useForm<inputsDocs>()
    const {updateDoc,docs} = useContext(DocsContext);
    const [docToEdit, setDocToEdit] = useState<Docs | null>(null);
    
    useEffect(()=>{
         setDocToEdit(docs.find((doc) => doc.id === id) || null);
         setValue("title", docToEdit?.title || "");
         setValue("content", docToEdit?.content || "");
    },[docToEdit])

    const onSubmit = (data: inputsDocs) => {
        updateDoc(id, {
            title: data.title,
            content: data.content,
            updatedAt: new Date()
        });
        if (handleUpdate){
            handleUpdate();
        }
    }


    
    return (
            <form className="rounded-2xl bg-white shadow-md z-10 w-140 h-120 p-6 absolute" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 py-5">
                    <FileText size={40} color="#3B82F6" />
                    <div>
                        <h1 className="text-2xl font-semibold">Atualizar documento</h1>
                        <p className="text-gray-500 text-lg">Atualize os valores do seu documento!</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <InputCreateMarkdown {...register("title")} titulo="Título" />
                    <InputCreateMarkdown {...register("content")} titulo="Descrição"/>
                </div>

                <div className="pt-10 flex justify-end w-full gap-5">
                    <CustomButton onClick={handleCancel}  role="cancel" text="Cancelar"/>
                    <CustomButton type="submit"  role="createDoc" text="Atualizar documento"/>
                </div>
            </form>
    )
}