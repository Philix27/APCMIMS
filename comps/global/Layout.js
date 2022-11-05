import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>APC Membership</title>
        <meta name="APCMIMS" content="Created by Eligbue" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
