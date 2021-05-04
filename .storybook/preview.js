import React from "react";
import { muiTheme } from "storybook-addon-material-ui";
import ThemeProvider from "./theme-provider";
import LightTheme from "../src/themes/TVO-light-theme";
import DarkTheme from "../src/themes/TVO-dark-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
/*export const decorators = [
  (Story) => (
    <ThemeProvider theme={LightTheme}>
      <Story />
    </ThemeProvider>
  ),
];*/
export const decorators = [muiTheme([LightTheme, DarkTheme])];
