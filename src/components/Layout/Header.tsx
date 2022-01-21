import { useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from '@mui/material';
import Link from 'next/link';
import styled from '@emotion/styled';

const MyAppBar = styled(AppBar)`
  text-transform: uppercase;

  a {
    padding: 6px;
  }
  button {
    color: white;
  }
`;

const AppBarBox = styled(Box)`
  flex-grow: 1;
  display: flex;
`;

const HeaderLogo = () => (
  <Typography
    variant="h6"
    noWrap
    component="div"
  >
    <Link href="/">
      (Logo)
    </Link>
  </Typography>
);

const Header = (): JSX.Element => {
  const notYetImplemented = useCallback(() => {
    alert('Page not yet implemented. Come back soon!');
  }, []);

  return (
    <MyAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderLogo />
          <AppBarBox>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/catfact">Cat Facts</Link>
            <Button onClick={notYetImplemented}>Crypto Wallet</Button>
          </AppBarBox>
        </Toolbar>
      </Container>
    </MyAppBar>
  );
};

export default Header;
