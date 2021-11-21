import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { ArticleProps } from "../../../types";

interface CardArticleLProps {
  article: ArticleProps;
}

const CardArticleL = ({ article }: CardArticleLProps) => {
  return (
    <Box bgColor="gray.200" boxShadow="lg" p={8} py={10} rounded="lg">
      <Grid gridTemplateColumns="repeat(12,1fr)" gap={14} alignItems="center">
        <GridItem gridColumn="span 5" overflow="hidden">
          <AspectRatio
            ratio={16 / 9}
            rounded="lg"
            boxShadow="lg"
            overflow="hidden"
          >
            <Image
              src={article.image}
              layout="fill"
              objectFit="cover"
              alt={article.title}
            />
          </AspectRatio>
        </GridItem>
        <GridItem gridColumn="span 7">
          <Heading size="lg" as="h2" lineHeight="1.43">
            {article.title}
          </Heading>
          <Text mt={5} fontSize="lg" lineHeight="1.65" w="95%">
            {article.description}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CardArticleL;
