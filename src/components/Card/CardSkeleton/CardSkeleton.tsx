import { Box } from "@chakra-ui/layout";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box p="5">
      <SkeletonCircle startColor="gray.700" endColor="gray.100" size="10" />
      <SkeletonText
        startColor="gray.700"
        endColor="gray.100"
        mt="4"
        noOfLines={4}
        spacing="4"
      />
    </Box>
  );
};

export default CardSkeleton;
