import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>List and Grid View</title>
      </Head>
      <div>
        <h1>Title</h1>
        <div className={styles.views}>
          <div>
            <Link href="/list">List View</Link>
          </div>
          <div>
            <Link href="/grid">Grid View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
