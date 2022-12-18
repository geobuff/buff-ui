import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidChevronUp: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M18 16a1 1 0 00.707-1.707l-6-6a1 1 0 00-1.414 0l-6 6A1 1 0 006 16h12z"
    />
  </Icon>
);
