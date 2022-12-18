import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidLock: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M12 4C10.3431 4 9 5.34315 9 7V10H15V7C15 5.34315 13.6569 4 12 4ZM7 7V10H6C4.34315 10 3 11.3431 3 13V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V13C21 11.3431 19.6569 10 18 10H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7ZM13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Icon>
);
