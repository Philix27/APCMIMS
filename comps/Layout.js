import React from "react";
import Head from "next/head";
import Footer from "./globalComps/Footer";
import Navbar from "./globalComps/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>APC Membership</title>
        <meta name="APCMIMS" content="Created by Eligbue" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
