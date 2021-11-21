import { BoxProps, Grid, GridItem, Link as CLink } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import { ArticleProps } from "../../types";
import CardArticle from "../Card/CardArticle/CardArticle";
import CardSkeleton from "../Card/CardSkeleton/CardSkeleton";

interface GridArticlesProps extends BoxProps {
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

const GridArticles = ({ articles, ...props }: GridArticlesProps) => {
  return (
    <Grid
      w="100%"
      columnGap={5}
      rowGap={6}
      templateColumns="repeat(12, 1fr)"
      {...props}
    >
      {!articles && renderSkeletons()}
      {articles &&
        articles.map((article: ArticleProps) => {
          return (
            <GridItem key={article.id} gridColumn="span 4">
              <Link passHref href={`/${article.type}/${article.slug}`}>
                <CLink
                  transition="color .2s"
                  _hover={{
                    color: "primary.500",
                  }}
                >
                  <CardArticle article={article} />
                </CLink>
              </Link>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default GridArticles;
