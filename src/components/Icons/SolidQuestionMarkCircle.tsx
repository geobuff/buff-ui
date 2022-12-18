import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidQuestionMarkCircle: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-5a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 115.31 3.78.674.674 0 00-.273.169.177.177 0 00-.037.054v.497a1 1 0 11-2 0V13c0-1.152.924-1.856 1.655-2.11A2.001 2.001 0 0012 7zm1 6.007v-.004.004zM13 17a1 1 0 11-2 0 1 1 0 012 0z"
      clipRule="evenodd"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Icon>
);
