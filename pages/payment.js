import Link from "next/link";
import React from "react";
import { Payer } from "../paystack";
import { Landing } from "./../comps/global/Landing";

function Payment() {
  return (
    <div>
      <Landing
        title="Become an APC Member"
        imgUrl="/images/bg.jpg"
        subtitle="Follow to the steps to be come a member."
      />
      <Payer />
    </div>
  );
}

export default Payment;
