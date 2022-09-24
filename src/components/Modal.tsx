import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Modal = (props) => {
  return <Dialog isOpen={true}>{props.children}</Dialog>;
};

export default Modal;
