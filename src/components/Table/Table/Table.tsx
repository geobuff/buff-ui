import React, { FC } from "react";

import {
  Alert,
  AlertIcon,
  Table as ChakraTable,
  TableProps as ChakraTableProps,
  Flex,
  Skeleton,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { TableCell } from "../TableCell";
import { TableCellEntry, TableHeadEntry } from "./Table.types";

const skeleton = <Skeleton height="24px" width="64px" />;

const getSkeleton = (index: number, columnCount: number): JSX.Element => {
  if (index < columnCount - 1) {
    return skeleton;
  }

  return (
    <Flex justifyContent="flex-end">
      <Skeleton height="24px" width="64px" />
    </Flex>
  );
};

export interface TableProps extends ChakraTableProps {
  columnCount?: number;
  rowCount?: number;
  headers?: TableHeadEntry[];
  rows?: TableCellEntry[][];
  isLoading?: boolean;
  noEntriesMessage?: string;
}

export const Table: FC<TableProps> = ({
  columnCount = 0,
  rowCount = 10,
  headers = [],
  rows = [],
  isLoading = false,
  noEntriesMessage = "",
  ...props
}) => {
  if (!isLoading && (columnCount === 0 || rows.length === 0)) {
    return (
      <Alert status="info" borderRadius={6}>
        <AlertIcon />
        {noEntriesMessage}
      </Alert>
    );
  }

  return (
    <ChakraTable size="md" variant="striped" colorScheme="gray" {...props}>
      <Thead>
        <Tr>
          {isLoading ? (
            <>
              {[...Array(columnCount)].map((_, index) => (
                <Th key={index}>{getSkeleton(index, columnCount)}</Th>
              ))}
            </>
          ) : (
            <>
              {headers.map((header, index) => (
                <Th key={index} textAlign={header.align ?? "left"}>
                  {header.node}
                </Th>
              ))}
            </>
          )}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          <>
            {[...Array(rowCount)].map((_, index) => (
              <Tr key={index}>
                {[...Array(columnCount)].map((_, index) => (
                  <TableCell key={index}>
                    {getSkeleton(index, columnCount)}
                  </TableCell>
                ))}
              </Tr>
            ))}
          </>
        ) : (
          <>
            {rows?.map((row, index) => (
              <Tr key={index} fontWeight={600}>
                {row.map((entry, index) => (
                  <TableCell
                    key={index}
                    isNumeric={entry.isNumeric ?? false}
                    paddingY={3}
                    paddingX={6}
                    {...entry}
                  >
                    {entry.node}
                  </TableCell>
                ))}
              </Tr>
            ))}
          </>
        )}
      </Tbody>
    </ChakraTable>
  );
};
