"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import CloseSVG from "/public/assets/images/close-icon.svg";
import { useModal } from "./context";

export const Modal = () => {
  const { isOpen, closeModal, title, content } = useModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="modal fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-80 z-50 p-2.5"
    >
      <DialogPanel className="bg-white text-gray-900 rounded-xl p-6 mr-4 max-w-md w-full shadow-lg lg:min-w-4xl">
        <div className="max-h-[80vh] overflow-hidden flex flex-col">
          <div className="flex justify-between gap-4">
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
            <button onClick={closeModal}>
              <CloseSVG className="w-8 h-auto text-gray-700 hover:text-gray-900 cursor-pointer" />
            </button>
          </div>
          <div className="modal-content-container pt-3 pb-4 pr-2 font-normal text-left h-full overflow-y-auto">
            {content}
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
