import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function () {
  return (
    <div>
      <Head>
        <title>All Locations</title>
      </Head>
      <main>
        <h1 className={styles.title}>All Locations</h1>
        <Link href="/">← Back</Link>
        <hr></hr>
        <li>
          <Link href="locations/1">Location 1</Link>
        </li>
      </main>
    </div>
  );
}
