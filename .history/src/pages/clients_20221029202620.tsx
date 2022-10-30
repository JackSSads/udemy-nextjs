//import Template
import DataTable from "../components/template/DataTable";
import Layout from "../components/template/Layout";

import { api_next } from "../lib/dturl";

import { GridColDef } from "@mui/x-data-grid";

// página JSX notifications
export default function Notifications() {

  const columns: GridColDef[] = [
    {
      field: "id",
      hide: false,
      width: 350
    },
    {
      field: "name",
      headerName: "Nome",
      width: 550
    },
  ];

  return (
    <Layout title="Colaboradores" description="Listagem de todos os Clientes">
      <DataTable url={`${api_next}/client`} columns={columns}></DataTable>
    </Layout>
  );
};
