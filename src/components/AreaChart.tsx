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
import { monthsFromatterPL } from "../utils/formatters";
import { z } from "zod";
import { errorToast } from "../utils/toasts";
import { PriceHistory } from "../types/types";

interface AreaChartProps {
  price_history: PriceHistory;
}

const priceHistorySchema = z
  .object({
    date: z.string(),
    buy: z.number(),
    sell: z.number(),
  })
  .array();

const AreaChartComponent: React.FC<AreaChartProps> = ({ price_history }) => {
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
    return <p>Something went wrong</p>;
  }

  return (
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
        <Line type="monotone" dataKey="buy" stroke="#0052b4" />
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
