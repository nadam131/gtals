import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Paginator from "../Paginator/Paginator";
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

import NavTaxonomies from "../Nav/NavTaxonomies/NavTaxonomies";
import { fetcher } from "../../api";
import { ArticleProps } from "../../types";
import { useFetchArticle } from "../../hooks/use-fetch";

interface TemplateArticleProps {
  postTypeSlug: string;
  postSlug: string;
}

const TemplateArticle = ({ postTypeSlug, postSlug }: TemplateArticleProps) => {
  const article = useFetchArticle(postTypeSlug, postSlug);

  console.log(article, "article");

  if (!article) return null;

  return <Box>asd</Box>;
};

export default TemplateArticle;
