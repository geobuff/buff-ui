import React, { FC } from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

export interface AuthCardProps extends FlexProps {
  width?: string | number | string[] | object;
}

export const AuthCard: FC<AuthCardProps> = ({
  width = 375,
  children = null,
  ...props
}) => (
  <Flex
    backgroundColor={{ base: "white", md: "none" }}
    borderRadius={12}
    boxShadow={{ base: "none", md: "0px 4px 4px rgba(179, 187, 209, 0.25)" }}
    direction="column"
    padding={5}
    width={width}
    {...props}
  >
    {children}
  </Flex>
);
