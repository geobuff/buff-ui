import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const ArrowLeft: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M5 12l6-6m-6 6l6 6m-6-6h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
