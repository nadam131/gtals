import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Paginator from "../../components/Paginator/Paginator";
import {
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

import NavTaxonomies from "../../components/Nav/NavTaxonomies/NavTaxonomies";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const TemplateArchive = (props) => {
  const { articles, pages: total, taxonomy, term } = props;

  const router = useRouter();
  const {
    asPath,
    query: { postType, page },
  } = router;

  const { data, error } = useSWR(
    `http://localhost:4000/articles/${postType}/${page || 1}`,
    fetcher
  );

  const { data: taxonomies } = useSWR(
    `http://localhost:4000/taxonomies/cpt/${postType}`,
    fetcher
  );

  const handlePageChange = () => {
    router.push(`/${postType}?page=${Number(page || 1) + 1}`);
  };

  if (!data) return null;

  return (
    <div>
      <Container mt={10} maxW="container.xxl">
        <NavTaxonomies filters={taxonomies.filters} />
      </Container>
      <Container mt={10} maxW="container.xxl">
        <Grid gap={6} templateColumns="repeat(12, 1fr)">
          {articles?.data?.map((article, i) => {
            return (
              <GridItem
                key={article.id}
                gridColumn={`span ${i === 0 ? 7 : i === 1 ? 5 : 4}`}
              >
                <Link href={`/${postType}/${article.slug}`}>
                  <a>
                    <Box
                      p={7}
                      h="100%"
                      border="1px solid"
                      borderColor="gray.700"
                      transition="border-color .2s"
                      _hover={{
                        borderColor: "primary",
                      }}
                    >
                      <Heading mt={5} size="md" as="h2">
                        {article.title}
                      </Heading>
                      <Text mt={3}>{article.description}</Text>
                    </Box>
                  </a>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
      <Paginator
        pagesCount={total}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TemplateArchive;
