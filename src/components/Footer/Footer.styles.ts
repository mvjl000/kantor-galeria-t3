import styled from "@emotion/styled";
import { flexColumnCenter } from "../../styles/mixins";

export const Wrapper = styled.footer`
  margin-top: 80px;
  min-height: 200px;
  width: 100%;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1050px;
  ${flexColumnCenter};
  justify-content: space-around;

  ul {
    ${flexColumnCenter};
    margin: 35px 0 50px;
    list-style: none;
    gap: 20px;

    li {
      a {
        font-family: ${({ theme }) => theme.font.family.josefin};
        font-size: ${({ theme }) => theme.font.size.medium};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;

    ul {
      align-items: flex-start;
      margin: 35px 0;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;

    ul {
      margin: 45px 0;
    }

    ul li a {
      font-size: ${({ theme }) => theme.font.size.medium};
    }
  }
`;

export const License = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-weight: 300;
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CopyRight = styled.p`
  margin: 15px 0;
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  text-align: center;
  a {
    color: white;
    text-decoration: underline;
  }
`;
