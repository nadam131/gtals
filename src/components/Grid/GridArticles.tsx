import { Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import { ArticleProps } from "../../types";
import CardArticle from "../Card/CardArticle/CardArticle";
import CardArticleL from "../Card/CardArticle/CardArticleL";
import CardSkeleton from "../Card/CardSkeleton/CardSkeleton";

interface GridArticlesProps {
  articles: ArticleProps[];
}

const LIMIT = 9;

const renderSkeletons = () => {
  const skeletons = Array.from(Array(LIMIT).keys());
  return skeletons.map((_, i) => {
    return (
      <GridItem key={i} gridColumn="span 4">
        <CardSkeleton key={i} />
      </GridItem>
    );
  });
};

const GridArticles = ({ articles }: GridArticlesProps) => {
  console.log(articles, "articles");
  return (
    <Grid w="100%" columnGap={5} rowGap={6} templateColumns="repeat(12, 1fr)">
      {!articles && renderSkeletons()}
      {articles &&
        articles.map((article: ArticleProps, i: number) => {
          const isMarked = i === 0 || i % 4 === 0;
          const gridColumn = isMarked ? "span 12" : "span 4";
          const component = isMarked ? (
            <CardArticleL article={article} />
          ) : (
            <CardArticle article={article} />
          );

          return (
            <GridItem key={article.id} gridColumn={gridColumn}>
              <Link href={`/${article.type}/${article.slug}`}>
                <a>{component}</a>
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default GridArticles;
