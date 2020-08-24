import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#ModalCertificate");

class ModalCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleOpenModal()}>
          <i className="fas fa-eye px-2 text-orange-500 hover:text-orange-700 icon-beat"></i>
        </button>
        <Modal isOpen={this.state.showModal}>
          <div className="w-full text-center">
            <button onClick={() => this.handleCloseModal()}>
              <i className="fas fa-times-circle text-4xl text-red-500 hover:text-red-700"></i>
            </button>
          </div>
          <img alt="pic" src={this.props.image} />
        </Modal>
      </div>
    );
  }
}

export default ModalCertificate;
