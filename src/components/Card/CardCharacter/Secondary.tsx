import React from "react";
import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "../../Image/Image";
import { CardCharacterProps } from "./CardCharacter";

const Secondary = ({ image, color, name, description }: CardCharacterProps) => {
  return (
    <Center>
      <Box
        role={"group"}
        py={10}
        mt={20}
        w={"full"}
        bg={"gray.800"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box mt={-20} mb={8} pos={"relative"} height={[200, null, null, 250]}>
          <Center>
            <Image
              boxShadow={"dark-lg"}
              boxSize={[200, null, null, 250]}
              src={image}
              alt="image"
              layout="fill"
              objectFit={"cover"}
              objectPosition="top"
              borderRadius="full"
              border="5px solid"
              borderColor="transparent"
              transition="border-color .2s, opacity .2s"
              opacity="0.75"
              _groupHover={{ borderColor: `${color}a8`, opacity: 1 }}
            />
          </Center>
        </Box>
        <Stack align={"center"} spacing={3}>
          <Heading
            fontSize={["xl", null, null, "2xl"]}
            fontFamily={"heading"}
            letterSpacing="wide"
            fontWeight={700}
          >
            {name}
          </Heading>
          <Text fontWeight="700" color="gray.600" fontSize={"sm"}>
            {description}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default Secondary;
