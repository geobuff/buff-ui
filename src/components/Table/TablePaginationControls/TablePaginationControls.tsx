import React, { FC } from "react";

import { Box, Button, Flex, Select } from "@chakra-ui/react";

import { ArrowLeft, ArrowRight } from "../../Icons";

export interface TablePaginationControlsProps {
  shouldRenderOnMobile?: boolean;
  isLoading?: boolean;
  hasMoreEntries?: boolean;
  page?: number;
  rank?: string;
  perPageText?: string;
  previousText?: string;
  nextText?: string;
  onChangeLimit?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

export const TablePaginationControls: FC<TablePaginationControlsProps> = ({
  shouldRenderOnMobile = false,
  isLoading = false,
  hasMoreEntries = false,
  page = 0,
  rank = "",
  perPageText = "",
  previousText = "",
  nextText = "",
  onChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>): void => {},
  onNextPage = (): void => {},
  onPreviousPage = (): void => {},
}) => (
  <Flex marginTop="auto" pt={4}>
    <Select
      backgroundColor="#F3F3F3"
      border="none"
      fontWeight="bold"
      onChange={onChangeLimit}
      width="170px"
      height="48px"
      _hover={{ backgroundColor: "#e6e6e6" }}
      isDisabled={isLoading}
    >
      <option value={10}>{`10 ${perPageText}`}</option>
      <option value={20}>{`20 ${perPageText}`}</option>
      <option value={50}>{`50 ${perPageText}`}</option>
    </Select>

    <Box marginLeft="auto">
      <Button
        backgroundColor="#F3F3F3"
        isDisabled={page === 0 || !!rank || isLoading}
        marginRight={{ base: 2, sm: 3 }}
        onClick={onPreviousPage}
        height="48px"
        width={{ base: "46px", md: "132px" }}
        _hover={{ backgroundColor: "#e6e6e6" }}
      >
        <ArrowLeft
          marginRight={{ base: 0, md: "6px" }}
          height="20px"
          width="20px"
        />
        {shouldRenderOnMobile && previousText}
      </Button>

      <Button
        role="group"
        backgroundColor="#F3F3F3"
        onClick={onNextPage}
        isDisabled={!hasMoreEntries || !!rank || isLoading}
        height="48px"
        width={{ base: "46px", md: "132px" }}
        _hover={{ backgroundColor: "#e6e6e6" }}
      >
        {shouldRenderOnMobile && nextText}
        <ArrowRight
          marginLeft={{ base: 0, md: "6px" }}
          height="20px"
          width="20px"
        />
      </Button>
    </Box>
  </Flex>
);
