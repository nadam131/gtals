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
  AspectRatio,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import NavTaxonomies from "../../components/Nav/NavTaxonomies/NavTaxonomies";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const TemplateArchive = ({ articles, pages: total, taxonomy, term }) => {
  console.log(total, "total");
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

  const handlePageChange = (page) => {
    console.log(page, "page next");
    router.push(`/${postType}?page=${page}`);
  };

  if (!data) return null;

  const currentPage = Number(page);

  return (
    <div>
      <Container mt={10} maxW="container.xxl">
        <NavTaxonomies filters={taxonomies.filters} />
      </Container>
      <Container mt={10} maxW="container.xxl">
        <Grid gap={6} templateColumns="repeat(12, 1fr)">
          {articles?.data?.map((article, i) => {
            console.log(article, "article");
            return (
              <GridItem key={article.id} gridColumn={`span ${4}`}>
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
                      <AspectRatio ratio={21 / 10}>
                        <Image
                          src={article.image}
                          layout="fill"
                          objectFit="cover"
                        />
                      </AspectRatio>
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
        {total > 1 && (
          <Box mt={10} pt={10} borderTop="2px" borderColor="gray.700">
            <Paginator
              pagesCount={total}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default TemplateArchive;
