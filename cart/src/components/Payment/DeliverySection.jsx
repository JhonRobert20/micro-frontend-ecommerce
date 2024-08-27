import React from "react";
import Input from "../UI/Input";
import SectionTitle from "./SectionTitle";

const DeliverySection = () => {
  return (
    <div className="grid gap-4 mt-4 mb-8">
      <SectionTitle title="Delivery" />

      <Input placeholder="Country" />
      <div className="grid grid-cols-2 gap-3">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>
      <Input placeholder="Street" />
      <Input placeholder="House Number" />
      <div className="grid grid-cols-3 gap-3">
        <Input placeholder="Postal Code" />
        <Input placeholder="City" />
        <Input placeholder="Province" />
      </div>
      <Input placeholder="Phone" />
    </div>
  );
};

export default DeliverySection;
