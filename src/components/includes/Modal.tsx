import React, { useState } from "react";
import { Transition } from "@tailwindui/react";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ visible, children, setVisible }) => {
  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-100"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed z-40 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0"
            aria-hidden="true"
            onClick={() => setVisible(false)}
          >
            <div className="absolute inset-0 h-full w-full bg-gray-500 opacity-75 transition-opacity"></div>
          </div>

          <Transition
            show={visible}
            enter="transition-transform ease-out transform duration-300"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="ease-in transform duration-300"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-transform sm:my-8 sm:align-middle z-40"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {children}
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  );
};

export const RodalModal: React.FC<Props> = ({
  visible,
  children,
  setVisible,
}) => {
  return (
    <Rodal
      visible={visible}
      animation="slideDown"
      onClose={() => setVisible(false)}
      showCloseButton={false}
      customStyles={{
        height: "fit-content",
        width: "fit-content",
        padding: "0",
      }}
    >
      {children}
    </Rodal>
  );
};

export default Modal;
