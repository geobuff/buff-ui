import React, { FC } from "react";

import { Flex } from "@chakra-ui/react";

export interface TableFiltersProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const TableFilters: FC<TableFiltersProps> = ({
  leftContent = null,
  rightContent = null,
}) => {
  return (
    <Flex
      marginBottom={{ base: 3, md: 1 }}
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Flex
        flexGrow={4}
        marginBottom={2}
        flexWrap="wrap"
        width={{ base: "100%", md: "inherit" }}
      >
        {leftContent}
      </Flex>

      <Flex
        marginLeft={{ base: 0, md: 2 }}
        width={{ base: "100%", sm: "100%", md: "400px" }}
      >
        {rightContent}
      </Flex>
    </Flex>
  );
};
