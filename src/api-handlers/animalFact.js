async function getCatFact() {
  const { fact } = await fetch('https://catfact.ninja/fact')
    .then((r) => r.json());

  return fact;
}

async function getDogFact() {
  const { facts } = await fetch('https://dog-api.kinduff.com/api/facts?number=1')
    .then((r) => r.json());

  return facts[0];
}

const factFetchers = {
  cat: getCatFact,
  dog: getDogFact,
};

async function getAnimalFact(
  req,
  res,
) {
  const { animal } = req.query;

  const fact = await factFetchers[animal]();

  res.status(200).json({ fact });
}

module.exports.default = getAnimalFact;
