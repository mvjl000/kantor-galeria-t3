import React, { useState } from "react";
import { CancelButton, DeleteButton } from "../../buttons.styles";
import { FlagWrapper } from "../../currencies/Currency/Currency.styles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import ActionDots from "../../../../public/icons/actionDots.svg";
import { CurrencyType, ReactFCWithProps } from "../../../types/types";

interface TableCurrencyItemProps {
  currency: CurrencyType;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteCurrency: (id: number) => void;
}

const TableCurrencyItem: ReactFCWithProps<TableCurrencyItemProps> = ({
  currency,
  handleInputChange,
  handleDeleteCurrency,
}) => {
  const [areActionsVisible, setAreActionsVisible] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: currency.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleToggleActions = () => {
    setAreActionsVisible(!areActionsVisible);
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <td className="flag-cell">
        <div>
          <FlagWrapper>
            <img alt={`flaga ${currency.name}`} src={currency.image} />
          </FlagWrapper>
          {currency.name}
        </div>
      </td>
      {areActionsVisible ? (
        <>
          <td colSpan={2} className="delete-td">
            <div>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteCurrency(currency.id)}
              >
                Usuń {currency.name}
              </DeleteButton>
              <CancelButton type="button" onClick={handleToggleActions}>
                Anuluj
              </CancelButton>
            </div>
          </td>
          <td>
            <button
              type="button"
              className="currency-actions"
              aria-label="Akcje"
              onClick={handleToggleActions}
            >
              <Image src={ActionDots} width={5} height={25} alt="Akcje" />
            </button>
          </td>
        </>
      ) : (
        <>
          <td>
            <input
              name={`${currency.name}-buy`}
              value={currency.buy.toString()}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              name={`${currency.name}-sell`}
              value={currency.sell.toString()}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <button
              type="button"
              className="currency-actions"
              aria-label="Akcje"
              onClick={handleToggleActions}
            >
              <Image src={ActionDots} width={5} height={25} alt="Akcje" />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableCurrencyItem;
