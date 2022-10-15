//import Templates
import DataTable from "../components/template/DataTable";
import Layout from "../components/template/Layout";

import { GridColDef } from "@mui/x-data-grid";

import { api_base } from "../lib/dturl"

// página JSX home
export default function Home() {

  const columns: GridColDef[] = [
    { field: "id", hide: false, width: 70, align: "center"},
    { field: "userId", headerName: "Id do Usuário", width: 100, align: "center" },
    { field: "title", headerName: "Titulo", width: 350, align: "center" },
    { field: "body", headerName: "Mensagem", width: 600, align: "center" },
  ];

  return (
    <Layout title="Todos os Posts" description="Consulta feita apartir da API JSON Placehouder">
      <DataTable url={`${api_base}/jsonPlaceholder`} columns={columns}></DataTable>
    </Layout>
  );
};