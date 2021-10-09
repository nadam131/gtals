import { Box, Heading, VStack } from "@chakra-ui/layout";
import React from "react";
import Hidder from "../../Hidder/Hidder";

interface PostInfoProps {
  list: any;
}

const PostInfo = ({ list }: PostInfoProps) => {
  return (
    <Hidder>
      <VStack spacing={5}>
        {list.map((el: any) => {
          return (
            <VStack
              w="100%"
              align="flex-start"
              key={el.post_info_title}
              spacing={3}
            >
              <Heading as="h6" size="sm">
                {el.post_info_title}
              </Heading>
              <Box dangerouslySetInnerHTML={{ __html: el.post_info_text }} />
            </VStack>
          );
        })}
      </VStack>
    </Hidder>
  );
};

export default PostInfo;
