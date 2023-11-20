import Head from 'next/head';

import Header from './header';
import Content from './content';
import Footer from './footer';

const Component = ({ children }) => (
  <>
    <Head />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Component;
