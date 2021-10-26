import { Container, VStack } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { ENDPOINTS, fetcher } from "../api";
import CardArticle from "../components/Card/CardArticle/CardArticle";
import { GridAside } from "../components/Grid/Grid";
import GridArticles from "../components/Grid/GridArticles";

interface HomePageProps {
  articles: any;
}

const HomePage = ({ articles }: HomePageProps) => {
  const renderAside = () => {
    return (
      <VStack spacing={6}>
        <CardArticle article={articles[0]}></CardArticle>
        <CardArticle article={articles[0]}></CardArticle>
      </VStack>
    );
  };

  return (
    <Container maxW="container.xxl">
      <VStack mt={6} spacing={6}>
        <GridArticles articles={articles.slice(0, 3)} />
        {/* <GridAside aside={renderAside()}>
          <GridArticles articles={articles.slice(0, 6)} />
        </GridAside> */}
      </VStack>

      {/* <Button
        isFullWidth
        variant="outline"
        mt={8}
        _hover={{
          color: "primary.500",
          borderColor: "primary.500",
        }}
      >
        Больше новостей
      </Button> */}
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
