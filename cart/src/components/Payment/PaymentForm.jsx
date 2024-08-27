import React from "react";

import ContactSection from "./ContactSection";
import DeliverySection from "./DeliverySection";
import PaymentSection from "./PaymentSection";
import SubmitButton from "./SubmitButton";

function PaymentForm() {
  return (
    <form className="flex-none lg:max-w-2xl xl:max-w-3xl border-r-[#1c1c1c39] pr-14 lg:border-r">
      <ContactSection />
      <DeliverySection />
      <PaymentSection />
      <SubmitButton text="Pay $750" />
    </form>
  );
}

export default PaymentForm;
