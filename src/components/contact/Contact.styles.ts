import styled from "@emotion/styled";
import { flexCenter } from "../../styles/mixins";

export const PhonesList = styled.ul`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 75%;
  max-width: 500px;

  li {
    ${flexCenter};
    font-size: ${({ theme }) => theme.font.size.large};

    a {
      ${flexCenter};
      font-weight: ${({ theme }) => theme.font.weight.light};
      font-size: inherit;
      letter-spacing: 1px;

      &:hover {
        text-decoration: underline;
      }

      img {
        width: 30px;
        height: 30px;
      }

      span {
        margin-right: 5px;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 4rem auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 5rem auto;
    gap: 25px;

    li {
      font-size: ${({ theme }) => theme.font.size.xLarge};

      a {
        img {
          width: 35px;
          height: 35px;
        }

        span {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const LocationWrapper = styled.section`
  width: 75%;
  max-width: 1050px;
  min-width: 300px;
  margin: 50px auto 100px;
  padding: 0 10px;
  border-top: 2px solid black;
  h2 {
    text-align: left;
    padding: 0;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-top: 20px;

    ${({ theme }) => theme.mq.desktop} {
      margin-top: 40px;
    }

    &:nth-of-type(2) {
      margin-top: 50px;
    }
  }
  p {
    margin: 10px 0;
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.light};

    span {
      text-decoration: underline;
    }

    ${({ theme }) => theme.mq.tablet} {
      margin-top: 15px;
    }
    ${({ theme }) => theme.mq.desktop} {
      margin-top: 20px;
      font-size: ${({ theme }) => theme.font.size.large};
    }
  }
`;

export const MapWrapper = styled.div`
  margin: 30px 0;
  height: 200px;
  width: 100%;
  background: #eee;
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 40px;
    height: 300px;
  }
  @media ${({ theme }) => theme.mq.desktop} {
    margin-top: 45px;
    height: 375px;
  }
  iframe {
    height: 100%;
    width: 100%;
    border: none;
  }
`;
