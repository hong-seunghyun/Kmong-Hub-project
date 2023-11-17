import Head from 'next/head';

import Header from './header';
import Content from './content';
import Footer from './footer';
import Navigator from './navigator'

const Component = ({ children }) => (
  <>
    <Head />
    <Header />
		<Navigator />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Component;
