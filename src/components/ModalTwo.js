import React from "react";
import Modal from "react-bootstrap/Modal"; //Fehler weil schon selbst definiert
import Button from "react-bootstrap/Button";

function MyModal({ onClose, character }) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      {character.name}
      <Modal.Body></Modal.Body>
      {character.species}
      {character.status}
      <Modal.Footer>
        <Button variant="secondary" id="close" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Modal;
