import { AspectRatio, Box, Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Image from "../../Image/Image";
import { CardCharacterProps } from "./CardCharacter";

const Hero = ({ image, color, name, description }: CardCharacterProps) => {
  return (
    <Box
      role="group"
      rounded={"lg"}
      border="6px solid"
      borderColor="border.dark"
      boxShadow={"2xl"}
      mt={20}
      pos="relative"
      top={0}
      backgroundColor="gray.800"
      transition="border-color .2s, top .2s, box-shadow .2s"
      _hover={{ borderColor: `${color}a8`, top: -1, boxShadow: "dark-lg" }}
    >
      <AspectRatio ratio={4 / 6}>
        <>
          <Image
            src={image}
            alt="hero"
            layout="fill"
            mt={-20}
            opacity={0.85}
            objectFit="contain"
            objectPosition="top"
            transition="opacity .2s"
            _groupHover={{
              opacity: 1,
            }}
          />
          <Box
            px={6}
            py={8}
            pt={20}
            pos="absolute"
            top="auto !important"
            height="auto !important"
            bgGradient="linear(to-t, black 30%, transparent 100%)"
          >
            <VStack spacing={3}>
              <Heading fontSize={"3xl"} fontFamily="heading">
                {name}
              </Heading>
              <Text fontSize="sm" fontWeight="700" color="gray.500">
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
