import React, { FC } from "react";

import { Flex, Link, Text } from "@chakra-ui/react";

export interface RegisterLinkProps {
  message?: string;
  action?: string;
}

export const RegisterLink: FC<RegisterLinkProps> = ({
  message = "",
  action = "",
}) => (
  <Flex direction="row" margin={{ sm: 3, md: 5 }} marginTop={{ base: 2 }}>
    <Text fontSize="14px" marginRight={1} fontWeight="500">
      {message}
    </Text>
    <Link
      href="/register"
      fontSize="14px"
      fontWeight="500"
      textDecoration="underline"
      _hover={{ color: "#5c5c5c" }}
    >
      {action}
    </Link>
  </Flex>
);
