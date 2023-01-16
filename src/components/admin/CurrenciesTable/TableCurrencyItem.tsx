import React, { useState } from "react";
import { CancelButton, DeleteButton } from "../../buttons.styles";
import { FlagWrapper } from "../../currencies/Currency/Currency.styles";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CurrencyType, ReactFCWithProps } from "../../../types/types";
import { TableActionsButton } from "./CurrenciesTable.styles";

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
  const {
    attributes,
    listeners,
    transform,
    transition,
    setDraggableNodeRef,
    setDroppableNodeRef,
  } = useSortable({
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
    <tr ref={setDroppableNodeRef} style={style}>
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
            <TableActionsButton
              onClick={handleToggleActions}
              ref={setDraggableNodeRef}
              {...attributes}
              {...listeners}
              type="button"
              aria-label="Akcje"
            >
              <span />
              <span className="visually-hidden">
                Przeciągnij aby zmienić kolejność
              </span>
            </TableActionsButton>
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
            <TableActionsButton
              onClick={handleToggleActions}
              ref={setDraggableNodeRef}
              {...attributes}
              {...listeners}
              type="button"
              aria-label="Akcje"
            >
              <span />
              <span className="visually-hidden">
                Przeciągnij aby zmienić kolejność
              </span>
            </TableActionsButton>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableCurrencyItem;
