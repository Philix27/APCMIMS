import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AgentsComp from "../comps/member";
import axios from "axios";

export default function ProfilePage({ agentsList }) {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (fetchUser()) {
      setUser(fetchUser()[0]);
      setUserLoggedIn(true);
    } else {
      // setUser();
      setUserLoggedIn(false);
    }
  }, {});

  function fetchUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className="agentsWrapper">
      <Head>
        <title>APCMIMS | Profile</title>
      </Head>
      <div className="comp">
        <AgentsComp agentsList={agentsList} />
        {/* <AgentsComp agentsList={agentsList} /> */}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const art = await axios.get("https://rxedu-api.vercel.app/api/v1/member");
  return {
    props: {
      agentsList: art.data,
    },
  };
}
