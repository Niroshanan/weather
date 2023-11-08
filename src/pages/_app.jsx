 import Footer from '../Components/Footer';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <div >
    <Component {...pageProps} />
    <Footer/>
  </div>
}