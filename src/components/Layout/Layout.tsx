import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

export interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
