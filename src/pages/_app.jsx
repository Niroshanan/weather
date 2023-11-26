import Footer from "../Components/Footer";
import "../styles/globals.css";
import "../styles/weatherCards.css";
import "../styles/singleWeatherCard.css";
import "../styles/homeSection.css";
import "../styles/singleCity.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
