import React from 'react';
import './Modal.css'; // Opcional: Importar CSS para estilizar a modal

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default Modal;