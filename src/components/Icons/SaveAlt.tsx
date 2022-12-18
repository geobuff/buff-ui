import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SaveAlt: FC<IconProps> = ({ ...props }) => (
  <Icon {...props} fill="none">
    <path
      d="M15 4H17C18.1046 4 19 4.89543 19 6V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V6C1 4.89543 1.89543 4 3 4H5M10 1V11M10 11L13 8M10 11L7 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
