import { router } from "../trpc";
import { currenciesRouter } from "./currencies";

export const appRouter = router({
  currencies: currenciesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
