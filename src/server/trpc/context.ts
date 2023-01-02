import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { getSession as getSessionAuth0 } from "@auth0/nextjs-auth0";

// Function which provides context to all procedures. Runs with every request.
export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const getSession = () => {
    const session = getSessionAuth0(req, res);
    return session;
  };

  return {
    session: await getSession(),
  };
}

export type TrpcContext = inferAsyncReturnType<typeof createContext>;
