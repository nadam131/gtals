import CardArticleStyles from "./../components/Card/CardArticle/CardArticle.styles";
import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import sizes from "./foundations/sizes";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";

const overrides = {
  components: { CardArticleStyles },
  ...styles,
  ...sizes,
  ...fonts,
  ...colors,
};

export default extendTheme(overrides);
