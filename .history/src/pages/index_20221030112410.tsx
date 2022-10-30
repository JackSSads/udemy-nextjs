//import Templates
import Layout from "../components/template/Layout";
import DataTable from "../components/template/DataTable";
import Update from "../components/template/Update";

import { useState } from "react";

import { GridColDef } from "@mui/x-data-grid";

import { api_next } from "../lib/dturl";

// página JSX home
export default function Home() {

  const [id, setId] = useState("");

  const [checkStatus, setCheckStatus] = useState("");
  const [checkId, setCheckId] = useState("");

  function okMessage(message) {
    setCheckStatus(message);
    setTimeout(() => setCheckStatus(null), 10000);
  };

  function checkIfIdExists(message) {
    setCheckId(message);
    setTimeout(() => setCheckId(null), 5000)
  };

  async function updateStatus() {

    if (id === "") {
      checkIfIdExists("Digite um ID para finalizar uma ordem de serviço");

      return;
    };

    const data = {
      status: true,
      clientId: id
    };

    const response = await fetch(`${api_next}/os`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setId("");

      okMessage("Ordem de serviço finalizada");
    };

    return response;
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      hide: false,
      width: 300,
      align: "center"
    },
    {
      field: "date",
      headerName: "Data de Abertura da OS",
      width: 170,
      align: "center"
    },
    {
      field: "client",
      headerName: "Cliente",
      width: 250,
      align: "center"
    },
    {
      field: "description",
      headerName: "Descrição",
      width: 400,
      align: "center"
    },
    {
      field: "collaborator_req",
      headerName: "Colaborador Requistado",
      width: 250,
      align: "center"
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      align: "center"
    },
  ];

  return (
    <Layout title="Ordens de Serviços" description="Todas as ordens de serviços em aberto">
      <DataTable url={`${api_next}/os`} columns={columns}></DataTable>

      <div className="w-full mt-5">

        <h3 className="text-lg text-center">Finalizar Os</h3>

        {checkStatus ?

          <div className="
            flex items-center justify-center
            bg-green-400 text-white py-3 px-5 my-2
            border border-green-600 rounded-lg">
            <span className="ml-3">{checkStatus}</span>
          </div>

          : false
        }

        {checkId ?

          <div className="
            flex items-center justify-center
            bg-orange-500 text-white py-3 px-5 my-2
            border border-orange-400 rounded-lg">
            <span className="ml-3">{checkId}</span>
          </div>

          : false
        }

        <Update
          label=""
          type="text"
          value={id}
          changeValue={setId}
          placeholder="Digite o ID da Ordem de Serviço"
        ></Update>

        <button
          onClick={updateStatus}
          className={`
            border border-gray-200 py-3 hover:bg-gray-200 w-full
            mt-10 rounded-lg dark:hover:bg-gray-700 hover:border-indigo-500
        `}>
          Finalizar
        </button>
      </div>
    </Layout>
  );
};