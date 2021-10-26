import { VStack } from "@chakra-ui/layout";
import React from "react";
import { ArticleProps } from "../../../types";
import GridArticles from "../../Grid/GridArticles";

interface FeedMainProps {
  articles: ArticleProps[];
}

const FeedMain = ({ articles }: FeedMainProps) => {
  return (
    <div>
      <VStack mt={8} mb={10} spacing={6}>
        <GridArticles articles={articles} />
      </VStack>
    </div>
  );
};

export default FeedMain;
