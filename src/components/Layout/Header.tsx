import { useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
} from '@mui/material';
import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderLogo = () => (
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
  >
    <Link href="/">
      LOGO
    </Link>
  </Typography>
);

const Header = (): JSX.Element => {
  const handleLogoClick = useCallback(() => {
    alert('You clicked me!');
  }, []);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderLogo />
          <Box>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
