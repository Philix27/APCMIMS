import React, { useState, useEffect } from "react";
import { Landing } from "../comps/global/Landing";
import Objectives from "../comps/global/objectives";
import Membership from "../comps/membership";
import Link from "next/link";
import Axios from "axios";

export default function Home() {
  const [member, setMember] = useState();
  const [notMember, setNotMember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    useEffect(() => {
      axios
        .get(`https://rxedu-api.vercel.app/api/v1/member/${value}`)
        .then((response) => {
          setMember(response.data.doc);
          console.log("Working");
          console.log(response.data.doc);
          console.log(`Length: ${response}`);
        })
        .catch(() => {
          console.log("Opps an error ocured - Local");
        });
    }, {});
  };

  return (
    <>
      <Landing
        title="Become a member"
        imgUrl="images/bg.jpg"
        subtitle="JUSTICE, PEACE & UNITY"
        opacity={0.45}
      />
      <Objectives />
      <Membership handleSubmit={handleSubmit} />
    </>
  );
}
