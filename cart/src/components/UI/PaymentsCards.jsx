import React from "react";
import PaymentOption from "./PaymentOption";
import SectionTitle from "../Payment/SectionTitle";

const PaymentsCards = () => {
  return (
    <>
      <SectionTitle title="Payment" />
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <PaymentOption
          id="card"
          images={[
            "https://readymadeui.com/images/visa.webp",
            "https://readymadeui.com/images/american-express.webp",
            "https://readymadeui.com/images/master.webp",
          ]}
          alt="card payment options"
          checked
        />
        <PaymentOption
          id="paypal"
          images={["https://readymadeui.com/images/paypal.webp"]}
          alt="paypal option"
        />
      </div>
    </>
  );
};

export default PaymentsCards;
