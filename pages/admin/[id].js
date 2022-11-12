import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AgentsComp from "../../comps/member";
import axios from "axios";
import LoadingIndicator from "../../comps/global/LoadingIndicator";

export default function MembersPage({ memberProfile }) {
  const router = useRouter();
  const { id } = router.query;
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    axios
      .get(`https://rxedu-api.vercel.app/api/v1/member/${id}`)
      .then((response) => {
        setUserProfile(response.data.doc);
        console.log("Working");
        console.log(response.data.doc);
        console.log(`Length: ${response}`);
      })
      .catch(() => {
        console.log("Opps an error ocured - Local");
      });
  }, {});

  return (
    <div className="section">
      <Head>
        <title>APCMIMS | Profile</title>
      </Head>
      <br />
      {memberProfile.name ? (
        <div className="comp">
          <h3>
            <span>Name:</span> {userProfile.name}
          </h3>
          <h3>
            <span>Address:</span> {userProfile.address}
          </h3>
          <h3>
            <span>State:</span> {userProfile.state}
          </h3>
          <h3>
            <span>LGA:</span> {userProfile.lga}
          </h3>
          <h3>
            <span>Ward:</span> {userProfile.ward}
          </h3>
        </div>
      ) : (
        <LoadingIndicator />
      )}
      <div className="btn">Print</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const art = await axios.get(
    `https://rxedu-api.vercel.app/api/v1/member/${query.id}`
  );
  return {
    props: {
      // memberProfile: art.data.data,
      memberProfile: art.data.doc,
    },
  };
}
