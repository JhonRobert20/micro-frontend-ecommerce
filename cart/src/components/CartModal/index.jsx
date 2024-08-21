import React from "react";

import Modal from "../../components/UI/Modal";
import { modalAnimation } from "./animations";
import CartContent from "./CartContent";
import { ModalClose, ModalOpen } from "./ButtonsModal";
import { ModalTitle } from "./TitleModal";
import ModalFooter from "./Footer";

export default function Cart() {
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
