import type { GetServerSidePropsContext } from 'next';
import { useCallback, useState } from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';

interface HelloProps {
  // name: string;
  initialFact: string;
}

const Area = styled.div`
  padding-bottom: 3em;
`;

const FactArea = styled(Area)`
  & > p {
    min-height: 5em;
  }
`;

const ButtonArea = styled(Area)`
  display: flex;

  & > div:first-child {
    flex-grow: 1;
  }
`;

const CatFact = ({
  // name,
  initialFact,
}: HelloProps): JSX.Element => {
  const [fact, setFact] = useState(initialFact);

  const getNewCatFact = useCallback(() => {
    fetch('/api/animalFact?animal=cat')
      .then((r) => r.json())
      .then(json => json.fact)
      .then(setFact);
  }, []);

  const getNewDogFact = useCallback(() => {
    fetch('/api/animalFact?animal=dog')
      .then((r) => r.json())
      .then(json => json.fact)
      .then(setFact);
  }, []);

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
