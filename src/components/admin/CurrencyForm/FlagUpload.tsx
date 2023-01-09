import React, { useRef, useState, FocusEventHandler } from "react";
import { errorToast } from "../../../utils/toasts";
import { ImageButton } from "../../buttons.styles";

interface FlagUploadProps {
  hasFlag: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

const FlagUpload: React.FC<FlagUploadProps> = ({
  hasFlag,
  setFieldValue,
  handleBlur,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length !== 1) {
      setIsValid(false);
      errorToast("Nie udało się załadować obrazka!");
      return;
    }
    setIsValid(true);

    const flagFile = event.target.files[0]!;

    setFieldValue("flag", flagFile);

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPreviewUrl(fileReader.result);
      }
    };

    fileReader.onerror = () => {
      setIsValid(false);
      errorToast("Nie udało się załadować obrazka!");
    };

    fileReader.readAsDataURL(flagFile);
  };

  const pickImageHandler = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  if (previewUrl && !isValid) {
    return (
      <>
        <input
          ref={filePickerRef}
          style={{ display: "none" }}
          type="file"
          accept="image/svg+xml"
          onChange={handleFileChange}
          onBlur={handleBlur}
        />
        <ImageButton type="button" onClick={pickImageHandler}>
          <span className="error-message">Kliknij by spróbować ponownie</span>
        </ImageButton>
      </>
    );
  }

  return (
    <>
      <input
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept="image/svg+xml"
        onChange={handleFileChange}
        onBlur={handleBlur}
      />
      <ImageButton type="button" onClick={pickImageHandler}>
        {hasFlag ? (
          <>
            Zmień flagę <img src={previewUrl} alt="Flaga" />
          </>
        ) : (
          "Wybierz flagę"
        )}
      </ImageButton>
    </>
  );
};

export default FlagUpload;
