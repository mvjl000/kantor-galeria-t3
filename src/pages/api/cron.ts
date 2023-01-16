import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { PRICE_HISTORY_DAY_RANGE } from "../../config";
import { env } from "../../env/server.mjs";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

  try {
    const { authorization } = req.headers;

    if (authorization !== `Bearer ${env.CRON_API_KEY}`) {
      res.status(401).json({ success: false, message: "Wrong token!" });
    }

    const currencies = await prisma.currency.findMany();

    const date = new Date().toISOString();

    const currenciesToUpdate = currencies.map((currency) => {
      // If price_history length isn't greater than PRICE_HISTORY_DAY_RANGE it simply adds the latest price values
      if (currency.price_history.length < PRICE_HISTORY_DAY_RANGE) {
        return prisma.currency.update({
          where: {
            id: currency.id,
          },
          data: {
            price_history: {
              push: {
                buy: Number(currency.buy),
                sell: Number(currency.sell),
                date,
              },
            },
          },
        });
      }

      // Removes the oldest object and pushes the latest price values
      currency.price_history.shift();
      currency.price_history.push({
        buy: Number(currency.buy),
        sell: Number(currency.sell),
        date,
      });

      return prisma.currency.update({
        where: {
          id: currency.id,
        },
        data: {
          price_history: currency.price_history,
        },
      });
    });

    await Promise.allSettled(currenciesToUpdate);

    return res
      .status(200)
      .json({ success: true, message: "Price history updated." });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
}
