import React from "react";
import { AspectRatio, Box } from "@chakra-ui/layout";
import Image from "next/image";

import PostInfo from "../PostInfo/PostInfo";

interface PostAsideProps {
  image: string;
  title: string;
  info: any;
}

const PostAside = ({ image, title, info }: PostAsideProps) => {
  console.log(info, "info");
  return (
    <>
      <Box>
        <Box borderRadius={5} overflow="hidden">
          <AspectRatio ratio={364 / 441}>
            <Image src={image} layout="fill" objectFit="cover" alt={title} />
          </AspectRatio>
        </Box>
      </Box>
      <Box borderTop="1px" borderColor="gray.700" mt={5} pt={5}>
        <PostInfo list={info} />
      </Box>
    </>
  );
};

export default PostAside;
