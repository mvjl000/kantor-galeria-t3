import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Wrapper, InnerWrapper, License, CopyRight } from "./Footer.styles";

const Footer: React.FC = () => {
  const { user } = useUser();

  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <InnerWrapper>
        <ul>
          <li>
            <Link href="/" passHref={false} legacyBehavior>
              <a>KURSY WALUT</a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt" passHref={false} legacyBehavior>
              <a>KONTAKT</a>
            </Link>
          </li>
          {user && (
            <li>
              <Link href="/admin" passHref={false} legacyBehavior>
                <a>PANEL</a>
              </Link>
            </li>
          )}
        </ul>
        <div>
          <License>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </License>
          <CopyRight>
            Made by <a href="https://mpiskadlo.com">Miłosz Piskadło</a>
          </CopyRight>
          <CopyRight>
            Copyright © {year} Kantor Wymiany Walut A. Delikat, P. Piskadło
            sp.j.
          </CopyRight>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
