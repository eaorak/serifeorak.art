import styles from "../../styles/Home.module.css";
import { useCart } from "../../hooks/use-cart";

const AddToCart = ({ id }) => {
  const { cart, addToCart } = useCart();
  return (
    <button
      className={`${styles.button} ${cart?.products?.[id] ? styles.disabled : ""}`}
      onClick={() => {
        addToCart({ id });
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
