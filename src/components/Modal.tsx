import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Modal = ({ children, isOpen }) => {
  return (
    <Dialog className="w-[40%]" isOpen={isOpen}>
      {children}
    </Dialog>
  );
};

export default Modal;
