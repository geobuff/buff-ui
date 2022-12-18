import React, { FC } from "react";

import { Icon, IconProps } from "@chakra-ui/react";

export const SolidPencil: FC<IconProps> = ({ ...props }) => (
  <Icon {...props}>
    <path
      fill="currentColor"
      d="M12.5858 1c.781-.781046 2.0474-.781048 2.8284 0L18 3.58579c.7811.78105.781 2.04738 0 2.82843L16.4142 8 11 2.58579 12.5858 1zM9.58579 4L.585786 13C.210712 13.3751 0 13.8838 0 14.4142V17c0 1.1046.89543 2 2 2h2.58579c.53043 0 1.03914-.2107 1.41421-.5858l9-8.99999L9.58579 4z"
    />
  </Icon>
);
