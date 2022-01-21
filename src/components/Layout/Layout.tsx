import { ReactNode } from 'react';
import Footer from './Footer';

export interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    {children}
    <Footer />
  </div>
);

export default Layout;
