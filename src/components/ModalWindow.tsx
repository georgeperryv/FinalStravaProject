import { FunctionComponent } from "react";
import styles from "./ModalWindow.module.css";

type ModalWindowType = {
  onClose?: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowType> = ({ onClose }) => {
  return (
    <div className={styles.modalwindow}>
      <video className={styles.videomodal} controls>
        <source src={`https://www.youtube.com/watch?v=Q9GUbJcszfk&t=196s`} />
      </video>
    </div>
  );
};

export default ModalWindow;
