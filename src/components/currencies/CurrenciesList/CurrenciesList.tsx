import { ReactFC } from "../../../types/types";
import { Wrapper } from "./CurrenciesList.styles";

const CurrenciesList: ReactFC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CurrenciesList;
