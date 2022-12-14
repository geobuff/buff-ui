import React, { FC } from "react";

import { Flex, Link, Text } from "@chakra-ui/react";

export interface LoginLinkProps {
  message?: string;
  action?: string;
  href?: string;
}

export const LoginLink: FC<LoginLinkProps> = ({
  message = "",
  action = "",
  href = "",
}) => (
  <Flex
    direction="row"
    marginTop={{ base: 3, md: 5 }}
    marginRight={{ base: 0, md: 5 }}
  >
    <Text fontSize="14px" marginRight={1} fontWeight="500">
      {message}
    </Text>
    <Link
      href={href}
      fontSize="14px"
      fontWeight="500"
      textDecoration="underline"
      _hover={{ color: "#5c5c5c" }}
    >
      {action}
    </Link>
  </Flex>
);
