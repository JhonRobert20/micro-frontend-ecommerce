import React from "react";

import PaymentForm from "./PaymentForm";
import PaymentSummary from "./PaymentSummary";

const PaymentContent = () => {
  return (
    <section className="py-8 md:py-16 max-w-screen-xl mx-auto px-4 2xl:px-0 lg:flex lg:items-start">
      <PaymentForm />
      <PaymentSummary />
    </section>
  );
};

export default PaymentContent;
