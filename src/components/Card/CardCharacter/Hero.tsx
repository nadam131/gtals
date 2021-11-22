import { AspectRatio, Box, Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Image from "../../Image/Image";
import { CardCharacterProps } from "./CardCharacter";

const Hero = ({ image, color, name, description }: CardCharacterProps) => {
  return (
    <Box
      rounded={"lg"}
      overflow="hidden"
      border="6px solid"
      borderColor="transparent"
      transition="border-color .2s"
      _hover={{ borderColor: `${color}a8` }}
    >
      <AspectRatio ratio={4 / 6}>
        <>
          <Image src={image} alt="hero" layout="fill" objectFit="cover" />
          <Box
            px={5}
            py={8}
            pos="absolute"
            top="auto !important"
            height="auto !important"
            backgroundColor="#000"
          >
            <VStack spacing={3}>
              <Heading size="xl" fontFamily="heading">
                {name}
              </Heading>
              <Text fontWeight="700" color="gray.500">
                {description}
              </Text>
            </VStack>
          </Box>
        </>
      </AspectRatio>
    </Box>
  );
};

export default Hero;
