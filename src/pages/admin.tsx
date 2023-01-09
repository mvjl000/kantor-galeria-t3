import type { NextPage } from "next";
import CurrenciesTable from "../components/admin/CurrenciesTable/CurrenciesTable";
import { H1 } from "../components/ui";
import { trpc } from "../utils/trpc";

const Admin: NextPage = () => {
  const { data, error, isLoading } = trpc.currencies.getCurrencies.useQuery();

  if (error || !data) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <H1>Panel Administratora</H1>
      {/* @ts-ignore >> trpc package fault */}
      <CurrenciesTable currencies={data.currencies} />
    </>
  );
};

export default Admin;
