import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + req.query.id)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data));
}
