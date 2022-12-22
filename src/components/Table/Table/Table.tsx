import React, { FC } from "react";

import {
  Alert,
  AlertIcon,
  Box,
  Table as ChakraTable,
  Skeleton,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { TableCell } from "../TableCell";
import { TableCellEntry, TableHeadEntry } from "./Table.types";

export interface TableProps {
  columnCount?: number;
  headers?: TableHeadEntry[];
  rows?: TableCellEntry[][];
  isLoading?: boolean;
  noEntriesMessage?: string;
}

export const Table: FC<TableProps> = ({
  columnCount = 0,
  headers = [],
  rows = [],
  isLoading = false,
  noEntriesMessage = "",
}) => {
  if (columnCount === 0 || rows.length === 0) {
    return (
      <Alert status="info" borderRadius={6}>
        <AlertIcon />
        {noEntriesMessage}
      </Alert>
    );
  }

  return (
    <Box overflow="auto">
      <ChakraTable size="md" variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {isLoading ? (
              <>
                {[...Array(columnCount)].map((_, index) => (
                  <Th key={index}>
                    <Skeleton height="24px" width="64px" />
                  </Th>
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
              {[...Array(columnCount)].map((_, index) => (
                <TableCell key={index}>
                  <Skeleton height="24px" width="64px" />
                </TableCell>
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
    </Box>
  );
};
