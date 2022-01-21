import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { CssBaseline } from '@mui/material';

const defaultLayout = (page: ReactNode) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      {page}
    </Layout>
    <CssBaseline />
  </>
);

function MyApp({ Component, pageProps }: AppProps) {
  const { getLayout = defaultLayout } = Component as any;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
