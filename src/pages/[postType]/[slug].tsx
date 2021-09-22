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
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Single: NextPage = () => {
  const {
    pathname,
    asPath: path,
    query: { postType },
  } = useRouter();

  const { data, error } = useSWR(
    `http://localhost:4000/article${path}`,
    fetcher
  );

  console.log(data, "data");
  if (!data) return null;
  console.log(error, "error");
  return (
    <Container maxW="container.xxl">
      <Grid h="100vh" gap={10} templateColumns="repeat(12, 1fr)">
        <GridItem py={10} gridColumn="span 9">
          <Box>
            <Heading>{data.title}</Heading>
          </Box>
          <Box mt={10}>
            <Grid templateColumns="repeat(12, 1fr)">
              {/* <GridItem gridColumn="span 5">
                <AspectRatio ratio={16 / 9} borderRadius={10} overflow="hidden">
                  <Image src={data.image} layout="fill" />
                </AspectRatio>
              </GridItem> */}
              <GridItem gridColumn="span 9">
                <Text>{data.description}</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box
            bg="#fafafa"
            color="black"
            h="100%"
            p={10}
            borderRadius={10}
            mt={10}
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></Box>
        </GridItem>
        <GridItem p={10} borderLeft="1px" borderColor="gray.700">
          <Box>Aside</Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Single;

// import { useRouter } from 'next/router'
// import React from 'react'
// import { Element } from 'react-scroll'
// import { api } from '../../api'
// import Main from '../../components/Main'
// import { POST_TYPES } from '../../constants'
// import useFetch from '../../hooks/use-fetch'
// import { TEMPLATES } from '../../templates'
// import createBreadcrumbs from '../../utils/createBreadcrumbs'

// const PagePost = () => {
//     const {
//         pathname,
//         asPath: path,
//         query: { postType },
//     } = useRouter()

//     console.log(pathname, 'pathname')
//     console.log(postType, 'postType')
//     console.log(path, 'path')

//     const { fetchArticle } = useFetch()
//     const { data, isLoading } = fetchArticle(path)

//     if (isLoading) return null
//     const breadcrumbs = [
//         { name: POST_TYPES[postType].name, url: `/${postType}` },
//     ]

//     return (
//         <Main title={data.title} breadcrumbs={breadcrumbs}>
//             <Element name="Paginator">
//                 {/* TODO Нужно это дело убрать в какую-то утилиту, чтобы нэйминг был понятнее */}
//                 {React.createElement(TEMPLATES['single'], { data })}
//             </Element>
//         </Main>
//     )
// }

// export default PagePost
