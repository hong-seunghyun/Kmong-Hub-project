import React from 'react';
import Head from 'next/head';
import '../scss/page_style.scss'
import '../scss/public.scss';
import '../scss/components_style.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>HSD PROJECT</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;