import { Button } from "@chakra-ui/button";
import { useBoolean } from "@chakra-ui/hooks";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React from "react";

interface HidderProps {
  children: any;
  minHeight?: number;
  buttonText?: string;
}

const Hidder = ({
  minHeight = 500,
  children,
  buttonText = "Развернуть",
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
          h="20%"
          bottom={0}
          zIndex={2}
        />
      </Box>
      {!isOpen && (
        <Button
          mt={0}
          size="sm"
          variant="outline"
          isFullWidth
          borderColor="gray.700"
          _hover={{ color: "primary.500", borderColor: "primary.500" }}
          onClick={setIsOpen.on}
          leftIcon={<ChevronDownIcon />}
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default Hidder;
