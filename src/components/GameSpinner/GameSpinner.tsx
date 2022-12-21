import React, { FC } from "react";

import { Fade, Flex, FlexProps, Spinner } from "@chakra-ui/react";

export const GameSpinner: FC<FlexProps> = ({ ...props }) => (
  <Flex
    height={{ base: "30vh", md: "90vh" }}
    alignItems="center"
    justifyContent="center"
    color="white"
    {...props}
  >
    <Fade in unmountOnExit>
      <Spinner size="xl" color="#1d8db3" />
    </Fade>
  </Flex>
);
