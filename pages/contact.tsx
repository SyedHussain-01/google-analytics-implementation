import React from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const contact = () => {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Contact</title>
      </Head>

      <main className={styles.main}>
        <h3>Contact</h3>
      </main>
    </div>
  );
};

export default contact;
