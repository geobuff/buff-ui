import React, { FC } from "react";

import { Flex } from "@chakra-ui/react";

import { Card } from "../../Card";

export interface TableContainerProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  filters?: React.ReactNode;
  paginationControls?: React.ReactNode;
}

export const TableContainer: FC<TableContainerProps> = ({
  children = null,
  header = null,
  filters = null,
  paginationControls = null,
}) => (
  <Flex
    direction="column"
    maxWidth={{ base: "100%", md: 1300 }}
    marginX="auto"
    marginBottom={14}
    marginTop={{ base: 10, sm: 10, md: 14 }}
    paddingX={3}
    width="100%"
  >
    {header}
    {filters}
    <Card>
      <Flex
        direction="column"
        justifyContent="space-between"
        minHeight="750px"
        paddingTop={2}
        paddingBottom={{ base: 1, md: 3 }}
      >
        {children}
        {paginationControls}
      </Flex>
    </Card>
  </Flex>
);
