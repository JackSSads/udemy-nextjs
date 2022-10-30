//import Template
import router from "next/router.js";
import { useState } from "react";
import FormPost from "../components/template/FormPost";
import Layout from "../components/template/Layout";

import { api_next } from "../lib/dturl";

// página JSX settings
export default function Settings() {

  const [nameClient, setNameClient] = useState("");
  const [description, setDescription] = useState("");
  const [collaborator, setCollaborator] = useState("");

  const [error, setError] = useState("");
  const [checkOsCreated, setCreckOsCrated] = useState("");

  function osCreated(message) {
    setCreckOsCrated(message);
    setTimeout(() => setCreckOsCrated(null), 10000);
  }

  function showError(message, time = 5) {
    setError(message);
    setTimeout(() => setError(null), time * 1000);
  };

  async function registerOs() {

    if (nameClient === "" || description === "" || collaborator === "") {
      showError("Preencha os campos corretamante!", 7);
      return
    };

    const date = new Date().toLocaleDateString();

    const data = {
      date: date,
      client: nameClient,
      description: description,
      collaborator_req: collaborator,
      status: false
    };

    const response = await fetch(`${api_next}/os`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });


    if (response.ok) {
      osCreated("Ordem de Serviço Criada com Sucesso!");

      setTimeout(() => { router.push('/'); }, 5000);

      console.log(response);
    };

    return response;
  };

  return (

    <Layout
      title="Criar nova OS"
      description="Preencha os campos a baixo relatando o problema do cliente">

      {error ? (
        <div className="
          flex items-center justify-center
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg">
          <span className="ml-3">{error}</span>
        </div>
      ) : false}

      {checkOsCreated ? (
        <div className="
          flex items-center justify-center
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg">
          <span className="ml-3">{error}</span>
        </div>
      ) : false}

      <div className="
        h-screen py-10 flex flex-col
      ">

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

        <FormPost
          label="Colaborador requisitado"
          type="text"
          value={collaborator}
          changeValue={setCollaborator}
          placeholder="Digite o nome do colaborador requisitado"
          required></FormPost>

        <button
          onClick={registerOs}
          className={`
            border border-gray-200 py-3 hover:bg-gray-200
            mt-10 rounded-lg dark:hover:bg-gray-700 hover:border-indigo-500
        `}>
          Cadastrar OS
        </button>

      </div>
    </Layout>
  );
};
