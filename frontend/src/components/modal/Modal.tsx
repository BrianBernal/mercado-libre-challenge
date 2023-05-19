// libraries
import { createPortal } from "react-dom";

// styles
import "./modal.scss";

interface IModalOverlay {
  onClose: () => void;
  children: React.ReactElement;
}
const ModalOverlay = ({ onClose, children }: IModalOverlay) => {
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <button className="modal__close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}
const Modal = ({ isOpen, onClose, children }: IModal) => {
  return isOpen
    ? createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        document.body
      )
    : null;
};

export default Modal;
