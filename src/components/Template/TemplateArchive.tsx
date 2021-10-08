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
import { fetcher } from "../../api";
import { ArticleProps } from "../../types";

interface TemplateArchiveProps {
  pages: number;
  postType: string;
  url: string;
}

const TemplateArchive = ({
  pages: total,
  url,
  postType,
}: TemplateArchiveProps) => {
  const router = useRouter();
  const {
    query: { page },
  } = router;

  const {
    data: { data: articles },
  } = useSWR(url, fetcher);

  const { data: taxonomies } = useSWR(
    `http://localhost:4000/taxonomies/cpt/${postType}`,
    fetcher
  );

  if (!articles) return null;

  const handlePageChange = (page: number) => {
    router.push(`/${postType}?page=${page}`);
  };

  const currentPage = Number(page);

  return (
    <Box>
      <Container mt={10} maxW="container.xxl">
        <NavTaxonomies filters={taxonomies.filters} />
      </Container>
      <Container mt={10} maxW="container.xxl">
        <Grid gap={6} templateColumns="repeat(12, 1fr)">
          {articles.map((article: ArticleProps) => {
            return (
              <GridItem key={article.id} gridColumn={`span ${4}`}>
                <Link href={`/${postType}/${article.slug}`} passHref>
                  <Box as="a">
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
                          alt={article.title}
                        />
                      </AspectRatio>
                      <Heading mt={5} size="md" as="h2">
                        {article.title}
                      </Heading>
                      <Text mt={3}>{article.description}</Text>
                    </Box>
                  </Box>
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
    </Box>
  );
};

export default TemplateArchive;
