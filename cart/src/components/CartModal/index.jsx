import React from "react";

import Modal from "../../components/UI/Modal";
import { modalAnimation } from "./Animation";
import CartContent from "./Content/index";
import { ModalClose, ModalOpen } from "./ButtonsModal";
import { ModalTitle } from "./TitleModal";
import ModalFooter from "./Footer";

export default function Cart() {
  return (
    <Modal
      trigger={<ModalOpen />}
      contentClassName="z-20 fixed top-0 right-0 h-full w-[40vw] max-w-[40vw] bg-white flex flex-col justify-between"
      title={<ModalTitle />}
      content={<CartContent />}
      footerContent={<ModalFooter />}
      modalClose={<ModalClose />}
      modalAnimation={modalAnimation()}
      border={true}
    />
  );
}
