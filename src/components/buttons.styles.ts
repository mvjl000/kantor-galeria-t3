import styled from "@emotion/styled";

export const Button = styled.button`
  height: 48px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const TableSubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  /* alignment */
  margin-top: 20px;
  position: sticky;
  bottom: 28px;
  float: right;

  &:disabled {
    display: none;
  }
`;

export const CancelButton = styled(Button)`
  height: 35px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.black};
  border-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const DeleteButton = styled(Button)`
  height: 35px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.red};
`;
