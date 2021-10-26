import { Box, HStack, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface NavMainProps {
  list: { id: number; name: string; url: string }[];
}

const NavMain = ({ list }: NavMainProps) => {
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
          <Box transition="color .2s" key={item.id}>
            <Link href={item.url} passHref>
              <CLink
                transition="color .2s"
                _hover={{
                  color: "primary.500",
                }}
              >
                {item.name}
              </CLink>
            </Link>
          </Box>
        );
      })}
    </HStack>
  );
};

export default NavMain;
