import type { GetServerSidePropsContext } from 'next';
import { useCallback, useState } from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { Section } from '../../components';

interface HelloProps {
  initialFact: string;
}

const FactArea = styled(Section)`
  & > p {
    min-height: 5em;
  }
`;

const ButtonArea = styled(Section)`
  display: flex;

  & > div:first-child {
    flex-grow: 1;
  }
`;

const CatFact = ({ initialFact }: HelloProps): JSX.Element => {
  const [fact, setFact] = useState(initialFact);

  const getNewFact = useCallback((animal: string) => {
    fetch(`/api/animalFact?animal=${animal}`)
      .then((r) => r.json())
      .then(json => json.fact)
      .then(setFact);
  }, []);

  const getNewCatFact = useCallback(() => {
    getNewFact('cat');
  }, [getNewFact]);

  const getNewDogFact = useCallback(() => {
    getNewFact('dog');
  }, [getNewFact]);

  return (
    <>
      <FactArea>
        <h1>Hello, Inquirer!</h1>
        <p>
          {fact}
        </p>
      </FactArea>
      <ButtonArea>
        <div>
          <Button onClick={getNewCatFact}>
            Give me a cat fact!
          </Button>
        </div>
        <div>
          <Button onClick={getNewDogFact}>
            Give me a dog fact!
          </Button>
        </div>
      </ButtonArea>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { fact } = await fetch('https://catfact.ninja/fact').then((res) => res.json());

  return {
    props: {
      initialFact: fact,
    },
  };
}

export default CatFact;
