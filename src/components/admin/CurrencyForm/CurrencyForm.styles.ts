import styled from "@emotion/styled";
import { Form } from "formik";
import { flexColumnCenter } from "../../../styles/mixins";

export const FormWrapper = styled.section`
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

export const StyledForm = styled(Form)`
  ${flexColumnCenter};
  gap: 10px;
  width: 100%;
`;
