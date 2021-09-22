import React from "react";
import { SWRConfig } from "swr";

import axios from "axios";
import TemplateArchive from "../../components/Template/TemplateArchive";

const PageArchives = ({ fallback, ...props }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <TemplateArchive {...props} />
    </SWRConfig>
  );
};

export async function getServerSideProps({
  query: { postType, page = 1, path },
}) {
  let newQuery = "";
  const taxonomy = path?.[0];
  const term = path?.[1];

  console.log(postType, "postType");
  console.log(taxonomy, "taxonomy");
  console.log(term, "term");
  console.log(page, "page");

  if (taxonomy && term) {
    newQuery = `http://localhost:4000/articles/${postType}/${taxonomy}/${term}/${page}`;
  } else {
    newQuery = `http://localhost:4000/articles/${postType}/${page}`;
  }

  // if (!page) {
  //   return {
  //     redirect: {
  //       destination: `${postType}?page=1`,
  //       permanent: false,
  //     },
  //   };
  // }

  const articles = await axios.get(newQuery);

  console.log(articles, "articles");
  const {
    data: { count },
  } = articles;

  // if (!count) {
  //   return {
  //     redirect: {
  //       destination: `/`,
  //       permanent: false,
  //     },
  //   };
  // }

  const taxonomies = await axios.get(
    `http://localhost:4000/taxonomies/cpt/${postType}`
  );

  return {
    props: {
      articles: articles.data,
      postType,
      taxonomy: taxonomy || null,
      term: term || null,
      page: 1,
      fallback: {
        [`http://localhost:4000/articles/${postType}/${page}`]: articles.data,
        [`http://localhost:4000/taxonomies/cpt/${postType}`]: taxonomies.data,
      },
    },
  };
}

export default PageArchives;
