import React, { FC } from "react";

import { Box, BoxProps } from "@chakra-ui/react";

export const Card: FC<BoxProps> = ({ children = null, ...props }) => (
  <Box
    background="#FFF"
    boxShadow="0px 4px 4px rgba(180, 180, 180, 0.25)"
    borderRadius={12}
    width="100%"
    padding={4}
    {...props}
  >
    {children}
  </Box>
);
