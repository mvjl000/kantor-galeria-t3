import React, { useEffect, useState } from "react";
import { TableSubmitButton } from "../../buttons.styles";
import { trpc } from "../../../utils/trpc";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import TableCurrencyItem from "./TableCurrencyItem";
import {
  StyledTable,
  TableLoader,
  TableWrapper,
} from "./CurrenciesTable.styles";
import { Loader } from "../../ui";
import { errorToast } from "../../../utils/toasts";
import { CurrencyType } from "../../../types/types";

interface CurrenciesTableProps {
  currencies: CurrencyType[];
}

const CurrenciesTable: React.FC<CurrenciesTableProps> = ({ currencies }) => {
  const [items, setItems] = useState<CurrencyType[]>(currencies);
  const [isLoading, setIsLoading] = useState(false);

  const deleteCurrency = trpc.currencies.deleteCurrency.useMutation();
  const updateCurrencies = trpc.currencies.updateCurrencies.useMutation();
  const reindexCurrencies = trpc.currencies.reindexCurrencies.useMutation();
  const utils = trpc.useContext();

  useEffect(() => {
    // Runs every time the currencies change to keep the sortable items consistent with the currencies
    setItems(currencies);
  }, [currencies]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 2000,
        tolerance: 0,
      },
    })
  );

  const handleReindex = async (currencies: CurrencyType[]) => {
    const formattedCurrencies = currencies.map((item, index) => {
      return {
        ...item,
        index,
        buy: Number(item.buy),
        sell: Number(item.sell),
      };
    });

    setIsLoading(true);
    try {
      await reindexCurrencies.mutateAsync({ currencies: formattedCurrencies });
    } catch (error) {
      errorToast("Nie udało się zmienić kolejności waluty!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragStart = () => {
    document.body.classList.add("no-user-select");
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Checks if the item has been moved far enough
    if (over !== null && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const movedArray = arrayMove(items, oldIndex, newIndex);
        handleReindex(movedArray);

        return movedArray;
      });
    }

    document.body.classList.remove("no-user-select");
  };

  const handleDeleteCurrency = async (id: number) => {
    setIsLoading(true);
    try {
      await deleteCurrency.mutateAsync({ id });
      // Refetch table data
      await utils.currencies.getCurrencies.fetch();
    } catch (error) {
      errorToast("Nie udało się usunąć waluty!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveTable = async () => {
    setIsLoading(true);
    try {
      const currencies = items.map((currency) => ({
        id: currency.id,
        buy: Number(currency.buy),
        sell: Number(currency.sell),
      }));

      await updateCurrencies.mutateAsync({ currencies });
    } catch (error) {
      errorToast("Nie udało się zapisać zmian!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [currencyName, priceKey] = event.target.name.split("-");
    const { value } = event.target;

    const newCurrencies = items.map((currency) => {
      if (currencyName !== currency.name || !priceKey) return currency;

      return {
        ...currency,
        [priceKey]: value.replace(",", "."),
      };
    });
    setItems(newCurrencies);
  };

  return (
    <TableWrapper>
      {isLoading && (
        <TableLoader>
          <Loader size="big" color="black" />
        </TableLoader>
      )}
      <StyledTable>
        <thead>
          <tr>
            <th scope="col">Waluta</th>
            <th scope="col">Kupno</th>
            <th scope="col">Sprzedaż</th>
            <th scope="col" aria-label="Akcje">
              <span className="visually-hidden">Akcje</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((currency) => (
                <TableCurrencyItem
                  key={currency.id}
                  currency={currency}
                  handleInputChange={handleInputChange}
                  handleDeleteCurrency={handleDeleteCurrency}
                />
              ))}
            </SortableContext>
            <DragOverlay modifiers={[restrictToWindowEdges]} />
          </DndContext>
        </tbody>
      </StyledTable>
      <TableSubmitButton
        disabled={false}
        onClick={handleSaveTable}
        aria-label="Zapisz"
      >
        Zapisz
      </TableSubmitButton>
    </TableWrapper>
  );
};

export default CurrenciesTable;
