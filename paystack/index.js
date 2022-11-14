import React from "react";
import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
};

export function Payer() {
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Pay",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return <PaystackButton {...componentProps} className="btn" />;
}
