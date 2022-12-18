import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidDotsVertical: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Icon>
);
