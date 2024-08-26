import React from "react";
import { useShoppingCart } from "../../hooks/hooks";
import {
  ActionButtons,
  QuantityControl,
} from "../CartModal/CartContentWithItems";
import { cn } from "../../lib/utils";

export default function CartContent() {
  const { items, increaseCartQuantity, decreaseCartQuantity, removeQuantity } =
    useShoppingCart();

  return (
    <section className="py-8   md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="lg:flex lg:items-start">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl border-r-[#1c1c1c39] pr-14 lg:border-r-[1px]">
            <PaymentForm />
          </div>

          <div className="max-w-4xl w-full ml-14">
            {items.map((item) => (
              <ProductDetail
                key={item.id}
                item={item}
                onRemove={removeQuantity}
                onIncrease={increaseCartQuantity}
                onDecrease={decreaseCartQuantity}
              />
            ))}

            <CheckoutSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

//Arreglado
const ProductDetail = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex gap-4 w-full items-center mb-3.5 pb-3.5 border-b-[1px] border-[#1c1c1c28]">
      <div className="w-[64px] aspect-square  flex items-center justify-center">
        <img
          className="h-10 w-10"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
          alt={`${item.name} image`}
        />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-sm">{item.name}</p>
          <p className="text-xs">
            Cantidad <span className="font-semibold">{item.quantity}</span>
          </p>
        </div>
        <p className="text-sm">
          <span className="text-sm">{item.price}</span> €
        </p>
      </div>
    </div>
  );
};

//Arreglado
const CheckoutSummary = () => (
  <div className="">
    <p className="text-xl font-semibold text-[#1c1c1c] mb-6 mt-4">Resumen</p>

    <div className="flex flex-col">
      <SummaryRow
        label="¿Tienes un código promocional?"
        value=""
        className="text-blue-500 hover:underline"
      />
      <SummaryRow label="Subtotal" value="$7,592.00" />
      <SummaryRow
        label="Gastos de envío y gestión estimados"
        value="Gratuito"
      />
      <SummaryRow label="Total" value="$8,191.00" isBold />
    </div>
  </div>
);
//Arreglado
const SummaryRow = ({ label, value, isBold = false, className = "" }) => (
  <div
    className={cn(
      "flex items-center justify-between mb-2",
      isBold ? "font-bold" : ""
    )}
  >
    <span className={cn("text-base text-[#1c1c1c]", className)}>{label}</span>
    <span className="text-base text-[#1c1c1c]">{value}</span>
  </div>
);

const PaymentForm = () => {
  return (
    <form className="w-full">
      <h2 className="text-xl font-semibold  sm:text-2xl">Contact</h2>
      <ContactSection />
      <h2 className="text-xl font-semibold  sm:text-2xl">Delivery</h2>
      <AddressSection />
      <h2 className="text-xl font-semibold  sm:text-2xl">Payment</h2>
      <PaymentsCards />

      <PaymentSection />
      <button
        type="button"
        className="min-w-[150px] w-full px-6 py-3.5 text-sm bg-gray-800 text-white rounded-sm hover:bg-[#111]"
      >
        Pay $750
      </button>
    </form>
  );
};

const ContactSection = () => (
  <div className="grid gap-4 mt-4 mb-8">
    <Input placeholder="Email" />
    <Checkbox label="Subscribe me to brand's offers and updates" />
  </div>
);

const AddressSection = () => (
  <div className="grid gap-4 mt-4 mb-8">
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

const PaymentSection = () => (
  <div className="grid gap-4 my-8">
    <Input placeholder="Cardholder's Name" />
    <div className="flex bg-white border-[1px] border-[#1c1c1c39] rounded-sm overflow-hidden">
      <CreditCardIcon />
      <Input type="number" placeholder="Card Number" className="border-none" />
    </div>
    <div className="grid grid-cols-2 gap-6">
      <Input type="number" placeholder="EXP." />
      <Input type="number" placeholder="CVV" />
    </div>
    <Checkbox label="I accept the Terms and Conditions" />
  </div>
);

const Input = ({ placeholder, type = "text", className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`px-4 py-4 bg-white text-gray-800 w-full text-sm outline-none border-[1px] border-[#1c1c1c39] rounded-sm ${className}`}
  />
);

const Checkbox = ({ label }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-sm"
    />
    <label className="ml-3 block text-sm">{label}</label>
  </div>
);

const CreditCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 ml-3"
    viewBox="0 0 291.764 291.764"
  >
    <path
      fill="#2394bc"
      d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.736 20.474 23.936 9.024 4.317 12.068 7.075 12.068 10.904-.1 5.864-7.264 8.548-13.924 8.548-9.287 0-14.354-1.334-22.04-4.633l-3.080-1.334-3.282 19.757c5.487 2.442 15.624 4.593 26.148 4.705 24.637 0 40.753-11.852 40.956-30.198.085-10.059-6.192-17.762-19.781-24.082zM238.29 87.178h-184.819c-14.24 0-25.766 11.527-25.766 25.766v66.96c0 14.239 11.527 25.766 25.766 25.766h184.819c14.239 0 25.766-11.527 25.766-25.766v-66.96c0-14.239-11.527-25.766-25.766-25.766zm-159.074 99.8H56.485v-91.122h22.731v91.122zm37.242-45.564l-22.781 63.7h-24.076l37.243-91.122h26.455l-24.075 63.727 25.6 27.395H136.36z"
    />
  </svg>
);

const PaymentsCards = () => {
  return (
    <div class="grid gap-4 sm:grid-cols-2 mt-4">
      <div class="flex items-center">
        <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
        <label for="card" class="ml-4 flex gap-2 cursor-pointer">
          <img
            src="https://readymadeui.com/images/visa.webp"
            class="w-12"
            alt="card1"
          />
          <img
            src="https://readymadeui.com/images/american-express.webp"
            class="w-12"
            alt="card2"
          />
          <img
            src="https://readymadeui.com/images/master.webp"
            class="w-12"
            alt="card3"
          />
        </label>
      </div>
      <div class="flex items-center">
        <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
        <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
          <img
            src="https://readymadeui.com/images/paypal.webp"
            class="w-20"
            alt="paypalCard"
          />
        </label>
      </div>
    </div>
  );
};
