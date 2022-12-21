import React from "react";

import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import { TableCell, TableCellProps } from "./TableCell";

export default {
  title: "Table/TableCell",
  component: TableCell,
};

const Template = (args: TableCellProps) => (
  <Table>
    <Thead>
      <Tr>
        <Th>Username</Th>
        <Th>Rank</Th>
        <Th>Motto</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <TableCell {...args}>Testing</TableCell>
        <TableCell {...args}>152</TableCell>
        <TableCell {...args}>Yo</TableCell>
      </Tr>
    </Tbody>
  </Table>
);

export const Default = Template.bind({});
