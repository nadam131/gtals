import React from "react";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";

const Paginator = (props) => {
  return (
    <Pagination {...props}>
      <PaginationContainer
        align="center"
        justify="space-between"
        w="full"
        p={4}
      >
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationPageGroup isInline align="center" />
        <PaginationNext>Next</PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};

export default Paginator;
