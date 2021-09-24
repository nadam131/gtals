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

  if (!data) return null;

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
