import { CurrencyType, ReactFCWithProps } from "../../../types/types";
import {
  FlagWrapper,
  Wrapper,
  CurrencyName,
  CurrencyFullName,
  CurrencyInfoWrapper,
  CurrencyPriceWrapper,
} from "./Currency.styles";

interface CurrencyProps {
  data: CurrencyType;
  handleCurrencyClick: (currency: CurrencyType) => void;
}

const Currency: ReactFCWithProps<CurrencyProps> = ({
  data,
  handleCurrencyClick,
}) => {
  return (
    <Wrapper onClick={() => handleCurrencyClick(data)}>
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
    </Wrapper>
  );
};

export default Currency;
