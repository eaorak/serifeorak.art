import "../styles/globals.css";
import Nav from "../components/Nav/Nav";

import { CartContext } from "../hooks/use-cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartContext.Provider value={{}}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
