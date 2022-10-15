//import Template
import Layout from "../components/template/Layout"

import DataTable from "../components/template/DataTable";

import { GridColDef } from "@mui/x-data-grid";

import { api_base } from "../lib/dturl"

// página JSX new
export default function New() {

  const columns: GridColDef[] = [
    { field: "id", hide: false, width: 300, align: "center"},
    { field: "date", headerName: "Data de Abertura da OS", width: 200, align: "center" },
    { field: "client", headerName: "Cliente", width: 250, align: "center" },
    { field: "description", headerName: "Descrição", width: 400, align: "center" },
  ];

  return (
    <Layout title="Novidades" description="Novidades sobre o sistema">
      <h3>Quando for postado novas funções, elas aparecerão aqui!</h3>
      <DataTable url={`${api_base}/os`} columns={columns}></DataTable>
    </Layout>
  );
};
