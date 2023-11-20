import Footer from "../Components/Footer";
import "../styles/globals.css";
import "../styles/weatherCards.css";
import "../styles/singleWeatherCard.css";
import "../styles/homeSection.css";
import "../styles/singleCity.css";
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </div>
  );
}
