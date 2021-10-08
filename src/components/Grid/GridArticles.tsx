import { Grid, GridItem, Link } from "@chakra-ui/layout";
import React from "react";
import { ArticleProps } from "../../types";
import CardArticle from "../Card/CardArticle/CardArticle";
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
  return (
    <Grid gap={6} templateColumns="repeat(12, 1fr)">
      {!articles && renderSkeletons()}
      {articles &&
        articles.map((article: ArticleProps) => {
          return (
            <GridItem key={article.id} gridColumn="span 4">
              <Link href={`/news/${article.slug}`}>
                <a>
                  <CardArticle article={article} />
                </a>
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default GridArticles;
