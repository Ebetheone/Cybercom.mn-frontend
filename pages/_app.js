import "../styles/globals.css";
import { OrderStore } from "../context/OrderContext";

function MyApp({ Component, pageProps }) {
  return (
    <OrderStore>
      <Component {...pageProps} />
    </OrderStore>
  );
}

export default MyApp;
