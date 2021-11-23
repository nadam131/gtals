import * as React from "react";
import {
  useMultiStyleConfig,
  Box,
  Heading,
  BoxProps,
  VStack,
  Text,
} from "@chakra-ui/react";
import Image from "../../Image/Image";

interface CardArticleProps extends BoxProps {
  variant?: "shadow" | undefined;
  size?: "xs" | "md" | "lg" | undefined;

  title: string;
  children?: any;
  image?: string;
  href?: string;
  description?: string;
  color?: string;
}

const CardArticle = ({
  variant = undefined,
  size = undefined,
  children,
  description,
  image,
  color,
  ...rest
}: CardArticleProps) => {
  const styles = useMultiStyleConfig(`CardArticleStyles`, {
    variant,
    color,
    size,
  });

  return (
    <Box role="group" __css={styles.outer} {...rest}>
      <Image src={image} alt={children} __css={styles.image} />
      <VStack spacing={3}>
        <Heading sx={{ ...styles.heading }}>{children}</Heading>
        {description && (
          <Text sx={{ ...styles.description }}>{description}</Text>
        )}
      </VStack>
    </Box>
  );
};

export default CardArticle;
