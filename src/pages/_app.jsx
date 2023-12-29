import "../styles/globals.css";
import "../styles/weatherCards.css";
import "../styles/singleWeatherCard.css";
import "../styles/homeSection.css";
import "../styles/singleCity.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div>
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
