import { api_nest } from "../../lib/dturl";

export default async function handler(req, res) {

  const { method } = req;

  const { query } = req.query;

  switch (method) {

    case "GET":

      try {
        const response = await fetch(`${api_nest}/${query}`);

        const json = await response.json();

        return res.status(200).json({
          data: json,
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({ sucess: false, error: error });
      }

    case "POST":

      try {

        const { date, client, description, collaborator_req, status } = req.body;

        const data = {
          date,
          client,
          description,
          collaborator_req,
          status
        };

        const response = await fetch(`${api_nest}/${query}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const json = await response.json();

        return res.status(201).json({
          data: json,
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({ sucess: false, error: error });
      };

    case "PUT":

      try {

        const { status, clientId } = req.body;

        const data = {
          status,
        };

        const response = await fetch(`${api_nest}/${query}/${clientId}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const json = await response.json();

        return res.status(201).json({
          data: json, clientId: clientId,
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({ sucess: false, error: error });
      };

    case "DELETE":
      try {

        const { id } = req.body;

        const response = await fetch(`${api_nest}/${query}/${id}`, {
          method: method,
          headers: {
            ""
          }
        });

      } catch (error) {
        console.log(error);
        return res.status(500).json({ sucess: false, error: error });
      }
  };
};
