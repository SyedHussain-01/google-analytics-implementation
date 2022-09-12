import React from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const about = () => {
  return (
    <div className={styles.container}> 
      <Head>
        <title>About</title>
      </Head>

      <main className={styles.main}>
        <h3>About</h3>
      </main>
    </div>
  );
};

export default about;
