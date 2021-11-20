import Image from "next/image";
import { Box, Heading, Text, Stack, AspectRatio } from "@chakra-ui/react";
import { ArticleProps } from "../../../types";
interface CardArticleProps {
  article: ArticleProps;
}

const CardArticle = ({ article }: CardArticleProps) => {
  return (
    <Box
      h="100%"
      bg="gray.800"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box pos={"relative"}>
        <AspectRatio ratio={21 / 10}>
          <Image
            src={article.image}
            layout="fill"
            objectFit="cover"
            alt={article.title}
          />
        </AspectRatio>
      </Box>
      <Stack p={7}>
        <Text
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"xs"}
          letterSpacing={1.1}
        >
          Новости
        </Text>
        <Heading as="h3" pb={2} fontSize={"2xl"} fontFamily={"heading"}>
          {article.title}
        </Heading>
        <Text color={"gray.300"}>{article.description}</Text>
      </Stack>
    </Box>
  );
};

export default CardArticle;
