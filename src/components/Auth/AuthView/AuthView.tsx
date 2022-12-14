import React, { FC } from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

export const AuthView: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    flex={1}
    direction="column"
    justifyContent="flex-start"
    paddingTop={{ base: 0, md: "2%" }}
    {...props}
  >
    {children}
  </Flex>
);
