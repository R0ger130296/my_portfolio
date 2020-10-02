import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#ModalCertificate");

const ModalCertificate = ({ image }) => {
  const [showModal, setValue] = useState(false);

  const showHideModal = () => {
    setValue(!showModal);
  };

  return (
    <div>
      <button onClick={showHideModal}>
        <i className="fas fa-eye px-2 text-orange-500 hover:text-orange-700 icon-beat"></i>
      </button>
      <Modal isOpen={showModal}>
        <div className="w-full text-center">
          <button onClick={showHideModal}>
            <i className="fas fa-times-circle text-4xl text-red-500 hover:text-red-700"></i>
          </button>
        </div>
        <img alt="pic" src={image} />
      </Modal>
    </div>
  );
};

export default ModalCertificate;
