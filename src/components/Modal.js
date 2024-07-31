import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Modal;

