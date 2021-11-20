import { Container } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import { ENDPOINTS, fetcher } from "../api";
import FeedMain from "../components/Feed/FeedMain/FeedMain";

interface HomePageProps {
  articles: any;
}

const HomePage = ({ articles }: HomePageProps) => {
  return (
    <Container maxW="container.xxl">
      <FeedMain articles={articles} />
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
