import Link from "next/link";
import React from "react";

export default function Objectives() {
  return (
    <div className="section" id="objectives">
      <h1 className="sectionTitle">Objectives</h1>
      <div className="sectionJumbotron">
        A membership card helps every member to promote the objectives and
        communicate to others the advantages of belonging. Whether membership is
        required or voluntary, each member becomes an ambassador with his or her
        ID card in hand. Helping Associations with members all around the
        country promoting the party.
      </div>
      <Link className="btn" href="/reg/form">
        Register
      </Link>
    </div>
  );
}
