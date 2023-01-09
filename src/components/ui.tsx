import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const H1 = styled.h1`
  margin-top: 40px;
  padding: 0 20px;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xLarge};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.huge};
  }
`;

export const H2 = styled.h2`
  margin-top: 40px;
  padding: 0 20px;
  color: ${({ theme }) => theme.font.color.black};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xLarge};
  }
`;

interface LoaderProps {
  size: "big" | "small";
  color: "black" | "white";
}

export const Loader = styled.div<LoaderProps>`
  width: ${({ size }) => (size === "big" ? "40px" : "20px")};
  height: ${({ size }) => (size === "big" ? "40px" : "20px")};
  border: ${({ size }) => (size === "big" ? "5px" : "3px")} solid
    ${({ theme, color }) =>
      color === "black" ? theme.colors.black : theme.colors.white};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1.5s ease-out infinite;
`;
