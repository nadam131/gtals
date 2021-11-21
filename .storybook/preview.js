import theme from "../src/theme";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // TODO Убедиться, что storybook и next синхронизированны
  chakra: { theme: theme },
};
