import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidSubtractCircle: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0c5.5228 0 10 4.47715 10 10 0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10zm8.20711-3.20711c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422L8.58579 10l-1.7929 1.7929c-.39052.3905-.39052 1.0237 0 1.4142.39053.3905 1.02369.3905 1.41422 0L10 11.4142l1.7929 1.7929c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142L11.4142 10l1.7929-1.79289c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0L10 8.58579l-1.79289-1.7929z"
      clipRule="evenodd"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Icon>
);
