import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const OutlinedChevronRight: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="none"
      d="m9 6 6 6-6 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    />
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  </Icon>
);
