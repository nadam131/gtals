import { AspectRatio, Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Image from "next/image";
import { ArticleProps } from "../../../types";

interface CardArticleProps {
  article: ArticleProps;
}

const CardArticle = ({ article }: CardArticleProps) => {
  return (
    <Box
      p={6}
      h="100%"
      border="1px solid"
      borderColor="gray.600"
      boxShadow="md"
      rounded="lg"
      overflow="hidden"
      transition="border-color .2s"
      _hover={{
        borderColor: "primary",
      }}
    >
      <AspectRatio ratio={21 / 10}>
        <Image
          src={article.image}
          layout="fill"
          objectFit="cover"
          alt={article.title}
        />
      </AspectRatio>
      <Heading mt={5} size="md" as="h2">
        {article.title}
      </Heading>
      <Text mt={3}>{article.description}</Text>
    </Box>
  );
};

export default CardArticle;
