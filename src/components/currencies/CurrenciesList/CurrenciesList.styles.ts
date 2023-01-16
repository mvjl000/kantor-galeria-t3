import styled from "@emotion/styled";

export const Wrapper = styled.section`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1600px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  ${({ theme }) => theme.mq.desktop + "and (orientation: landscape)"} {
    padding: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 25px;
  }

  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
`;
