import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AgentsComp from "../../comps/member";
import axios from "axios";

export default function MembersPage({ agentsList }) {
  return (
    <div className="agentsWrapper">
      <Head>
        <title>APCMIMS | Members</title>
      </Head>
      <div className="comp">
        <AgentsComp agentsList={agentsList} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const art = await axios.get("https://rxedu-api.vercel.app/api/v1/member");
  return {
    props: {
      agentsList: art.data,
    },
  };
}
