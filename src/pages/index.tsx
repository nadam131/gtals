import { Container, Button } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { ENDPOINTS, fetcher } from "../api";
import { GridAside } from "../components/Grid/Grid";
import GridArticles from "../components/Grid/GridArticles";

interface HomePageProps {
  articles: any;
}

const HomePage = ({ articles }: HomePageProps) => {
  const renderAside = () => {
    return "this is aside";
  };

  return (
    <Container maxW="container.xxl">
      <GridAside aside={renderAside()}>
        <GridArticles articles={articles} />
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

export const getStaticProps: GetStaticProps = async () => {
  const { data: articles } = await fetcher(
    `${ENDPOINTS["NESTJS"]}/articles/news/1`
  );

  return {
    props: {
      articles,
    },
    revalidate: 500,
  };
};

export default HomePage;
