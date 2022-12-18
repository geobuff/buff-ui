import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const CloseLine: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Icon>
);
