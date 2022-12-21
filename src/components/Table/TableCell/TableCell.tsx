import React, { FC } from "react";

import { Fade, Td, TableCellProps as TdProps } from "@chakra-ui/react";

export interface TableCellProps extends TdProps {
  children?: React.ReactNode;
}

export const TableCell: FC<TableCellProps> = ({
  children = null,
  ...props
}) => (
  <Td {...props}>
    <Fade in>{children}</Fade>
  </Td>
);
