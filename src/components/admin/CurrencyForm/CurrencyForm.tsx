import React, { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "./CurrencyForm.styles";
import {
  H2,
  InputWrapper,
  Loader,
  StyledInput,
  SubmitButtonWrapper,
} from "../../ui";
import { trpc } from "../../../utils/trpc";
import { SubmitButton } from "../../buttons.styles";
import FlagUpload from "./FlagUpload";
import { errorToast } from "../../../utils/toasts";
import { FlagUploadResponse } from "../../../types/types";

interface FormTypes {
  name: string;
  fullName: string;
  buy: string;
  sell: string;
  flag: Blob | string;
}

const initialFormValues: FormTypes = {
  name: "",
  fullName: "",
  buy: "",
  sell: "",
  flag: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Podaj skrót!"),
  fullName: Yup.string().required("Podaj pełną nazwę!"),
  buy: Yup.string().required("Podaj cenę kupna!"),
  sell: Yup.string().required("Podaj cenę sprzedaży!"),
  flag: Yup.mixed().required("Dodaj falgę!"),
});

const CurrencyForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const addCurrency = trpc.currencies.createCurrency.useMutation();
  const utils = trpc.useContext();

  return (
    <FormWrapper>
      <H2>Dodaj walutę</H2>
      <Formik
        initialValues={initialFormValues}
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);

            const flagForm = new FormData();
            flagForm.append("file", values.flag);
            flagForm.append(
              "upload_preset",
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
            );

            const flagUploadResponse = await fetch(
              process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL!,
              {
                method: "POST",
                body: flagForm,
              }
            );
            const flagData: FlagUploadResponse =
              await flagUploadResponse.json();

            await addCurrency.mutateAsync({
              name: values.name,
              image: flagData.secure_url,
              fullname: values.fullName,
              buy: Number(values.buy),
              sell: Number(values.sell),
            });

            // Refetch table data
            await utils.currencies.getCurrencies.fetch();
          } catch (error) {
            errorToast("Nie udało się dodać waluty!");
          } finally {
            setIsLoading(false);
            resetForm();
          }
        }}
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
          setFieldValue,
        }) => (
          <StyledForm>
            <InputWrapper>
              <label htmlFor="name">Skrót</label>
              <StyledInput
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="name" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="fullName">Pełna nazwa</label>
              <StyledInput
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="fullName" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="buy">Kupno</label>
              <StyledInput
                id="buy"
                name="buy"
                value={values.buy}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="buy" component="p" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="sell">Sprzedaż</label>
              <StyledInput
                id="sell"
                name="sell"
                value={values.sell}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="sell" component="p" />
            </InputWrapper>
            <SubmitButtonWrapper>
              <FlagUpload
                hasFlag={!!values.flag}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
              <SubmitButton
                disabled={
                  Object.entries(errors).length !== 0 ||
                  Object.entries(touched).length === 0
                }
                type="submit"
              >
                {isLoading ? <Loader size="small" color="white" /> : "Dodaj"}
              </SubmitButton>
              <ErrorMessage name="flag" component="p" />
            </SubmitButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CurrencyForm;
