import React, { FC } from "react";

import { Box, BoxProps, Image } from "@chakra-ui/react";

interface CustomFlagProps extends BoxProps {
  url?: string;
  code?: string;
  height?: number;
  width?: number;
}

export const CustomFlag: FC<CustomFlagProps> = ({
  url = "",
  code = "",
  height = 18,
  width = 24.5,
  ...props
}) => (
  <Box {...props}>
    <Image
      src={url}
      alt={`Flag for ${code}`}
      width={width}
      height={height}
      objectFit="cover"
    />
  </Box>
);
