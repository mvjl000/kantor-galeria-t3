import styled from "@emotion/styled";
import { flexBetween, flexColumnCenter } from "../../styles/mixins";

interface SideMenuProps {
  isOpen: boolean;
}

export const OuterWrapper = styled.div`
  ${flexBetween};
  padding: 25px;
  width: 100%;
`;

export const Wrapper = styled.div<SideMenuProps>`
  ${flexColumnCenter}
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 50px;
  z-index: ${({ theme }) => theme.zIndex.menu};

  div.mobileNavLogo {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 0;

    div.mobileNavLogo {
      display: none;
    }
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    li {
      margin: 50px 0;
      a {
        text-decoration: none;
        font-family: ${({ theme }) => theme.font.family.josefin};
        font-size: ${({ theme }) => theme.font.size.large};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;

    ul {
      display: flex;

      li {
        margin: 0 10px;
        padding: 0 10px;
        border-radius: 10px;
        a {
          font-size: ${({ theme }) => theme.font.size.large};
          color: ${({ theme }) => theme.colors.black};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 200px !important;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 243px !important;
  }
`;

export const BurgerButton = styled.button<SideMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 3.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.burger};

  div {
    width: 4rem;
    height: 0.3rem;
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.black};
    position: relative;
  }
  div:nth-of-type(1),
  div:nth-of-type(2) {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
