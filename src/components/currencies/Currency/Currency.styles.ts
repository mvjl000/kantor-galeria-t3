import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { flexCenter, flexLeft } from "../../../styles/mixins";

const fadeLight = keyframes`
  0% {
    background-color: rgba(238, 238, 238, 1);
  }
  50% {
    background-color: rgba(238, 238, 238, 0.8);
  }
  100% {
    background-color: rgba(238, 238, 238, 1);
  }
`;

const fadeDark = keyframes`
  0% {
    background-color: rgba(221, 221, 221, 1);
  }
  50% {
    background-color: rgba(221, 221, 221, 0.8);
  }
  100% {
    background-color: rgba(221, 221, 221, 1);
  }
`;

export const Wrapper = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 15px;
  padding: 10px 35px 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s;
  background-color: #fff;
  position: relative;

  ${({ theme }) => theme.mq.desktop + "and (orientation: landscape)"} {
    padding: 15px 35px 15px 20px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 17px 35px 17px 22px;
  }

  ${({ theme }) => theme.mq.huge} {
    padding: 17px 35px 17px 22px;
  }
`;

export const CurrencyInfoWrapper = styled.div`
  ${flexLeft};
`;

export const CurrencyPriceWrapper = styled.div`
  ${flexCenter}
  gap: 20px;
  p {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.font.color.black};
    font-weight: ${({ theme }) => theme.font.weight.light};
    span {
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;

export const FlagWrapper = styled.div`
  min-height: 35px;
  min-width: 35px;
`;

export const CurrencyName = styled.p`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.font.color.black};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: left;
  span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.font.color.black};
  }
`;

export const CurrencyFullName = styled.p`
  margin-left: 12px;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  color: ${({ theme }) => theme.font.color.grey};
  font-weight: ${({ theme }) => theme.font.weight.light};
  text-align: left;
`;

export const ChartIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  ${({ theme }) => theme.mq.desktop + "and (orientation: landscape)"} {
    top: 15px;
    right: 20px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: 17px;
    right: 20px;
  }

  ${({ theme }) => theme.mq.huge} {
    top: 17px;
    right: 20px;
  }
`;

export const CurrencySkeletonLoader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 15px;
  padding: 10px 35px 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  position: relative;

  ${({ theme }) => theme.mq.desktop + "and (orientation: landscape)"} {
    padding: 15px 35px 15px 20px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 17px 35px 17px 22px;
  }

  ${({ theme }) => theme.mq.huge} {
    padding: 17px 35px 17px 22px;
  }

  .image,
  .name,
  .fullname,
  .price {
    border-radius: 1px;
  }

  .image {
    width: 35px;
    height: 35px;
    background-color: rgba(238, 238, 238, 1);
    animation: ${fadeLight} 2s infinite;
  }

  .name {
    height: 25px;
    width: 85px;
    margin-left: 15px;
    background-color: rgba(221, 221, 221, 1);
    animation: ${fadeDark} 2s infinite;
  }

  .fullname {
    height: 17px;
    width: 100px;
    margin-left: 15px;
    background-color: rgba(238, 238, 238, 1);
    animation: ${fadeLight} 2s infinite;
  }

  .price {
    height: 20px;
    width: 100px;
    margin-left: 15px;
    background-color: rgba(221, 221, 221, 1);
    animation: ${fadeDark} 2s infinite;
  }
`;
