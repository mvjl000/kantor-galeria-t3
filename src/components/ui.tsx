import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { flexColumnCenter } from "../styles/mixins";

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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 92px;
  width: 100%;

  label {
    font-size: ${({ theme }) => theme.font.size.xSmall};
    font-weight: ${({ theme }) => theme.font.weight.medium};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }

  p {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    color: red;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font.size.xSmall};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 85px;
  column-gap: 25px;
  width: 100%;

  p {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    color: red;
  }
`;

interface LoaderProps {
  size: "big" | "small";
  color: "black" | "white";
}

export const LoaderWrapper = styled.div`
  ${flexColumnCenter};
  gap: 5rem;
  padding: 4rem;
  margin: 10vh auto 0;
  width: 85%;
  max-width: 1200px;
  background-color: #f0f0f0;
  border-radius: 8px;

  ${({ theme }) => theme.mq.tablet} {
    width: 65%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }

  p.title {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.light};
    text-align: center;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    p.title {
      font-size: ${({ theme }) => theme.font.size.xLarge};
    }
  }
`;

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

export const ErrorWrapper = styled.div`
  padding: 7rem 4rem;
  margin: 10vh auto 0;
  width: 85%;
  max-width: 1200px;
  background-color: #fdc7c7;
  border-radius: 8px;
  color: #d40000;

  ${({ theme }) => theme.mq.tablet} {
    width: 75%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 65%;
  }

  p.title {
    font-size: ${({ theme }) => theme.font.size.large};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-align: center;
  }
  p.message {
    margin-top: 30px;
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.light};
    text-align: center;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    p.title {
      font-size: ${({ theme }) => theme.font.size.xLarge};
    }
    p.message {
      font-size: ${({ theme }) => theme.font.size.large};
    }
  }
`;
