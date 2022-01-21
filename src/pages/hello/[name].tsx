import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const Hello = (): JSX.Element => {
  const { name } = useRouter().query;
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

// override default site layout
Hello.getLayout = (page: ReactNode) => page;

export default Hello;
