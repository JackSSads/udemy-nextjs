import { api_client } from "../../lib/dturl";

export default async function Os(req, res) {

    const response = await fetch(`${api_client}/os`);

    const json = await response.json();

    return res.status(200).json({
        data: json,
    });
};