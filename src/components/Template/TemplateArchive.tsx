import React from "react";
import useSWR from "swr";
import { Box, Container } from "@chakra-ui/react";

import NavTaxonomies from "../../components/Nav/NavTaxonomies/NavTaxonomies";
import { fetcher } from "../../api";
import GridArticles from "../Grid/GridArticles";

interface TemplateArchiveProps {
  pages: number;
  postType: string;
  url: string;
}

const TemplateArchive = ({ url, postType }: TemplateArchiveProps) => {
  const {
    data: { data: articles },
  } = useSWR(url, fetcher);

  const { data: taxonomies } = useSWR(
    `http://localhost:4000/taxonomies/cpt/${postType}`,
    fetcher
  );

  if (!articles) return null;

  return (
    <Box pt={6}>
      <Container maxW="container.xxl">
        <NavTaxonomies filters={taxonomies.filters} />
        <GridArticles mt={8} articles={articles} />
      </Container>
    </Box>
  );
};

export default TemplateArchive;
