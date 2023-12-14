import Head from "next/head";
import "../scss/page_style.scss";
import "../scss/public.scss";
import "../scss/components_style.scss";
import "../scss/resize_style.scss";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>HSD PROJECT</title>
      <link
        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </>
);

export default App;
