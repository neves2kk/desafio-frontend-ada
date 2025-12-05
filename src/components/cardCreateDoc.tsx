"use client"

import { FileText } from "@deemlol/next-icons";
import { InputCreateMarkdown } from "./inputMarkdown";
import { CustomButton } from "./customButton";
import { useContext, useEffect, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SuccessToast from "./toasts/SucessToast";
import { defaultMarkdownText } from "@/utils/markdownTextDefault";


interface CardCreateDocProps {
    handleCancel?: () => void;
    handleCreate?: () => void;
}

interface inputsDocs{
    title: string;
    content: string;
}

export function CardCreateDoc({ handleCancel,handleCreate } : CardCreateDocProps) {

    const {handleSubmit,register,setValue} = useForm<inputsDocs>()

    const {addDoc} = useContext(DocsContext);

    

    const onSubmit = (data: inputsDocs) => {

        addDoc({
            id: crypto.randomUUID(),
            title: data.title,
            content: data.content,
            createdAt: new Date(),
            updatedAt: new Date(),
            markdownContent: defaultMarkdownText,
        });
        
        if (handleCreate){
            handleCreate();
        }

        toast(<SuccessToast title="Sucesso!" description="Mecânica cadastrada com sucesso." />)
    }

    
    return (
            <form className="rounded-2xl bg-white shadow-md z-10 w-140 h-120 p-6 absolute" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 py-5">
                    <FileText size={40} color="#3B82F6" />
                    <div>
                        <h1 className="text-2xl font-semibold">Novo documento</h1>
                        <p className="text-gray-500 text-lg">Dê o nome ao seu novo documento Markdown</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <InputCreateMarkdown {...register("title")} titulo="Título" placeholder="Ex: Notas da reunião"/>
                    <InputCreateMarkdown {...register("content")} titulo="Descrição" placeholder="Ex: Detalhes da reunião"/>
                </div>

                <div className="pt-10 flex justify-end w-full gap-5">
                    <CustomButton onClick={handleCancel}  role="cancel" text="Cancelar"/>
                    <CustomButton type="submit"  role="createDoc" text="Criar documento"/>
                </div>
            </form>
    )
}