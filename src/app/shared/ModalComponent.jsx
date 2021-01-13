import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = ({
  handleShow,
  handleClose,
  show,
  children,
  project,
}) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header>{children}</Modal.Header>
      <Modal.Body>
        <h2 className="modal-title">{project.title}</h2>
        <h5 className="modal-subtitle">{project.subtitle}</h5>
        <p>{project.content}</p>
      </Modal.Body>
      <Modal.Footer className={project.link ? "footer-buttons" : ""}>
        {project.link && (
          <Button href={project.link} target="_blank" variant="outline-danger">
            Visit Site
          </Button>
        )}

        <Button
          variant="light"
          style={{ fontWeight: "bold" }}
          onClick={handleClose}
        >
          X
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
