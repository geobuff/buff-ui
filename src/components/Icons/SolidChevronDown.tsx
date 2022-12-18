import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidChevronDown: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path fill="currentColor" d="M6 8a1 1 0 00-1 2l6 6h2l6-6a1 1 0 00-1-2H6z" />
  </Icon>
);
