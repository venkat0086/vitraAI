import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>List and Grid View</title>
      </Head>
      <div>
        <h1>Title</h1>
        <div className={styles.views}>
          <div>
            <Link href="/view">List View</Link>
          </div>
          <div>
            <Link href="/view">Grid View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
