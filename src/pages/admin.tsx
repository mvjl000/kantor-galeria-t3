import type { NextPage } from "next";
import Head from "next/head";
import CurrenciesTable from "../components/admin/CurrenciesTable/CurrenciesTable";
import CurrencyForm from "../components/admin/CurrencyForm/CurrencyForm";
import Options from "../components/admin/Options/Options";
import { ErrorWrapper, H1, Loader, LoaderWrapper } from "../components/ui";
import { trpc } from "../utils/trpc";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const Admin: NextPage = () => {
  const { data, error, isLoading } = trpc.currencies.getCurrencies.useQuery();

  const isTableError = error || !data;

  if (isLoading) {
    return (
      <LoaderWrapper>
        <p className="title">Ładowanie panelu administratora</p>
        <Loader color="black" size="big"></Loader>
      </LoaderWrapper>
    );
  }

  return (
    <>
      <Head>
        <title>Kantor | Panel Administratora</title>
      </Head>
      <H1>Panel Administratora</H1>
      {isTableError ? (
        <ErrorWrapper>
          <p className="title">Upsss, coś poszło nie tak :(</p>
          <p className="message">
            Nie udało się pobrać walut do tabeli.
            <br />
            Odśwież stronę lub spróbuj ponownie później
          </p>
        </ErrorWrapper>
      ) : (
        <>
          {/* @ts-ignore >> trpc package fault */}
          <CurrenciesTable currencies={data.currencies} />
        </>
      )}

      <CurrencyForm />
      <Options />
    </>
  );
};

export default withPageAuthRequired(Admin);
