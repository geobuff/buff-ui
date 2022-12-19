import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

interface FlagFallbackProps {
  height?: string | number | string[] | object;
  width?: string | number | string[] | object;
}

export const FlagFallback: FC<FlagFallbackProps> = ({
  height = "18px",
  width = "24.5px",
}) => (
  <Box
    height={height}
    width={width}
    borderRadius={4}
    backgroundColor="#364858"
  />
);
