//import Template
import { useState } from "react";
import FormPost from "../components/template/FormPost";
import Layout from "../components/template/Layout";

import { api_client } from "../lib/dturl";

// página JSX settings
export default function Settings() {

  const [nameClient, setNameClient] = useState("");
  const [description, setDescription] = useState("");

  async function registerOs() {

    const data = {
      date: "2020-01-01",
      client: `${nameClient}`,
      description: `${description}`,
      collaborator_req: "Jackson Souza da Silva",
      status: true
    };
    
    const response = await fetch(`${api_client}/os`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response

  };

  return (

    <Layout title="Criar nova OS" 
      description="Preencha os campos a baixo relatando o problema do cliente">

      <h3>Para atualizar seu perfil na plataforma</h3>

      <FormPost
        label="Nome do Cliente"
        type="text"
        value={nameClient}
        changeValue={setNameClient}
        placeholder="Digite o nome do cliente"
        required></FormPost>

      <FormPost
        label="Descrição da Ocorrência"
        type="text"
        value={description}
        changeValue={setDescription}
        placeholder="Digite o nome do cliente"
        required></FormPost>

      <button onClick={registerOs} className={`
        border border-gray-400 py-3 hover:bg-gray-200
        mt-10 rounded-lg 
        dark:hover:bg-white dark:hover:text-black 
        hover:border-indigo-500
      `}>Cadastrar OS</button>

    </Layout>

  );
};
