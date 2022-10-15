import { useEffect, useState } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

import useAppData from "../../data/hooks/useAppData";

export default function DataTable({ url, columns }) {

    const { color } = useAppData();

    const [list, setList] = useState([]);

    const users = () => {
        useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((json) => setList(json.data));
        }, []);
    };

    users();

    return (
        <div className="w-full">
            <DataGrid sx={{
                color: { color },
                mt: 1,
                height: "75vh"
            }}

                initialState={{
                    pagination: {
                        pageSize: 10,
                    },
                }}

                rows={list}
                columns={columns} />
        </div>
    );
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/client`)
    const data = await res.json()

    console.log(data); 
  
    // Pass data to the page via props
    return { props: { data } }
  }