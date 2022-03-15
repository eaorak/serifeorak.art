import { FaShoppingCart } from "react-icons/fa";

import styles from "./Nav.module.css";

import useCart from "../../hooks/use-cart.js";

const Nav = () => {
  const { cart, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>Hemdem Art</p>
      <p className={styles.navCart}>
        <button onClick={checkout}>
          <FaShoppingCart /> £{cart.total}
        </button>
      </p>
    </nav>
  );
};

export default Nav;
