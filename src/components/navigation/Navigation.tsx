import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  BurgerButton,
  LogoWrapper,
  OuterWrapper,
  Wrapper,
  StyledNavigation,
} from "./Navigation.styles";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const toggleSideMenu = () => {
    if (window.innerWidth <= 1024) {
      document.body.classList.toggle("no-scroll-menu");
      setIsOpen(!isOpen);
    }
  };

  return (
    <OuterWrapper>
      <LogoWrapper>
        <Link href="/" passHref={true} legacyBehavior>
          <a>
            <Image
              src="/images/kantor_logo_black.png"
              alt="Logo kantoru"
              width={243}
              height={64}
            />
          </a>
        </Link>
      </LogoWrapper>
      <BurgerButton
        onClick={toggleSideMenu}
        isOpen={isOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
      >
        <div />
        <div />
        <div />
      </BurgerButton>
      <Wrapper isOpen={isOpen}>
        <div className="mobileNavLogo">
          <Image
            src="/images/kantor_logo_white.png"
            alt="Logo kantoru"
            width={121}
            height={30}
          />
        </div>
        <StyledNavigation>
          <ul>
            <li>
              <Link href="/" passHref={false} legacyBehavior>
                <a onClick={() => toggleSideMenu()}>KURSY WALUT</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt" passHref={false} legacyBehavior>
                <a onClick={() => toggleSideMenu()}>KONTAKT</a>
              </Link>
            </li>
            {user && (
              <li>
                <Link href="/admin" passHref={false} legacyBehavior>
                  <a onClick={() => toggleSideMenu()}>PANEL</a>
                </Link>
              </li>
            )}
          </ul>
        </StyledNavigation>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
