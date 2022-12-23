import React, { FC } from "react";

import { Box, Flex, FlexProps } from "@chakra-ui/react";

import { Card } from "../../Card";

export interface TableContainerProps extends FlexProps {
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
  ...props
}) => (
  <Flex
    direction="column"
    maxWidth={{ base: "100%", md: 1300 }}
    marginX="auto"
    marginBottom={14}
    marginTop={{ base: 10, sm: 10, md: 14 }}
    paddingX={3}
    width="100%"
    {...props}
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
        <Box overflow="auto">{children}</Box>
        {paginationControls}
      </Flex>
    </Card>
  </Flex>
);
