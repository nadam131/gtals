import { Box, Center, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "../../Image/Image";

const CardCharacter = ({ name, image }) => {
  return (
    <Center>
      <Box
        role={"group"}
        p={6}
        mt={20}
        maxW={"xs"}
        w={"full"}
        bg={"gray.800"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box mt={-20} mb={5} pos={"relative"} height={"200px"}>
          <Center>
            <Image
              boxSize={200}
              src={"/assets/images/michael.jpeg"}
              alt="image"
              layout="fill"
              objectFit={"cover"}
              borderRadius="full"
            />
          </Center>
        </Box>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"} fontFamily={"heading"} fontWeight={500}>
            Майкл Де Санта
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"sm"}>
              Вор в законе
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default CardCharacter;
