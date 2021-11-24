import theme from "../src/theme";
import Provider from "../src/components/Provider/Provider";
import * as NextImage from "next/image";
import { Container } from "@chakra-ui/layout";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story) => (
    <Provider>
      <Container maxW="container.xxl">
        <Story />
      </Container>
    </Provider>
  ),
];

// next/image
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
