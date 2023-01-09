import React from "react";
import ReactModal from "react-modal";
import CloseIcon from "../../public/icons/close-icon.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import { flexCenter } from "../styles/mixins";
import { ReactFCWithProps } from "../types/types";

export const StyledModal = styled(ReactModal)`
  width: 90vw;
  height: 400px;
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

  ${({ theme }) => theme.mq.desktop} {
    width: 80vw;
    max-width: 1200px;
  }
`;

export const CloseButton = styled.button`
  ${flexCenter};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
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
        <Image src={CloseIcon} alt="Ikona zamknięcia" aria-label="Zamknij" />
      </CloseButton>
      {props.children}
    </StyledModal>
  );
};

export default Modal;
