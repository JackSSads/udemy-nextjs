//import Template
import DataTable from "../components/template/DataTable";
import Layout from "../components/template/Layout";

import { api_next } from "../lib/dturl";

import { GridColDef } from "@mui/x-data-grid";

// página JSX notifications
export default function Collaborator() {

  const columns: GridColDef[] = [
    {
      field: "id",
      hide: false,
      align: "center",
      width: 300,
    },
    {
      field: "name",
      headerName: "Nome",
      align: "center",
      width: 250
    },
    {
      field: "email",
      headerName: "E-mail",
      align: "center",
      width: 250
    },
    {
      field: "pass",
      headerName: "Senha",
      align: "center",
      width: 250
    },
  ];

  return (
    <Layout title="Colaboradores" description="Listagem de todos os Colaboradores">
      <DataTable url={`${api_next}/collaborator`} columns={columns}></DataTable>
    </Layout>
  );
};
