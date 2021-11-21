import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";

const IMAGE =
  "https://gtals.ru/wp-content/uploads/2015/07/gta5_michael_de_santa_main-1.jpg";

// interface CardCharacterProps {}
// TODO Доделать

const CardCharacter = () => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={"gray.800"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "200px",
            h: "200px",
            pos: "absolute",
            margin: "0 auto",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "50%",
            backgroundColor: `#65b4d4`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Center>
            <Image
              rounded={"lg"}
              height={200}
              width={200}
              borderRadius="50%"
              objectFit={"cover"}
              src={IMAGE}
              alt="image"
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
