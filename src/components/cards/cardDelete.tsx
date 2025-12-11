import { useContext, useEffect, useState } from "react";
import { CustomButton } from "../ui/customButton";
import { DocsContext } from "@/contexts/docsContext";

interface CardDeleteProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    handleCancel?: () => void;
    handleDelete?: () => void;
    handlePopUp?: () => void;
}

export function CardDelete({handleCancel, id, handlePopUp}: CardDeleteProps){

    const [docDelete, setDocDelete] = useState(id);
    const {docs,deleteDoc} = useContext(DocsContext);

    useEffect(()=>{
        setDocDelete(docs.find((doc) => doc.id === id)?.id || "");
    },[id, docs])
    
    const handleDelete = () => {
        deleteDoc(docDelete);
    }



    return(
        <div className="bg-(--background) py-10 px-10 rounded-2xl shadow-lg flex flex-col gap-10 items-center">
            <h1>Tem certeza que deseja excluir?</h1>
            <div className="flex gap-4">
                <CustomButton role="cancel" text="Cancelar" onClick={handleCancel}/>
                <CustomButton role="create" text="Excluir" onClick={() => { handleDelete(); if (handlePopUp) handlePopUp(); }} />
            </div>
        </div>
    )
}