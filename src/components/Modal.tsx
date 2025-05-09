import React from "react";
import "./modal.scss";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? "is-active" : ""} mod`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        {title && (
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" aria-label="close" onClick={onClose}></button>
          </header>
        )}
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
