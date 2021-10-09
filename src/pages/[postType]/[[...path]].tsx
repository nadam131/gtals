import React from "react";
import { SWRConfig } from "swr";

import TemplateArchive from "../../components/Template/TemplateArchive";
import { fetcher } from "../../api";

interface PageArchiveProps {
  fallback: any;
  pages: number;
  postType: string;
  url: string;
}
interface ServerSideProps {
  query: {
    postType: string;
    path: string;
    page: number;
  };
}

const PageArchives = ({ fallback, pages, postType, url }: PageArchiveProps) => {
  return (
    <SWRConfig
      value={{
        fallback,
        onError: async (error: any) => {
          if (error.status !== 403 && error.status !== 404) {
            const error = new Error(
              "An error occurred while fetching the data."
            );
            throw error;
          }
        },
      }}
    >
      <TemplateArchive postType={postType} pages={pages} url={url} />
    </SWRConfig>
  );
};

export async function getServerSideProps({
  query: { postType, page = 1, path },
}: ServerSideProps) {
  const taxonomy = path?.[0];
  const term = path?.[1];

  let newQuery = "";

  if (taxonomy && term) {
    newQuery = `http://localhost:4000/articles/${postType}/${taxonomy}/${term}/${page}`;
  } else {
    newQuery = `http://localhost:4000/articles/${postType}/${page}`;
  }

  const articles = await fetcher(newQuery);

  if (!articles) return null;

  const { pages } = articles;
  const taxonomies = await fetcher(
    `http://localhost:4000/taxonomies/cpt/${postType}`
  );

  return {
    props: {
      url: newQuery,
      postType,
      pages,
      fallback: {
        [`${newQuery}`]: articles,
        [`http://localhost:4000/taxonomies/cpt/${postType}`]: taxonomies,
      },
    },
  };
}

export default PageArchives;
