import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import sizes from "./foundations/sizes";

const overrides = {
  ...styles,
  ...sizes,
};

export default extendTheme(overrides);
