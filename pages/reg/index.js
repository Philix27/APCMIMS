import React from "react";
import { Landing } from "../../comps/global/Landing";

export default function RegistrationPage() {
  return (
    <div>
      <Landing
        title="Become an APC Member"
        imgUrl="images/contact.jpg"
        subtitle="Follow to the steps to be come a member."
      />
      <div className="registration">
        <a href="/reg/payment">
          <div className="card">
            <img src="/images/pay.jpg" alt="payment" />
            <div className="inner">
              <h3>Step 1</h3>
              <p>Make a payment.</p>
            </div>
          </div>
        </a>
        <a href="/reg/form">
          <div className="card">
            <img src="/images/form.jpg" alt="form" />
            <div className="inner">
              <h3>Step 2</h3>
              <p>Fill the form.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
