import React from "react";
// import { useRouter } from "next/router";
import useSWR from "swr";
// import Paginator from "../../components/Paginator/Paginator";
import { Box, Container } from "@chakra-ui/react";

import NavTaxonomies from "../../components/Nav/NavTaxonomies/NavTaxonomies";
import { fetcher } from "../../api";
import GridArticles from "../Grid/GridArticles";

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
  // const router = useRouter();
  // const {
  //   query: { page },
  // } = router;

  const {
    data: { data: articles },
  } = useSWR(url, fetcher);

  const { data: taxonomies } = useSWR(
    `http://localhost:4000/taxonomies/cpt/${postType}`,
    fetcher
  );

  if (!articles) return null;

  // const handlePageChange = (page: number) => {
  //   router.push(`/${postType}?page=${page}`);
  // };

  // const currentPage = Number(page);

  return (
    <Box pt={6}>
      <Container maxW="container.xxl">
        <NavTaxonomies filters={taxonomies.filters} />
        <GridArticles articles={articles} />
        {total > 1 && (
          <Box mt={10} pt={10} borderTop="2px" borderColor="gray.700">
            {/* <Paginator
              pagesCount={total}
              currentPage={currentPage}
              // onPageChange={handlePageChange}
            /> */}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TemplateArchive;
