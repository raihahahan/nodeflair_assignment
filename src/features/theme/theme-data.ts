import {
  breakpointsTypes,
  colorThemeByTheme,
  siteColorsType,
  Theme,
} from "./theme-types";

export const breakpoints: breakpointsTypes = {
  xs: 413,
  sm: 426,
  md: 1120,
  lg: 1275,
  xl: 1800,
};

export const CARD_BORDER_RADIUS = 8;

export const colorTheme: colorThemeByTheme = {
  light: {
    primary: {
      main: "#20c76a",
      variantLight: "#ddf7e9",
      variantDark: "#25c86c",
    },
    secondary: {
      main: "#ffdf3c",
      variantLight: "#ffbb93",
      variantDark: "#c75b39",
    },
    background: "#f2f2f2",
    surface: "#FFFFFF",
    error: "#B00020",
    placeholder: "#F1F1F1",
    on: {
      on_primary: "#000000",
      on_secondary: "#000000",
      on_background: "000000",
      on_surface: "#000000",
      on_error: "#FFFFFF",
      on_placeholder: "#8c8c8c",
    },
  },
  dark: {
    primary: {
      main: "#20c76a",
      variantLight: "#ddf7e9",
      variantDark: "#25c86c",
    },
    secondary: {
      main: "#ffdf3c",
      variantLight: "#ffbb93",
      variantDark: "#c75b39",
    },
    background: "#f2f2f2",
    surface: "#FFFFFF",
    error: "#B00020",
    placeholder: "#F1F1F1",
    on: {
      on_primary: "#FFFFFF",
      on_secondary: "#FFFFFF",
      on_background: "FFFFFF",
      on_surface: "#FFFFFF",
      on_error: "#FFFFFF",
      on_placeholder: "#8c8c8c",
    },
  },
};

export const siteColors = (theme: Theme): siteColorsType => {
  const color = colorTheme[theme];
  return {
    header: color.surface,
    background: color.background,
    navbar: color.surface,
    text: {
      primary: color.on.on_primary,
      secondary: "grey",
      error: color.error,
      links: theme == "light" ? "blue" : "#71a2c7",
    },
  };
};
