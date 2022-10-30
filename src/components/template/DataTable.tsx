import { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import useAppData from "../../data/hooks/useAppData";

export default function DataTable({ url, columns }) {

    const { color } = useAppData();

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setList(json.data));
    }, []);

    return (
        <div className="w-full">
            <DataGrid
                sx={{
                    color: { color },
                    mt: 1,
                    height: "100vh",
                    border: `1px solid ${color}`
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
