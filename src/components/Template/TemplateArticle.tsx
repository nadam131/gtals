import { Box, Container, Heading } from "@chakra-ui/layout";
import { useFetch } from "../../hooks/use-fetch";

import React from "react";
import { GridAside } from "../Grid/Grid";
import PostAside from "../Post/PostAside/PostAside";

interface TemplateArticleProps {
  url: string;
}

const TemplateArticle = ({ url }: TemplateArticleProps) => {
  const { data: post } = useFetch(url);

  return (
    <Container maxW="container.xxl">
      <Heading
        as="h1"
        pt={10}
        mb={6}
        size="2xl"
        borderBottom="1px"
        borderColor="gray.700"
        pb={5}
      >
        {post.title}
      </Heading>
      <GridAside
        inverted
        aside={
          <PostAside
            image={post.image}
            title={post.title}
            info={post.fields.post_info}
          />
        }
      >
        <Box
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></Box>
      </GridAside>
    </Container>
  );
};

export default TemplateArticle;
