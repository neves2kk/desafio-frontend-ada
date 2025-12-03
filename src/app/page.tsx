"use client"

import { CustomButton } from "@/components/customButton";
import { CardCreateMarkdown } from "@/components/cardCreateMarkdown";
import { FileText, Plus } from "@deemlol/next-icons";
import {  useState } from "react";

export default function Home() {

  const [popUpOpen, setPopUpOpen] = useState(false);



  return (
    <main className= "flex items-center justify-center h-280 flex-col gap-10  px-4">
        <FileText size={100} color="#3B82F6"/>
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-4xl font-semibold ">Nenhum documento ainda</h1>
          <h2 className="text-center max-w-180 text-2xl text-gray-500 font-extralight">
            Começe criando seu primeiro documento Markdown. Escreva,
            formate e organize suas ideias com facilidade.
          </h2>
        </div>
        <CustomButton icon={<Plus size={20} color="white" />} role="create" text="Crie seu primeiro documento" onClick={() => setPopUpOpen(!popUpOpen)} />

        {popUpOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-10"/>
            <CardCreateMarkdown handleCancel={() => setPopUpOpen(false)} />
          </>
        )}
    </main>
  );
}
