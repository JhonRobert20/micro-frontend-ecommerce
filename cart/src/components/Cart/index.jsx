import React from "react";
import { useShoppingCart } from "../../hooks/hooks";
import { cn } from "../../lib/utils";
import { LucideCreditCard } from "lucide-react";
export default function CartContent() {
  const { items, increaseCartQuantity, decreaseCartQuantity, removeQuantity } =
    useShoppingCart();

  return (
    <section className="py-8 md:py-16">
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

function ProductDetail({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="flex gap-4 w-full items-center mb-3.5 pb-3.5 border-b-[1px] border-[#1c1c1c28]">
      <div className="w-[64px] aspect-square flex items-center justify-center">
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
}

function CheckoutSummary() {
  return (
    <div>
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
}

function SummaryRow({ label, value, isBold = false, className = "" }) {
  return (
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
}

function PaymentForm() {
  return (
    <form className="w-full">
      <SectionTitle title="Contact" />
      <ContactSection />
      <SectionTitle title="Delivery" />
      <AddressSection />
      <SectionTitle title="Payment" />
      <PaymentsCards />
      <PaymentSection />
      <SubmitButton text="Pay $750" />
    </form>
  );
}

function SectionTitle({ title }) {
  return <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>;
}

function SubmitButton({ text }) {
  return (
    <button
      type="button"
      className="min-w-[150px] w-full px-6 py-3.5 text-sm bg-gray-800 text-white rounded-sm hover:bg-[#111]"
    >
      {text}
    </button>
  );
}

function ContactSection() {
  return (
    <div className="grid gap-4 mt-4 mb-8">
      <Input placeholder="Email" />
      <Checkbox label="Subscribe me to brand's offers and updates" />
    </div>
  );
}

function AddressSection() {
  return (
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
}

function PaymentSection() {
  return (
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
  );
}

function Input({ placeholder, type = "text", className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-4 bg-white text-gray-800 w-full text-sm outline-none border-[1px] border-[#1c1c1c39] rounded-sm ${className}`}
    />
  );
}

function Checkbox({ label }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-sm"
      />
      <label className="ml-3 block text-sm">{label}</label>
    </div>
  );
}

function CreditCardIcon() {
  return (
    <div className="flex items-center">
      <LucideCreditCard className="w-12" />
    </div>
  );
}

function PaymentsCards() {
  return (
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
  );
}

function PaymentOption({ id, images, alt, checked }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        className="w-5 h-5 cursor-pointer"
        id={id}
        defaultChecked={checked}
      />
      <label htmlFor={id} className="ml-4 flex gap-2 cursor-pointer">
        {images.map((src, index) => (
          <img src={src} className="w-12" alt={alt} key={index} />
        ))}
      </label>
    </div>
  );
}
