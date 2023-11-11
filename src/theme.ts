import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode(
        "linear-gradient(to right, #f6f8f9, #e9eaef)",
        "gray.800"
      )(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
