import { Container, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import useSWR from "swr";
import { api, ENDPOINTS } from "../api";
import { GridAside } from "../components/Grid/Grid";
import GridArticles from "../components/Grid/GridArticles";

// TODO Добавить статичный рендер
const Home: NextPage = () => {
  const { data } = useSWR(`${ENDPOINTS["NESTJS"]}/articles/news/1`, api.get);
  if (!data) return null;

  const renderAside = () => {
    return "this is aside";
  };

  return (
    <Container maxW="container.xxl">
      <GridAside aside={renderAside()}>
        <GridArticles articles={data.data} />
        <Button
          w="100%"
          variant="outline"
          colorScheme="primary"
          mt={8}
          _hover={{
            color: "primary.500",
            borderColor: "primary.500",
          }}
        >
          Больше новостей
        </Button>
      </GridAside>
    </Container>
  );
};

export default Home;
