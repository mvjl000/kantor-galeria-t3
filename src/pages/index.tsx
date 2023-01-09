import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import ReactModal from "react-modal";
import Modal from "../components/Modal";
import { CurrencyType } from "../types/types";
import { useState } from "react";
import CurrenciesList from "../components/currencies/CurrenciesList/CurrenciesList";
import Currency from "../components/currencies/Currency/Currency";
import AreaChartComponent from "../components/AreaChart";

ReactModal.setAppElement("#__next");

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCurrency, setClickedCurrency] = useState<
    CurrencyType | undefined
  >(undefined);

  const { data, error, isLoading } = trpc.currencies.getCurrencies.useQuery();

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

  if (error || !data) {
    return <p>Something went wrong</p>;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <CurrenciesList>
      {data.currencies.map((item) => (
        <Currency
          key={item.id}
          // @ts-ignore >> trpc package fault
          data={item}
          handleCurrencyClick={handleOpenModal}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Wykres waluty"
      >
        {clickedCurrency && (
          <AreaChartComponent price_history={clickedCurrency.price_history} />
        )}
      </Modal>
    </CurrenciesList>
  );
};

export default Home;
