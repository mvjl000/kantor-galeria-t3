import styled from "@emotion/styled";
import { flexColumnCenter } from "../../../styles/mixins";

export const Wrapper = styled.section`
  ${flexColumnCenter};
  margin: 110px auto 50px;
  width: 90%;
  max-width: 400px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
  }

  h2 {
    margin: 20px 0;
  }
`;

export const SignOutButton = styled.a`
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: default;
    text-decoration: none;
  }
`;
