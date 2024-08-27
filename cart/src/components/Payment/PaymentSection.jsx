import React from "react";
import Input from "../UI/Input.jsx";
import Checkbox from "../UI/Checkbox.jsx";
import CreditCardIcon from "../UI/CreditCardIcon.jsx";
import PaymentsCards from "../UI/PaymentsCards.jsx";
const PaymentSection = () => {
  return (
    <>
      <PaymentsCards />
      <div className="grid gap-4 my-8">
        <Input placeholder="Cardholder's Name" />
        <div className="flex bg-white border-[1px] border-[#1c1c1c39] rounded-sm overflow-hidden">
          <CreditCardIcon />
          <Input
            type="number"
            placeholder="Card Number"
            className="border-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input type="number" placeholder="EXP." />
          <Input type="number" placeholder="CVV" />
        </div>
        <Checkbox label="I accept the Terms and Conditions" />
      </div>
    </>
  );
};

export default PaymentSection;
