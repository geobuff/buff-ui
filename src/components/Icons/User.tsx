import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const User: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M12 5a4 4 0 100 8 4 4 0 000-8zM6 9a6 6 0 1112 0A6 6 0 016 9z"
    />
    <path
      fill="currentColor"
      d="M6.124 19h11.752c-.547-2.197-2.86-4-5.876-4-3.016 0-5.329 1.803-5.876 4zM4 20c0-4.005 3.732-7 8-7s8 2.995 8 7a1 1 0 01-1 1H5a1 1 0 01-1-1z"
    />
  </Icon>
);
