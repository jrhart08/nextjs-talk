// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  fact: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { fact } = await fetch('https://catfact.ninja/fact')
    .then((r) => r.json());

  const { name = 'John Doe' } = req.query;
  res.status(200).json({
    name: name as string,
    fact,
  });
}
