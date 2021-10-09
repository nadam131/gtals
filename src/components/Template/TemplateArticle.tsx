import { Container } from "@chakra-ui/layout";
import { useFetch } from "../../hooks/use-fetch";

import React from "react";
import { GridAside } from "../Grid/Grid";
import PostAside from "../Post/PostAside/PostAside";

interface TemplateArticleProps {
  url: string;
}

const TemplateArticle = ({ url }: TemplateArticleProps) => {
  const { data: post } = useFetch(url);

  console.log(post, "post");
  return (
    <Container maxW="container.xxl">
      <GridAside
        inverted
        aside={
          <PostAside
            image={post.fields.post_main_img}
            title={post.title}
            color={post.fields.post_color}
            info={post.fields.post_info}
          />
        }
      >
        {post.title}
      </GridAside>
    </Container>
  );
};

export default TemplateArticle;
