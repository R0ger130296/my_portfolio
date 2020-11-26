import React, { useState } from "react";
import Modal from "react-modal";

export default function ModalCertificate({ image }) {
  const [showModal, setShowModal] = useState(false);

  Modal.setAppElement("#ModalCertificate");

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>
        <i className="fas fa-eye px-2 text-orange-500 hover:text-orange-700 animate-pulse"></i>
      </button>
      <Modal isOpen={showModal}>
        <div className="w-full text-center">
          <button onClick={() => setShowModal(!showModal)}>
            <i className="fas fa-times-circle text-4xl text-red-500 hover:text-red-700"></i>
          </button>
        </div>
        <img alt="pic" src={image} />
      </Modal>
    </div>
  );
}
