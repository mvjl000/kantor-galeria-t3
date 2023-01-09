import Link from "next/link";
import React from "react";
import { H2 } from "../../ui";
import { Wrapper, SignOutButton } from "./Options.styles";

const Options: React.FC = () => {
  return (
    <Wrapper>
      <H2>Opcje</H2>
      <Link href="/api/auth/logout" passHref={false}>
        <SignOutButton>Wyloguj się</SignOutButton>
      </Link>
    </Wrapper>
  );
};

export default Options;
