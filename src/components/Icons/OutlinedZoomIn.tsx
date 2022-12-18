import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const OutlinedZoomIn: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M2 9a7 7 0 1114 0A7 7 0 012 9zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 009 0zm1 6a1 1 0 00-2 0v2H6a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V6z"
    />
  </Icon>
);

export default OutlinedZoomIn;
