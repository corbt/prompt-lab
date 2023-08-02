import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inconsolata";
import { ChakraProvider } from "@chakra-ui/react";
import { modalAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const systemFont =
  'ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"';

/* eslint-disable @typescript-eslint/unbound-method */
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  modalAnatomy.keys,
);

const modalTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    dialog: { borderRadius: "sm" },
  }),
});

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: "dark" | "light" }) => ({
      "html, body": {
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "white",
      },
    }),
  },
  fonts: {
    heading: systemFont,
    body: systemFont,
  },

  components: {
    Button: {
      baseStyle: {
        borderRadius: "sm",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: "sm",
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: "sm",
        field: {
          borderRadius: "sm",
        },
      },
    },
    Modal: modalTheme,
  },
});

export const ChakraThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
