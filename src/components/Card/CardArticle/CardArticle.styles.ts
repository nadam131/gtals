import { ComponentStyleConfig } from "@chakra-ui/react";

export const CardArticleStyles: ComponentStyleConfig = {
  parts: ["outer", "texts", "image", "description", "heading"],
  baseStyle: {
    outer: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      rounded: "xl",
      backgroundColor: "gray.800",
      border: "3px solid",
      borderColor: "transparent",
      transition: "border-color .2s, opacity .2s",
      opacity: ".85",
      _hover: { opacity: 1 },
    },
    description: {
      display: ["none", null, "block"],
      fontSize: { md: "sm", lg: "md" },
    },
  },
  sizes: {
    xs: ({ color }) => ({
      outer: {
        px: 6,
        py: 4,
        _hover: { opacity: 1, borderColor: `${color}a8` },
      },
      image: {
        boxSize: "60px",
        mr: 5,
        borderRadius: "full",
        overflow: "hidden",
      },
      heading: {
        fontSize: "lg",
      },
    }),
    md: ({ color }) => ({
      outer: {
        flexDirection: "column",
        mt: 10,
        px: [10, 20],
        py: [5, null, 8],
      },
      image: {
        mt: -20,
        mb: [4, null, 6, 8],
        boxShadow: "dark-lg",
        borderRadius: "full",
        overflow: "hidden",
        boxSize: [120, 150, 200, 250],
        border: "5px solid",
        borderColor: "transparent",
        transition: "border-color .2s, opacity .2s",
        _groupHover: { borderColor: `${color}a8`, opacity: 1 },
      },
      heading: {
        fontSize: ["xl", null, "3xl"],
      },
    }),
    lg: ({ color }) => ({
      outer: {
        flexDirection: "column",
      },
      image: {
        ratio: 4 / 6,
      },
    }),
  },
  variants: {
    shadow: {
      outer: {
        boxShadow: "2xl",
      },
    },
  },
  defaultProps: {
    size: "xs",
  },
};

export default CardArticleStyles;
