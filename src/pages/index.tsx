import { Container, VStack } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { ENDPOINTS, fetcher } from "../api";
import CardArticle from "../components/Card/CardArticle/CardArticle";
import FeedMain from "../components/Feed/FeedMain/FeedMain";
import { GridAside } from "../components/Grid/Grid";

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
      <GridAside aside={renderAside()}>
        <FeedMain articles={articles} />
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
      meta: {
        title: "Главная страница",
        description: "Ну это описание",
      },
    },
    revalidate: 500,
  };
};

export default HomePage;
