import React from "react";
import Modal from ".";
import Button from "../variant-button";


export default function ConfirmationModal({
  title,
  setShow,
  show,
  confirmLabel,
  declineLabel,
  onConfirm,
  onDecline,
}) {
  function handleConfirm() {
    onConfirm?.();
    setShow(false);
  }

  function handleDecline() {
    onDecline?.();
    setShow(false);
  }

  return (
    <Modal show={show} setShow={setShow}>
      <p className="text-center">{title}</p>
      <div className="flex justify-center gap-4">
        <Button onClick={handleConfirm}>
          {confirmLabel ? confirmLabel : "Okay"}
        </Button>
        <Button variant="secondary" onClick={handleDecline}>
          {declineLabel ? declineLabel : "Cancel"}
        </Button>
      </div>
    </Modal>
  );
}
