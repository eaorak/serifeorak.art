import Head from "next/head";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/Cart.module.css";
import { useCart } from "../hooks/use-cart";
import Table from "../components/Table";
import Footer from "../components/Nav/Footer";

const columns = [
  {
    columnId: "title",
    Header: "Product Name",
  },
  {
    columnId: "total",
    Header: "Item Total",
  },
];

export default function Home() {
  const { cartItems, checkout, removeFromCart } = useCart();

  console.log("cartItems ", cartItems);

  const data = cartItems.map((item) => ({
    ...item,
    total: item.quantity * item.pricePerUnit,
    title: item.title,
  }));

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopping Cart - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} deleteAction={removeFromCart} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <Footer />
    </div>
  );
}
