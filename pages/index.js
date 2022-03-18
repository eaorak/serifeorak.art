import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import products from "../products.json";
import Link from "next/link";
import { useCart } from "../hooks/use-cart";
import AddToCart from "../components/Shop/AddToCart";
import Footer from "../components/Nav/Footer";

export default function Home() {
  const { cart, addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Hemdem Art</title>
        <meta name="description" content="Modern illumination artwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hemdem Art</h1>
        <p className={styles.description}>Modern Illumination Artwork</p>
        <section className={styles.grid}>
          {products.map(({ id, title, description, image, price }) => (
            <div className={styles.card} key={id}>
              <Link href={`/products/${id}`}>
                <a>
                  <Image src={image} alt={`${title} illumination artwork`} height={600} width={400} />
                </a>
              </Link>
              <h2>{title}</h2>
              <p className={styles.price}>
                <strong>£{price}</strong>
              </p>
              <p>{description}</p>
              <AddToCart id={id} />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
