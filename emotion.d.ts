import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      grey: string;
      lightGrey: string;
      red: string;
    };
    font: {
      size: {
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
        huge: string;
      };
      color: {
        black: string;
        grey: string;
      };
      family: {
        roboto: string;
        josefin: string;
      };
      weight: {
        light: number;
        medium: number;
        bold: number;
      };
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
    zIndex: {
      modal: number;
      menu: number;
      burger: number;
      laoder: number;
    };
  }
}
