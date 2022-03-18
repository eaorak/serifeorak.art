import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Link from "next/link";
import styles from "./Nav.module.css";

import { useCart } from "../../hooks/use-cart.js";

const Nav = () => {
  const { cart, checkout, deleteCart } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
          <a>Hemdem Art</a>
        </Link>
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a>
            <FaShoppingCart /> <strong>£{cart.totalPrice}</strong>
          </a>
        </Link>
        <button onClick={deleteCart}>
          <FaTrash />
        </button>
      </p>
    </nav>
  );
};

export default Nav;
