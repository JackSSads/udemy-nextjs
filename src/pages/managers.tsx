//import Template
import Layout from "../components/template/Layout";

import DataTable from "../components/template/DataTable";

import { GridColDef } from "@mui/x-data-grid";

import { api_next } from "../lib/dturl";

// página JSX new
export default function New() {

  const columns: GridColDef[] = [
    {
      field: "id",
      align: "center",
      width: 300,
    },
    {
      field: "name",
      headerName: "Nome",
      align: "center",
      width: 200,
    },
    {
      field: "email",
      headerName: "email",
      align: "center",
      width: 250,
    },
    {
      field: "pass",
      headerName: "Senha",
      align: "center",
      width: 400,
    },
  ];

  return (
    <Layout title="Gestores" description="Listagem de todos os Gestores">
      <DataTable url={`${api_next}/manager`} columns={columns}></DataTable>
    </Layout>
  );
};
