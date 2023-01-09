import React, { useRef, useState, FocusEventHandler } from "react";
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
    };

    fileReader.readAsDataURL(flagFile);
  };

  const pickImageHandler = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

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
