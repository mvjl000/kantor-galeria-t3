import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

const prisma = new PrismaClient();

export const currenciesRouter = router({
  // CREATE
  // createCurrency: protectedProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       image: z.string(),
  //       fullname: z.string(),
  //       buy: z.number(),
  //       sell: z.number(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     const count = await prisma.currency.count();
  //     const date = new Date().toISOString();
  //     const currency = await prisma.currency.create({
  //       data: {
  //         ...input,
  //         index: count,
  //         price_history: [{ date, sell: input.sell, buy: input.buy }],
  //       },
  //     });
  //     return currency.fullname;
  //   }),
  // // READ
  // getCurrencies: publicProcedure.query(async () => {
  //   const currencies = await prisma.currency.findMany({
  //     orderBy: {
  //       index: "asc",
  //     },
  //   });
  //   return {
  //     currencies,
  //   };
  // }),
  // // UPDATE
  // updateCurrencies: protectedProcedure
  //   .input(
  //     z.object({
  //       currencies: z
  //         .object({
  //           id: z.number(),
  //           buy: z.number(),
  //           sell: z.number(),
  //         })
  //         .array(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     const currenciesToUpdate: Prisma.Prisma__CurrencyClient<
  //       Currency,
  //       never
  //     >[] = [];
  //     input.currencies.forEach((currency) => {
  //       const currencyUpdateRequest = prisma.currency.update({
  //         where: {
  //           id: currency.id,
  //         },
  //         data: {
  //           buy: currency.buy,
  //           sell: currency.sell,
  //         },
  //       });
  //       currenciesToUpdate.push(currencyUpdateRequest);
  //     });
  //     try {
  //       await Promise.allSettled(currenciesToUpdate);
  //       return {
  //         status: 200,
  //       };
  //     } catch (error) {
  //       return {
  //         status: 500,
  //       };
  //     }
  //   }),
  // reindexCurrencies: protectedProcedure
  //   .input(
  //     z.object({
  //       currencies: z
  //         .object({
  //           id: z.number(),
  //           index: z.number(),
  //           name: z.string(),
  //           fullname: z.string(),
  //           image: z.string(),
  //           buy: z.number(),
  //           sell: z.number(),
  //           price_history: z.any().array(),
  //         })
  //         .array(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     try {
  //       await prisma.currency.deleteMany({});
  //       await prisma.currency.createMany({
  //         data: input.currencies,
  //       });
  //       return {
  //         status: 200,
  //       };
  //     } catch (error) {
  //       return {
  //         status: 500,
  //       };
  //     }
  //   }),
  // // DELETE
  // deleteCurrency: protectedProcedure
  //   .input(
  //     z.object({
  //       id: z.number(),
  //     })
  //   )
  //   .mutation(async ({ input }) => {
  //     try {
  //       const deleteCurrency = await prisma.currency.delete({
  //         where: {
  //           id: input.id,
  //         },
  //       });
  //       return {
  //         currencyId: deleteCurrency.id,
  //         status: 200,
  //       };
  //     } catch (error) {
  //       return {
  //         currencyId: input.id,
  //         status: 500,
  //       };
  //     }
  //   }),
});
