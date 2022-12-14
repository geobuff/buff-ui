import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const Search: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M11 5a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 013 11z"
    />
  </Icon>
);
