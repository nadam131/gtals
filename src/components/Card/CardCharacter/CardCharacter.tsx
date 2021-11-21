import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "../../Image/Image";

interface CardCharacterProps {
  name: string;
  image: string;
  description: string;
  color: string;
}

const CardCharacter = ({
  name,
  image,
  description,
  color,
}: CardCharacterProps) => {
  return (
    <Center>
      <Box
        role={"group"}
        py={8}
        mt={20}
        maxW={"xs"}
        w={"full"}
        bg={"gray.800"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box mt={-20} mb={8} pos={"relative"} height={"200px"}>
          <Center>
            <Image
              boxShadow={"dark-lg"}
              boxSize={200}
              src={image}
              alt="image"
              layout="fill"
              objectFit={"cover"}
              borderRadius="full"
              border="5px solid"
              borderColor="transparent"
              transition="border-color .2s"
              _groupHover={{ borderColor: color }}
            />
          </Center>
        </Box>
        <Stack align={"center"} spacing={2}>
          <Heading fontSize={"3xl"} fontFamily={"heading"} fontWeight={500}>
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

export default CardCharacter;
