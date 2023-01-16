import { Theme } from "@emotion/react";

export const theme: Theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    grey: "hsl(0, 0%, 80%)",
    lightGrey: "hsl(0, 0%, 95%)",
    red: "hsl(0, 100%, 60%)",
  },
  font: {
    size: {
      xSmall: "1.5rem",
      small: "1.8rem",
      medium: "2.4rem",
      large: "3rem",
      xLarge: "3.5rem",
      huge: "4rem",
    },
    color: {
      black: "hsl(0, 0%, 0%)",
      grey: "hsl(0, 0%, 40%)",
    },
    family: {
      roboto: '"Roboto Condensed", sans-serif',
      josefin: '"Josefin Sans", sans-serif',
    },
    weight: {
      light: 300,
      medium: 400,
      bold: 600,
    },
  },
  mq: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    bigDesktop: "@media (min-width: 1280px)",
    huge: "@media (min-width: 1440px)",
  },
  zIndex: {
    laoder: 2,
    menu: 100,
    burger: 101,
    modal: 1000,
  },
};
