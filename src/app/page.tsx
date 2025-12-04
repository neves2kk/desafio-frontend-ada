"use client"

import { CustomButton } from "@/components/customButton";
import { CardCreateDoc } from "@/components/cardCreateDoc";
import { FileText, Plus } from "@deemlol/next-icons";
import { useContext, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { CardDoc } from "@/components/cardDoc";
import { usePopUp } from "@/hooks/usePopUp";
import { toast } from "react-toastify";
import SuccessToast from "@/components/toasts/SucessToast";
import { CardUpdateDoc } from "@/components/cardUpdateDoc";
import { useRouter } from "next/navigation";

export default function Home() {


  const { docs,deleteDoc} = useContext(DocsContext);
  const {popUpOpen, togglePopUp, setPopUpOpen} = usePopUp();
  const [popUpEdit, setPopUpEdit] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const router = useRouter();
  
  const handleDelete = (id: string) => {
    deleteDoc(id)
    toast(<SuccessToast title="Deletado!" description="Documento deletado com sucesso." />)
  }

  const handleUpdate = (id: string) => {
    setSelectedDocId(id)
    setPopUpEdit(!popUpEdit)
  }

  const handleOpenMarkDown = (id: string) => {
    router.push(`/markdown/${id}`);
  }


  return (
    docs.length > 0 ? (
      <main className="flex gap-10 justify-center flex-wrap py-20">
        {docs.map((doc) => (
          <CardDoc 
           key={doc.id} 
           title={doc.title} 
           content={doc.content} 
           createdAt={new Date(doc.createdAt)}
           handleDelete={()=> {handleDelete(doc.id)}} 
           handleUpdate={() => handleUpdate(doc.id)}
           handleOpenMarkDown={() => handleOpenMarkDown(doc.id)}
           />
        ))}

        {popUpEdit && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-10" />
            <CardUpdateDoc id={selectedDocId || ""}  handleCancel={() => setPopUpEdit(false)} handleUpdate={() => setPopUpEdit(false)}/>
          </>
        )}
      </main>
    ) : (
      <main className="flex items-center justify-center h-280 flex-col gap-10 px-4">
        <FileText size={100} color="#3B82F6" />
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-4xl font-semibold">Nenhum documento ainda</h1>
          <h2 className="text-center max-w-180 text-2xl text-gray-500 font-extralight">
            Comece criando seu primeiro documento Markdown. Escreva, formate e organize suas ideias com facilidade.
          </h2>
        </div>
        <CustomButton icon={<Plus size={20} color="white" />} role="create" text="Crie seu primeiro documento" onClick={togglePopUp} />

        {popUpOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-10" />
            <CardCreateDoc handleCancel={togglePopUp} handleCreate={() => setPopUpOpen(false)}/>
          </>
        )}
      </main>
    )
  );
}
