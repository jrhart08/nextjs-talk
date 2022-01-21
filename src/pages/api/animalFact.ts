// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type CatFactResponse = {
  fact: string;
};

async function getCatFact(): Promise<string> {
  const { fact } = await fetch('https://catfact.ninja/fact')
    .then((r) => r.json());

  return fact;
}

async function getDogFact(): Promise<string> {
  const { facts } = await fetch('https://dog-api.kinduff.com/api/facts?number=1')
    .then((r) => r.json());

  return facts[0];
}

const factFetchers: Record<string, () => Promise<string>> = {
  cat: getCatFact,
  dog: getDogFact,
};

export default async function getAnimalFact(
  req: NextApiRequest,
  res: NextApiResponse<CatFactResponse>,
) {
  const { animal } = req.query;

  const fact = await factFetchers[animal as string]();

  res.status(200).json({ fact });
}
