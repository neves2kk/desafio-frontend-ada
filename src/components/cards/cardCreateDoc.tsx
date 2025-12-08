"use client"

import { FileText } from "@deemlol/next-icons";
import { InputCreateMarkdown } from "../ui/inputMarkdown";
import { CustomButton } from "../ui/customButton";
import { useContext, useEffect, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SuccessToast from "../toasts/SucessToast";
import { defaultMarkdownText } from "@/utils/markdownTextDefault";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";



interface CardCreateDocProps {
    handleCancel?: () => void;
    handleCreate?: () => void;
}

const docSchema = z.object({
    title: z.string().min(1, "O título é obrigatório").max(50, "O título deve ter no máximo 50 caracteres"),
    content: z.string().max(200, "A descrição deve ter no máximo 140 caracteres"),
});

type DocSchema = z.infer<typeof docSchema>;

export function CardCreateDoc({ handleCancel,handleCreate } : CardCreateDocProps) {

    const {handleSubmit,register, formState: {errors},watch} = useForm<DocSchema>({
        resolver: zodResolver(docSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    })

    const {addDoc} = useContext(DocsContext);
    const watchedTitle = watch("title");
    const watchedContent = watch("content");

    const onSubmit = (data: DocSchema) => {

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
    }



    
    return (
            <form className="rounded-2xl bg-white shadow-md z-10 w-140 h-135 p-6 absolute" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 py-5">
                    <FileText size={40} color="#3B82F6" />
                    <div>
                        <h1 className="text-2xl font-semibold">Novo documento</h1>
                        <p className="text-gray-500 text-lg">Dê o nome ao seu novo documento Markdown</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 " >
                    <div className="flex flex-col">
                        <InputCreateMarkdown {...register("title", { required: true }) } maxLength={50} titulo="Título" placeholder="Ex: Notas da reunião"/>
                        <div className="flex w-full justify-between pt-2">
                            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                            <span className="w-full text-right">{watchedTitle.length }/50</span>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <InputCreateMarkdown {...register("content")} titulo="Descrição" maxLength={200} placeholder="Ex: Detalhes da reunião"/>
                        <div className="flex w-full justify-between pt-2">
                            {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
                            <span className="w-full text-right">{watchedContent.length}/200</span>
                        </div>
                    </div>
                </div>

                <div className="pt-10 flex justify-end w-full gap-5">
                    <CustomButton onClick={handleCancel}  role="cancel" text="Cancelar"/>
                    <CustomButton type="submit"  role="createDoc" text="Criar documento"/>
                </div>
            </form>
    )
}