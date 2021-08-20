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

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR(
    "http://localhost:4000/articles/news/1",
    fetcher
  );

  console.log(data?.data, "data");
  if (!data) return null;
  console.log(error, "error");
  return (
    <Container maxW="container.xxl">
      <Grid h="100vh" gap={5} templateColumns="repeat(12, 1fr)">
        <GridItem py={4} gridColumn="span 9">
          <Skeleton isLoaded={data}>
            {data?.data && (
              <Grid gap={6} templateColumns="repeat(12, 1fr)">
                {data.data.map((article, i) => {
                  return (
                    <GridItem
                      gridColumn={`span ${i === 0 ? 7 : i === 1 ? 5 : 4}`}
                    >
                      <Link href={`/news/${article.slug}`}>
                        <Box
                          p={4}
                          h="100%"
                          border="1px solid"
                          borderColor="gray.700"
                          transition="border-color .2s"
                          _hover={{
                            borderColor: "teal.100",
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
                      </Link>
                    </GridItem>
                  );
                })}
              </Grid>
            )}
          </Skeleton>
        </GridItem>
        <GridItem p={4} borderLeft="1px" borderColor="gray.700">
          <Box>Aside</Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
