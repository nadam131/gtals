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
import { api, ENDPOINTS } from "../api";
import { GridAside } from "../components/Grid/Grid";

// TODO Добавить статичный рендер
const Home: NextPage = () => {
  const { data } = useSWR(`${ENDPOINTS["NESTJS"]}/articles/news/1`, api.get);
  if (!data) return null;

  const renderAside = () => {
    return "this is aside";
  };

  return (
    <Container maxW="container.xxl">
      <GridAside aside={renderAside()}>
        <Skeleton isLoaded={data}>
          {data?.data && (
            <Grid gap={6} templateColumns="repeat(12, 1fr)">
              {data.data.map((article, i) => {
                return (
                  <GridItem
                    key={article.id}
                    gridColumn={`span ${i === 0 ? 7 : i === 1 ? 5 : 4}`}
                  >
                    <Link href={`/news/${article.slug}`}>
                      <a>
                        <Box
                          p={4}
                          h="100%"
                          border="1px solid"
                          borderColor="gray.700"
                          transition="border-color .2s"
                          _hover={{
                            borderColor: "primary",
                          }}
                        >
                          <AspectRatio ratio={16 / 9}>
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
          )}
        </Skeleton>
      </GridAside>
    </Container>
  );
};

export default Home;
