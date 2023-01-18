import React, { useMemo } from "react";
import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "@emotion/styled";
import { z } from "zod";
import { monthsFromatterPL } from "../utils/formatters";
import { errorToast } from "../utils/toasts";
import { PriceHistory } from "../types/types";
import { ErrorWrapper } from "./ui";

const ChartTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;
  letter-spacing: 2px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

interface AreaChartProps {
  price_history: PriceHistory;
  currencyName: string;
}

const priceHistorySchema = z
  .object({
    date: z.string(),
    buy: z.number(),
    sell: z.number(),
  })
  .array();

const AreaChartComponent: React.FC<AreaChartProps> = ({
  price_history,
  currencyName,
}) => {
  const yAxisRange = useMemo(() => {
    // Validates price_history type
    const { success } = priceHistorySchema.safeParse(price_history);

    if (!success) {
      errorToast("Nie udało się stworzyć wykresu!");
      return false;
    }

    const yAxisRangeValues = price_history.flatMap(({ buy, sell }: any) => {
      return [buy, sell];
    });

    // Subtracts one tenth so that the lowest point is not on the X axis - just for the aesthetics
    const minValue = Math.min(...yAxisRangeValues) - 0.1;
    const maxValue = Math.max(...yAxisRangeValues) + 0.1;

    return [Number(minValue.toFixed(3)), Number(maxValue.toFixed(3))];
  }, []);

  if (!price_history || yAxisRange === false) {
    return (
      <ErrorWrapper>
        <p className="title">Upsss, nie udało się stworzyć wykresu!</p>
        <p className="message">
          {" "}
          wystąpił problem z danymi. Spróbuj ponownie później
        </p>
      </ErrorWrapper>
    );
  }

  return (
    <>
      <ChartTitle>
        <span>{currencyName}/</span>PLN
      </ChartTitle>
      <ResponsiveContainer width="99%" height="99%">
        <LineChart
          data={price_history}
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="date"
            tickFormatter={(dateString) => {
              const date = new Date(dateString);

              return `${date.getDate()} ${monthsFromatterPL(date.getMonth())}`;
            }}
          />
          <YAxis domain={yAxisRange} />
          <Tooltip
            labelFormatter={(dateString) => {
              const date = new Date(dateString);

              return `${date.getDate()} ${monthsFromatterPL(date.getMonth())}`;
            }}
            formatter={(value: number, name: string) => [
              value,
              name === "buy" ? "Kupno" : "Sprzedaż",
            ]}
          />
          <Legend
            formatter={(value) => (value === "buy" ? "Kupno" : "Sprzedaż")}
          />
          <Line type="monotone" dataKey="buy" stroke="#a09d09" />
          <Line type="monotone" dataKey="sell" stroke="#1b78c4" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartComponent;
