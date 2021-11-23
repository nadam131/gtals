import theme from "../src/theme";
import Provider from "../src/components/Provider/Provider";
import * as NextImage from "next/image";
import { Center } from "@chakra-ui/layout";

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
      <Center>
        <Story />
      </Center>
    </Provider>
  ),
];

// next/image
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
