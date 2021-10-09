import { Button } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

interface HidderProps {
  children: any;
  minHeight?: number;
  buttonText?: string;
}

const Hidder = ({
  minHeight = 500,
  children,
  buttonText = "Показать все",
}: HidderProps) => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const height = isOpen ? "100%" : minHeight;
  const gradient = isOpen
    ? "none"
    : "linear(to-t, gray.900 0%, transparent 20%)";
  return (
    <>
      <Box height={height} overflow="hidden" position="relative">
        {children}
        <Box
          bgGradient={gradient}
          position="absolute"
          w="100%"
          h="100%"
          top={0}
          zIndex={2}
        />
      </Box>
      {!isOpen && (
        <Button
          mt={0}
          size="sm"
          variant="outline"
          isFullWidth
          _hover={{ color: "primary.500", borderColor: "primary.500" }}
          onClick={setIsOpen.on}
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default Hidder;
