import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AgentsComp from "../../comps/member";
import axios from "axios";
import LoadingIndicator from "../../comps/global/LoadingIndicator";
import { config } from "process";

export default function MembersPage({ memberProfile }) {
  const router = useRouter();
  const { nin } = router.query;
  const [userProfile, setUserProfile] = useState({});
  // console.log(memberProfile);

  useEffect(() => {
    axios
      .get(`https://rxedu-api.vercel.app/api/v1/member/${nin}`)
      .then((response) => {
        setUserProfile(response.data.doc);
        // console.log("Working");
      })
      .catch(() => {
        console.log("Opps an error ocured - Local");
      });
  }, []);

  const handlePrint = async () => {
    console.log("Handle Print Clicked");
    const data = {
      name: userProfile.firstName,
      email: userProfile.email,
      state_code: userProfile.nin,
      state: userProfile.state,
      lga: userProfile.lga,
      ward: userProfile.ward,
    };
    // data = JSON.stringify(data);
    console.log(data);
    // axios
    //   .post("http://localhost:8000/pdf", data)
    //   // .post("http://localhost:8000/pdfgen")
    //   .catch((e) => {
    //     console.log("Opps an error ocured - Local");
    //     console.log(e);
    //   });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/pdf" },
      body: data,
    };
    fetch("http://localhost:8000/pdf", requestOptions)
      .then((response) => response.json())
      .catch((e) => {
        console.log("Opps an error ocured - Local");
        console.log(e);
      });
  };
  return (
    <div className="profilePage">
      <Head>
        <title>APCMIMS | Profile</title>
      </Head>
      <br />
      {memberProfile ? (
        <div className="preview">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Photo</td>
                <td>
                  <img src={userProfile.image} alt="Profile Photo" />
                </td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>
                  {userProfile.firstName} {userProfile.name}
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{userProfile.lastName}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{userProfile.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{userProfile.phone}</td>
              </tr>
              <tr>
                <td>Alt Phone</td>
                <td>{userProfile.alternatePhone}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td>{userProfile.dateOfBirth}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{userProfile.address}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{userProfile.state}</td>
              </tr>
              <tr>
                <td>LGA</td>
                <td>{userProfile.lga}</td>
              </tr>
              <tr>
                <td>Ward</td>
                <td>{userProfile.ward}</td>
              </tr>
              <tr>
                <td>Martital Status</td>
                <td>{userProfile.maritalStatus}</td>
              </tr>
              <tr>
                <td>NIN</td>
                <td>{userProfile.nin}</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>{userProfile.occupation}</td>
              </tr>
              <tr>
                <td>Voters Reg. No.</td>
                <td>{userProfile.votersRegNo}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td>{userProfile._id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingIndicator />
      )}
      <a className="btn" onClick={() => handlePrint()}>
        Print Membership Card --
      </a>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const art = await axios.get(
    `https://rxedu-api.vercel.app/api/v1/member/${query.nin}`
  );
  return {
    props: {
      // memberProfile: art.data.data,
      memberProfile: art.data.doc,
    },
  };
}
