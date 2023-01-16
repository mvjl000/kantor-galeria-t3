import ReactModal from "react-modal";
import CloseIcon from "../../public/icons/close-icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import { flexCenter } from "../styles/mixins";
import { ReactFCWithProps } from "../types/types";

export const StyledModal = styled(ReactModal)`
  width: 90vw;
  height: 65vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 0;
  background-color: #fff;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  outline: none;
  border-radius: 10px;
  position: relative;

  @media (orientation: landscape) {
    height: 75vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 60vh;
    width: 80vw;
  }
`;

export const CloseButton = styled.button`
  ${flexCenter};
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.15s;

  &:hover {
    background-color: #efefef;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
}

const Modal: ReactFCWithProps<ModalProps> = (props) => {
  return (
    <StyledModal {...props}>
      <CloseButton
        type="button"
        aria-label="Zamknij wykres"
        onClick={props.onRequestClose}
      >
        <span className="visually-hidden">Zamknij wykres</span>
        <Image
          src={CloseIcon}
          alt="Ikona zamknięcia"
          width={25}
          height={25}
          aria-label="Zamknij"
        />
      </CloseButton>
      {props.children}
    </StyledModal>
  );
};

export default Modal;
