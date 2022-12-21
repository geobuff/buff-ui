import React from "react";

import { TableHeader, TableHeaderProps } from "./TableHeader";
import { Action } from "./TableHeader.types";

export default {
  title: "Table/TableHeader",
  component: TableHeader,
};

const Template = (args: TableHeaderProps) => <TableHeader {...args} />;

const actions: Action[] = [
  {
    name: "Create",
    callback: (): void => {},
  },
  {
    name: "Delete",
    callback: (): void => {},
  },
];

export const Default = Template.bind({});
Default.args = {
  heading: "Table Header",
  actions,
};
