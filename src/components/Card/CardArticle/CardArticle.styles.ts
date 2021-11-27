export const CardArticleStyles = {
  parts: ["outer", "texts", "image", "description", "heading"],
  baseStyle: {
    outer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      rounded: "xl",
      backgroundColor: "gray.800",
      border: "2px solid",
      borderColor: "transparent",
      transition: "border-color .2s, opacity .2s",
      opacity: ".85",
      _hover: { opacity: 1 },
    },
    description: {
      display: ["none", null, "block"],
      fontSize: { md: "sm", lg: "md" },
      color: "gray.400",
    },
  },
  sizes: {
    xs: ({ color }: any) => ({
      outer: {
        px: [3, 6],
        py: [2, 4],
        _hover: { opacity: 1, borderColor: `${color || "white"}` },
      },
      image: {
        boxSize: ["50px", "75px", "60px"],
        mr: 5,
        borderRadius: "full",
        overflow: "hidden",
      },
      heading: {
        fontSize: ["lg", "xl"],
      },
      description: {
        display: "none",
      },
    }),
    md: ({ color }: any) => ({
      outer: {
        flexDirection: "column",
        mt: 10,
        px: [10, null, 0],
        py: [5, null, 8],
        borderWidth: 3,
        borderColor: "transparent",
        transition: "border-color .25s, opacity .25s",
        _hover: {
          borderColor: color || "white",
          opacity: 1,
        },
      },
      image: {
        mt: -20,
        mb: [4, null, 6, 8],
        boxShadow: "2xl",
        borderRadius: "full",
        overflow: "hidden",
        boxSize: [120, 150, 200, 160, 250],
        transition: "box-shadow .25s",
        zIndex: "docked",
        _groupHover: {
          boxShadow: "dark-lg",
        },
      },
      heading: {
        whiteSpace: "nowrap",
        fontSize: ["xl", null, "xl", null, "2xl"],
      },
    }),
    lg: ({ color }: any) => ({
      outer: {
        flexDirection: "column",
        borderWidth: 5,
        mt: 20,
        _hover: {
          borderColor: color,
        },
      },
      image: {
        ratio: 4 / 7,
        mt: -20,
      },
      heading: {
        whiteSpace: "nowrap",
        fontFamily: "copyright",
        fontSize: ["3xl", "2xl", "3xl", "4xl", "5xl"],
      },
      texts: {
        w: "100%",
        p: 5,
        px: 6,
        py: [8],
        pos: "absolute",
        bottom: 0,
        zIndex: "docked",
        borderRadius: "0 0 0.75rem 0.75rem",
        bgGradient: "linear(to-t, black 60%, transparent 100%)",
      },
      description: {
        display: ["none", "block"],
        fontSize: { sm: "md", md: "lg", lg: "sm", xl: "lg" },
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
