import Head from "next/head";
import "../scss/page_style.scss"
import "../scss/public.scss";
import "../scss/components_style.scss";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>HSD PROJECT</title>
			<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'></link>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;