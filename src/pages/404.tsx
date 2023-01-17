import type { NextPage } from "next";
import { ErrorWrapper, H1, Timer } from "../components/ui";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page404: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ErrorWrapper>
      <p className="title">Strona {router.asPath} nie istnieje</p>
      <p className="message">Zaraz nastąpi przekierowanie na stronę główną</p>
      <p className="code">404</p>
      <Timer />
    </ErrorWrapper>
  );
};

export default Page404;
