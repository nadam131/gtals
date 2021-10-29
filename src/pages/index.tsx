import { Container, VStack, StackDivider } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { ENDPOINTS, fetcher } from "../api";
import { CardArticleS } from "../components/Card/CardArticle/CardArticleS";
import FeedMain from "../components/Feed/FeedMain/FeedMain";
import { GridAside } from "../components/Grid/Grid";
import { ArticleProps } from "../types";

interface HomePageProps {
  articles: any;
}

const HomePage = ({ articles }: HomePageProps) => {
  const renderAside = () => {
    return (
      <VStack
        divider={<StackDivider borderColor="gray.600" />}
        mt={10}
        spacing={6}
      >
        {articles.map((article: ArticleProps) => (
          <Link key={article.id} href={`/${article.type}/${article.slug}`}>
            <a>
              <CardArticleS article={article} />
            </a>
          </Link>
        ))}
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
