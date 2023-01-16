import Image from "next/image";
import { CurrencyType, ReactFCWithProps } from "../../../types/types";
import {
  FlagWrapper,
  Wrapper,
  CurrencyName,
  CurrencyFullName,
  CurrencyInfoWrapper,
  CurrencyPriceWrapper,
  ChartIconWrapper,
} from "./Currency.styles";
import ChartIcon from "../../../../public/icons/chart.svg";

interface CurrencyProps {
  data: CurrencyType;
  handleCurrencyClick: (currency: CurrencyType) => void;
}

const Currency: ReactFCWithProps<CurrencyProps> = ({
  data,
  handleCurrencyClick,
}) => {
  return (
    <Wrapper
      onClick={() => handleCurrencyClick(data)}
      aria-label="Otwórz wykres"
    >
      <CurrencyInfoWrapper>
        <FlagWrapper>
          <img alt={`flaga ${data.name}`} src={data.image} />
        </FlagWrapper>
        <CurrencyName>
          <span>{data.name} / </span>PLN
        </CurrencyName>
        <CurrencyFullName>{data.fullname}</CurrencyFullName>
      </CurrencyInfoWrapper>
      <CurrencyPriceWrapper>
        <p>
          Kupno: <span>{Number(data.buy)}</span>
        </p>
        <p>
          Sprzedaż: <span>{Number(data.sell)}</span>
        </p>
      </CurrencyPriceWrapper>
      <ChartIconWrapper>
        <Image src={ChartIcon} width={25} height={25} alt="Wykres" />
        <span className="visually-hidden">Dostępny wykres</span>
      </ChartIconWrapper>
    </Wrapper>
  );
};

export default Currency;
