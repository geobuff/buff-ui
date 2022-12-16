import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const ArrowRight: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M19 12l-6-6m6 6l-6 6m6-6H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
