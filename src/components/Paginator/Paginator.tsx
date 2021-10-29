import React from "react";
import ReactPaginate from "react-paginate";
import { Button } from "@chakra-ui/button";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface PaginatorProps {
  pagesCount: number;
  currentPage: number;
  onPageChange: () => any;
}

const Paginator = ({
  pagesCount,
  // onPageChange,
  currentPage,
}: PaginatorProps) => {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage != pagesCount;

  // const pageRenderer = (page: number): ReactElement => {
  //   return (
  //     <Button
  //       onClick={() => onPageChange(page)}
  //       variant="outline"
  //       _hover={{
  //         color: "primary.500",
  //         borderColor: "primary.500",
  //       }}
  //     >
  //       {page}
  //     </Button>
  //   );
  // };

  return (
    <ReactPaginate
      containerClassName="react-paginate-container"
      pageCount={pagesCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={3}
      previousLabel={
        hasPrev ? (
          <Button
            leftIcon={<ArrowBackIcon />}
            // onClick={() => onPageChange(currentPage - 1)}
            variant="outline"
            _hover={{
              color: "primary.500",
              borderColor: "primary.500",
            }}
          >
            Предыдущая страница
          </Button>
        ) : null
      }
      nextLabel={
        hasNext ? (
          <Button
            rightIcon={<ArrowForwardIcon />}
            variant="outline"
            // onClick={() => onPageChange(currentPage + 1)}
            _hover={{
              color: "primary.500",
              borderColor: "primary.500",
            }}
          >
            Следующая страница
          </Button>
        ) : null
      }
      breakLabel={<Button variant="outline">...</Button>}
      // pageLabelBuilder={(page: number) => pageRenderer(page)}
    />
  );
};

export default Paginator;
