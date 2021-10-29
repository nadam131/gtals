import React from "react";
import { SWRConfig } from "swr";
import { ENDPOINTS, fetcher } from "../../api";
import TemplateArticle from "../../components/Template/TemplateArticle";
import TemplateNews from "../../components/Template/TemplateNews";

interface ServerSideProps {
  query: {
    postType: string;
    slug: string;
  };
}

interface PostPageProps {
  postType: string;
  url: string;
  fallback: any;
}

const TEMPLATES: { [key: string]: any } = {
  news: TemplateNews,
};

const PostPage = ({ postType, url, fallback }: PostPageProps) => {
  const template = TEMPLATES[postType] || TemplateArticle;
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      {React.createElement(template, { url })}
    </SWRConfig>
  );
};

export async function getServerSideProps({
  query: { postType, slug: postSlug },
}: ServerSideProps) {
  const url = `${ENDPOINTS.NESTJS}/article/${postType}/${postSlug}`;
  const post = await fetcher(url);

  return {
    props: {
      postType,
      url,
      post,
      fallback: {
        [`${url}`]: post,
      },
    },
  };
}

export default PostPage;
