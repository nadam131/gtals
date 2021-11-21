import theme from "../src/theme";
import Provider from "../src/components/Provider/Provider";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: { theme: theme },
};

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
];
