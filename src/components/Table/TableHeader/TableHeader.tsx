import React, { FC } from "react";

import {
  Box,
  Button,
  Divider,
  Flex,
  FlexProps,
  Heading,
} from "@chakra-ui/react";

import { Action } from "./TableHeader.types";

export interface TableHeaderProps extends FlexProps {
  heading: string;
  actions?: Action[];
}

export const TableHeader: FC<TableHeaderProps> = ({
  heading = "",
  actions = [],
  ...props
}) => (
  <>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom={5}
      marginX={2}
      {...props}
    >
      <Heading fontSize="24px">{heading}</Heading>
      <Box>
        {actions.map((action, index) => (
          <Button
            key={index}
            colorScheme="teal"
            size="md"
            onClick={action.callback}
            mr={actions.length > 1 && index !== actions.length - 1 && 3}
          >
            {action.name}
          </Button>
        ))}
      </Box>
    </Flex>
    <Divider borderWidth={1} marginBottom={6} />
  </>
);
