"use client"

import { FileText } from "@deemlol/next-icons";
import { InputCreateMarkdown } from "../ui/inputMarkdown";
import { CustomButton } from "../ui/customButton";
import { useContext, useEffect, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SuccessToast from "../toasts/SucessToast";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



interface CardCreateUpdateProps {
    handleCancel?: () => void;
    handleUpdate?: () => void;
    id: string;
}

const docSchema = z.object({
    title: z.string().min(1, "O título é obrigatório"),
    content: z.string(),
});

type DocSchema = z.infer<typeof docSchema>;

export function CardUpdateDoc({ handleCancel,handleUpdate, id } : CardCreateUpdateProps) {

    const {handleSubmit,register, setValue, formState: {errors}} = useForm<DocSchema>({
        resolver: zodResolver(docSchema)
    })
    const {updateDoc,docs} = useContext(DocsContext);
    const [docToEdit, setDocToEdit] = useState<Docs | null>(null);
    
    useEffect(()=>{
         setDocToEdit(docs.find((doc) => doc.id === id) || null);
         setValue("title", docToEdit?.title || "");
         setValue("content", docToEdit?.content || "");
    },[docToEdit])

    const onSubmit = (data: DocSchema) => {
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
            <form className="rounded-2xl bg-white shadow-md z-10 w-140 h-135 p-6 absolute" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 py-5">
                    <FileText size={40} color="#3B82F6" />
                    <div>
                        <h1 className="text-2xl font-semibold">Atualizar documento</h1>
                        <p className="text-gray-500 text-lg">Atualize os valores do seu documento!</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <InputCreateMarkdown {...register("title")} titulo="Título" />
                    {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                    <InputCreateMarkdown {...register("content")} titulo="Descrição"/>
                </div>

                <div className="pt-10 flex justify-end w-full gap-5">
                    <CustomButton onClick={handleCancel}  role="cancel" text="Cancelar"/>
                    <CustomButton type="submit"  role="createDoc" text="Atualizar documento"/>
                </div>
            </form>
    )
}