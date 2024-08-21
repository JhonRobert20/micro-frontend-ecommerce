import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const Modal = ({
  classNameModal,
  trigger,
  contentClassName,
  title,
  content,
  footerContent,
  modalClose,
  modalAnimation,
  border = false,
}) => (
  <Dialog.Root>
    <Dialog.Trigger>{trigger}</Dialog.Trigger>
    <Dialog.Portal className={classNameModal}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, transition: { delay: 0.2 } }}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/25" />
      </motion.div>
      <Dialog.Content className="relative">
        <motion.div {...modalAnimation} className={contentClassName}>
          <section>
            <Dialog.Title className="w-full flex justify-between items-center border-[1px] border-b-[#f7f3ed]">
              {title}
              <Dialog.Close>{modalClose}</Dialog.Close>
            </Dialog.Title>
            <Dialog.Description asChild>{content}</Dialog.Description>
          </section>
          <Dialog.Close>{footerContent}</Dialog.Close>
        </motion.div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
