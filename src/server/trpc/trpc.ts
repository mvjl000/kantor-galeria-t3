import { TRPCError, initTRPC } from "@trpc/server";
import { TrpcContext } from "./context";

// Initialize trpc with context
const t = initTRPC.context<TrpcContext>().create();

export const router = t.router;

// Auth middleware
const isAuthed = t.middleware(({ next, ctx }) => {
  const { session } = ctx;

  if (!session || !session.accessToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: {
      session: session,
    },
  });
});

// Public prodecures
export const publicProcedure = t.procedure;

// Protected procedures
export const protectedProcedure = t.procedure.use(isAuthed);
