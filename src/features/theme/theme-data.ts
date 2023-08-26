import {
  breakpointsTypes,
  colorThemeByTheme,
  siteColorsType,
  Theme,
} from "./theme-types";

export const breakpoints: breakpointsTypes = {
  xs: 500,
  sm: 850,
  md: 1000,
  lg: 1275,
  xl: 1800,
};

export const colorTheme: colorThemeByTheme = {
  light: {
    primary: {
      main: "#20c76a",
      variantLight: "#ffffa8",
      variantDark: "#cabf45",
    },
    secondary: {
      main: "#ffdf3c",
      variantLight: "#ffbb93",
      variantDark: "#c75b39",
    },
    background: "#f2f2f2",
    surface: "#FFFFFF",
    error: "#B00020",
    placeholder: "#f2f2f2",
    on: {
      on_primary: "#000000",
      on_secondary: "#000000",
      on_background: "000000",
      on_surface: "#838383",
      on_error: "#FFFFFF",
    },
  },
  dark: {
    primary: {
      main: "#20c76a",
      variantLight: "#ffffa8",
      variantDark: "#cabf45",
    },
    secondary: {
      main: "#ffdf3c",
      variantLight: "#ffbb93",
      variantDark: "#c75b39",
    },
    background: "#f2f2f2",
    surface: "#FFFFFF",
    error: "#B00020",
    placeholder: "#f2f2f2",
    on: {
      on_primary: "#FFFFFF",
      on_secondary: "#FFFFFF",
      on_background: "FFFFFF",
      on_surface: "#FFFFFF",
      on_error: "#FFFFFF",
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
