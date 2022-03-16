import SEO from '../components/SEO';
import '../styles/globals.css';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO title="" description="" />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
