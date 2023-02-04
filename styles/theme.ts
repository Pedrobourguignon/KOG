import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const theme = extendTheme({
  zIndices: {
    default: 1,
    behind: "-1000",
  },
  colors: {
    gray: {
      "700": "#2c2f36",
    },
    blue: {
      "900": "#062E4A",
    },
  },
  fonts: {
    heading: "Roboto-Slab",
    body: "Inter",
  },
});
