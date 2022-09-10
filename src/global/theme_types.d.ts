import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: PaletteTypes;
    typography: TypographyTypes;
  }
}

export type ColorsType =
  | "success"
  | "warning"
  | "primary"
  | "danger"
  | "secondary";

type PaletteTypes = {
  background: { paper: string; dark: string };
  common: { black: string; white: string; transparent: string };
  primary: PaletteColorShadesTypes;
  secondary: { main: string };
  warning: PaletteColorShadesTypes;
  danger: PaletteColorShadesTypes;
  success: PaletteColorShadesTypes;
  disabled: {
    color: string;
    backgroundColor: string;
  };
  [key: string]: any; // change this to what  ?
};

type PaletteColorShadesTypes = {
  main: string;
  "200": string;
  "400": string;
  "600": string;
  "800": string;
};

type TypographyTypes = {
  fontFamily: string;
  body1: TypographyElement;
  input: TypographyElement;
  button: TypographyElement;
  overLineCaption: TypographyElement;
  table: TypographyElement;
  table2: TypographyElement;
  link: TypographyElement;
  h1: TypographyElement;
  h2: TypographyElement;
  h3: TypographyElement;
  h4: TypographyElement;
  h5: TypographyElement;
  subtitle1: TypographyElement;
  subtitle2: TypographyElement;
  typographyDisabled: React.CSSProperties;
  [key: string]: any;
};

type TypographyElement = {
  fontWeight: number | string;
  fontStyle: string;
  fontSize: number;
  lineHeight: string;
  letterSpacing: string;
};
