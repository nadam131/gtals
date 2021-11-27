import { Box, Heading } from "@chakra-ui/layout";
import { useFetch } from "../../hooks/use-fetch";

import React from "react";
import { GridAside } from "../Grid/Grid";
import Container from "../Container/Container";

interface TemplateNewsProps {
  url: string;
}

const TemplateNews = ({ url }: TemplateNewsProps) => {
  const { data: post } = useFetch(url);

  return (
    <Container>
      <Heading
        as="h1"
        pt={10}
        mb={6}
        size="xl"
        fontWeight="black"
        borderBottom="1px"
        borderColor="gray.700"
        pb={5}
      >
        {post.title}
      </Heading>
      <GridAside aside={"asd"}>
        <Box
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></Box>
      </GridAside>
    </Container>
  );
};

export default TemplateNews;
