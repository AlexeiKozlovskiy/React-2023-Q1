import './modal.scss';
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="modal__background" onClick={onClose}>
      <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          X
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}
