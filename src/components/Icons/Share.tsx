import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const Share: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M20 4a4 4 0 1 0-7.912.838L7.017 7.373a4 4 0 1 0-.329 5.589l5.33 2.665a4 4 0 1 0 .686-1.893l-4.912-2.456a3.996 3.996 0 0 0 .12-2.116l5.071-2.535A4 4 0 0 0 20 4Z"
    />
  </Icon>
);
