import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

const defaultLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
);

function MyApp({ Component, pageProps }: AppProps) {
  const { getLayout = defaultLayout } = Component as any;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
