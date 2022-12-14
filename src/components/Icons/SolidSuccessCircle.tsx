import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidSuccessCircle: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0c5.5228 0 10 4.47715 10 10 0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10zm13.7071-1.29289c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0L9 10.5858 7.70711 9.29289c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02371 0 1.41421l2 2c.39053.3905 1.02369.3905 1.41422 0l3.99999-3.99999z"
      clipRule="evenodd"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Icon>
);
