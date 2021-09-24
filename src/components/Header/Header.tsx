import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import NavMain from "../Nav/NavMain/NavMain";

const styles = {
  wrapper: {
    borderBottom: "2px",
    backgroundColor: "gray.800",
    borderColor: "primary.500",
  },
};

const NAVMAINPROPS = {
  className: "nav-main",
  data: [
    { id: 1, name: "Игры", url: "/games?page=1" },
    { id: 2, name: "Новости", url: "/news?page=1" },
    { id: 3, name: "Faq", url: "/faq" },
    { id: 4, name: "Гайды", url: "/guides" },
    { id: 5, name: "Чит-коды", url: "/cheats" },
    { id: 6, name: "Радио", url: "/radio" },
    { id: 7, name: "Персонажи", url: "/characters" },
    { id: 8, name: "Транспорт", url: "/vehicles" },
    { id: 9, name: "GTA 6", url: "/games/gta-6" },
  ],
};

const Header: React.FC = () => {
  return (
    <Box {...styles.wrapper}>
      <Container maxW="container.xxl">
        <HStack spacing="20">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <NavMain list={NAVMAINPROPS.data} />
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
