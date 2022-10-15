//import Template
import DataTable from "../components/template/DataTable";
import Layout from "../components/template/Layout"

import { api_base } from "../lib/dturl"

import { GridColDef } from "@mui/x-data-grid";

// página JSX notifications
export default function Notifications() {

  const columns: GridColDef[] = [
    { field: "id", hide: false, width: 300},
    { field: "name", headerName: "Nome", width: 250 },
    { field: "email", headerName: "E-mail", width: 250 },
    { field: "pass", headerName: "Senha", width: 250 },
  ];

  return (
    <Layout title="Notificações" description="Consulta feita apartir da API local cridada em Nest Js">
      {<DataTable url={`${api_base}/client`} columns={columns}></DataTable>}
    </Layout>
  );
};
