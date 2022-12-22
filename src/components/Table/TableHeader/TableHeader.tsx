import React, { FC } from "react";

import {
  Box,
  Button,
  Divider,
  Fade,
  Flex,
  FlexProps,
  Heading,
  Spinner,
} from "@chakra-ui/react";

import { Action } from "./TableHeader.types";

export interface TableHeaderProps extends FlexProps {
  isLoading?: boolean;
  leftContent?: React.ReactNode;
  heading: string | React.ReactNode;
  actions?: Action[];
}

export const TableHeader: FC<TableHeaderProps> = ({
  isLoading = false,
  leftContent = null,
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
      <Flex alignItems="center" paddingX={{ base: 3, sm: 0, md: 0 }}>
        {leftContent}
        <Box>
          {React.isValidElement(heading) ? (
            heading
          ) : (
            <Heading fontSize="24px">{heading}</Heading>
          )}
        </Box>
        <Fade in={isLoading} unmountOnExit>
          <Spinner
            marginLeft={{ base: 3, md: 4 }}
            marginTop={3}
            size="md"
            color="blue.500"
            emptyColor="green.500"
          />
        </Fade>
      </Flex>
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
