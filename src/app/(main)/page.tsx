"use client"

import { CustomButton } from "@/components/ui/customButton";
import { CardCreateDoc } from "@/components/cards/cardCreateDoc";
import { FileText, Plus } from "@deemlol/next-icons";
import { useContext, useState } from "react";
import { DocsContext } from "@/contexts/docsContext";
import { CardDoc } from "@/components/cards/cardDoc";
import { usePopUp } from "@/hooks/usePopUp";
import { toast } from "react-toastify";
import SuccessToast from "@/components/toasts/SucessToast";
import { CardUpdateDoc } from "@/components/cards/cardUpdateDoc";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/searchBar";
import { CardDelete } from "@/components/cards/cardDelete";

export default function Home() {


  const {docs} = useContext(DocsContext);
  const {popUpOpen, togglePopUp, setPopUpOpen} = usePopUp();
  const [popUpEdit, setPopUpEdit] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [popUpDelete, setPopUpDelete] = useState(false);
  const router = useRouter();  


  const handleUpdate = (id: string) => {
    setSelectedDocId(id)
    setPopUpEdit(!popUpEdit)
  }

  const handleOpenMarkDown = (id: string) => {
    router.push(`/markdown/${id}`);
  }

  const handleDelete = (id: string) => {
    setSelectedDocId(id)
    setPopUpDelete(true);
  }

  const filteredDocs = docs.length > 0 ? docs.filter(doc => doc.title.includes(search)) : [];

  console.log(popUpDelete)

  return (
    docs.length > 0 ? (
      <main className="flex flex-col px-30 py-5 ">
        <div className="flex flex-col py-10 gap-10">
          <SearchBar onChange={(e) => setSearch(e.target.value)} stateValue={search}/>
          <span className="text-lg text-gray-500">{filteredDocs.length} documentos</span>
        </div>
        <div className="flex gap-10  flex-wrap ">
          {filteredDocs.map((doc) => (
              <CardDoc 
              key={doc.id} 
              title={doc.title} 
              content={doc.content} 
              createdAt={new Date(doc.createdAt)}
              handleDelete={()=> handleDelete(doc.id)} 
              handleUpdate={() => handleUpdate(doc.id)}
              handleOpenMarkDown={() => handleOpenMarkDown(doc.id)}
              />
          ))}

          {popUpEdit && (
            <>
              <div className="fixed inset-0 bg-black opacity-50 z-10" />
              <div className="fixed inset-0 z-20 flex items-center justify-center">
              <CardUpdateDoc id={selectedDocId || ""}  handleCancel={() => setPopUpEdit(false)} handleUpdate={() => setPopUpEdit(false)}/>
              </div>
            </>
          )}

          {popUpDelete && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-10" />
            <div className="fixed inset-0 z-20 flex items-center justify-center">
              <CardDelete id={selectedDocId || ""} handleCancel={() => setPopUpDelete(false)}  handlePopUp={() => setPopUpDelete(false)} />
            </div>
          </>
        )}
          
        </div>
      </main>
    ) : (
      <main className="flex items-center justify-center h-[calc(100vh-94.67px)]  flex-col gap-10 px-4">
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
