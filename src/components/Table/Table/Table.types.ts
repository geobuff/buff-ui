import React from "react";

import { TableCellProps, TableHeadProps } from "@chakra-ui/react";

export interface TableHeadEntry extends TableHeadProps {
  node: React.ReactNode;
  align?: "left" | "right";
}

export interface TableCellEntry extends TableCellProps {
  node: React.ReactNode;
  isNumeric?: boolean;
}
