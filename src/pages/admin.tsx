import type { NextPage } from "next";
import CurrenciesTable from "../components/admin/CurrenciesTable/CurrenciesTable";
import CurrencyForm from "../components/admin/CurrencyForm/CurrencyForm";
import Options from "../components/admin/Options/Options";
import { H1 } from "../components/ui";
import { trpc } from "../utils/trpc";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const Admin: NextPage = () => {
  const { data, error, isLoading } = trpc.currencies.getCurrencies.useQuery();

  if (isLoading) {
    return <p>LOADING</p>;
  }

  if (error || !data) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <H1>Panel Administratora</H1>
      {/* @ts-ignore >> trpc package fault */}
      <CurrenciesTable currencies={data.currencies} />
      <CurrencyForm />
      <Options />
    </>
  );
};

export default withPageAuthRequired(Admin);
