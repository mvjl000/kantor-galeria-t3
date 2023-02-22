import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import ReactModal from "react-modal";
import Modal from "../components/Modal";
import { CurrencyType } from "../types/types";
import { useState } from "react";
import CurrenciesList from "../components/currencies/CurrenciesList/CurrenciesList";
import Currency from "../components/currencies/Currency/Currency";
import AreaChartComponent from "../components/AreaChart";
import { ErrorWrapper, InfoText } from "../components/ui";
import {
  CurrencyInfoWrapper,
  CurrencyPriceWrapper,
  CurrencySkeletonLoader,
} from "../components/currencies/Currency/Currency.styles";

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

  if (error) {
    return (
      <ErrorWrapper>
        <p className="title">Upsss, coś poszło nie tak :(</p>
        <p className="message">Odśwież stronę lub spróbuj ponownie później</p>
      </ErrorWrapper>
    );
  }

  if (isLoading) {
    return (
      <CurrenciesList>
        {Array.from(Array(25).keys()).map((item) => (
          <CurrencySkeletonLoader key={item}>
            <CurrencyInfoWrapper>
              <div className="image" />
              <div className="name" />
              <div className="fullname" />
            </CurrencyInfoWrapper>
            <CurrencyPriceWrapper>
              <div className="price" />
              <div className="price" />
            </CurrencyPriceWrapper>
          </CurrencySkeletonLoader>
        ))}
      </CurrenciesList>
    );
  }

  if (!data) {
    return (
      <ErrorWrapper>
        <p className="title">Upsss, coś poszło nie tak :(</p>
        <p className="message">
          Brak danych. Odśwież stronę lub spróbuj ponownie później
        </p>
      </ErrorWrapper>
    );
  }

  return (
    <>
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
            <AreaChartComponent
              currencyName={clickedCurrency.name}
              price_history={clickedCurrency.price_history}
            />
          )}
        </Modal>
      </CurrenciesList>
      <InfoText>
        Strona ma charakter informacyjny, podana cena nie jest ceną ostateczną.
        Transakcje ustalamy wyłącznie na miejscu w kantorze.
      </InfoText>
    </>
  );
};

export default Home;
