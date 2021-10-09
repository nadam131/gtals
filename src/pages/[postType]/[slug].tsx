import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import useSWR, { SWRConfig } from "swr";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ENDPOINTS, fetcher } from "../../api";
import TemplateArticle from "../../components/Template/TemplateArticle";
import { useFetch } from "../../hooks/use-fetch";

interface ServerSideProps {
  query: {
    postType: string;
    slug: string;
  };
}

interface PostPageProps {
  url: string;
  fallback: any;
}

const PostPage = ({ url, fallback }: PostPageProps) => {
  return (
    <SWRConfig
      value={{
        fallback,
      }}
    >
      <TemplateArticle url={url} />
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
      url,
      post,
      fallback: {
        [`${url}`]: post,
      },
    },
  };
}

export default PostPage;
