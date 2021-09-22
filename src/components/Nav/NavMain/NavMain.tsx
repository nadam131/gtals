import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavMain = ({
  list,
}: {
  list: [{ id: number; name: string; url: string }];
}) => {
  return (
    <HStack
      fontSize="1xl"
      textTransform="uppercase"
      fontWeight="400"
      fontFamily="heading"
      spacing="9"
      as="nav"
    >
      {list.map((item) => {
        return (
          <Box
            transition="color .2s"
            _hover={{
              color: "primary",
            }}
            key={item.id}
          >
            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
          </Box>
        );
      })}
    </HStack>
  );
};

export default NavMain;
