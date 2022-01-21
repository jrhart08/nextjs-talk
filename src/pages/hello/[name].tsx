import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

interface HelloProps {
  // name: string;
  catFact: string;
}

const Hello = ({
  // name,
  catFact,
}: HelloProps): JSX.Element => {
  const { name } = useRouter().query;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h3>{catFact}</h3>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // can also get routing values here
  const { name } = context.query;

  const { fact } = await fetch('https://catfact.ninja/fact').then((res) => res.json());

  return {
    props: {
      name,
      catFact: fact,
    },
  };
}

export default Hello;
