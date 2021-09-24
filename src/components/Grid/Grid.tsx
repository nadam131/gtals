import { Box, Grid, GridItem } from "@chakra-ui/layout";

interface IGrid {
  children: any;
  aside: any;
}

export const GridAside = ({ children, aside }: IGrid) => {
  return (
    <Grid h="100vh" gap={5} templateColumns="repeat(12, 1fr)">
      <GridItem py={4} gridColumn="span 9">
        {children}
      </GridItem>
      <GridItem
        p={4}
        gridColumn="span 3"
        borderLeft="1px"
        borderColor="gray.700"
      >
        {aside}
      </GridItem>
    </Grid>
  );
};
