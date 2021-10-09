import { Box, Grid, GridItem } from "@chakra-ui/layout";

interface IGrid {
  children: any;
  aside: any;
  inverted?: boolean;
}

export const GridAside = ({ children, aside, inverted }: IGrid) => {
  const asideStyles = {
    py: 6,
    px: inverted ? 6 : 0,
    pl: inverted ? 0 : 6,
    gridColumn: inverted ? "1/span 3" : "span 3",
    borderRight: inverted ? "1px" : 0,
    borderLeft: inverted ? 0 : "1px",
    borderColor: "gray.700",
  };

  return (
    <Grid
      h="100vh"
      gap={6}
      gridAutoFlow={inverted ? "dense" : ""}
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem py={6} gridColumn={inverted ? "4/span 9" : "span 9"}>
        {children}
      </GridItem>
      <GridItem {...asideStyles}>{aside}</GridItem>
    </Grid>
  );
};
