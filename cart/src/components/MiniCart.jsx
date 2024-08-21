import React from "react";
import { useNavigate } from "react-router-dom";

import IconNavBtn from "./UI/buttonNav";
import Modal from "../components/UI/Modal";
import { modalAnimation } from "./CartModal/animations";
import CartContent from "./CartModal/CartContent";
import { ModalClose, ModalOpen } from "./CartModal/ButtonsModal";
import { ModalTitle } from "./CartModal/TitleModal";
import ModalFooter from "./CartModal/Footer";

// Main component for the MiniCart
export default function MiniCart() {
  const navigate = useNavigate();

  return (
    <Modal
      trigger={<ModalOpen />}
      contentClassName="z-50 fixed top-0 right-0 h-full w-9/10 max-w-[450px] bg-white p-6 flex flex-col justify-between"
      title={<ModalTitle />}
      content={<CartContent />}
      footerContent={<ModalFooter />}
      modalClose={<ModalClose />}
      modalAnimation={modalAnimation()}
    />
  );
}
