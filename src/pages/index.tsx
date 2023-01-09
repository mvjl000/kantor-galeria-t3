import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import ReactModal from "react-modal";
import Modal from "../components/Modal";
import { CurrencyType } from "../types/types";
import { useState } from "react";

ReactModal.setAppElement("#__next");

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCurrency, setClickedCurrency] = useState<
    CurrencyType | undefined
  >(undefined);

  const currencies = trpc.currencies.getCurrencies.useQuery();

  const handleOpenModal = (currency: CurrencyType) => {
    document.body.classList.add("no-scroll");
    setIsModalOpen(true);
    setClickedCurrency(currency);
  };
  const handleCloseModal = () => {
    document.body.classList.remove("no-scroll");
    setIsModalOpen(false);
    setClickedCurrency(undefined);
  };

  return (
    <div style={{ height: "2000px", backgroundColor: "#aaa" }}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Wykres waluty"
      >
        <p>test</p>
      </Modal>
    </div>
  );
};

export default Home;
