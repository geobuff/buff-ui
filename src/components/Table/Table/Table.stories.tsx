import React from "react";

import { Table, TableProps } from "./Table";
import { headers, rows } from "./Templates";

export default {
  title: "Table/Table",
  component: Table,
};

const Template = (args: TableProps) => <Table {...args} />;

const DEFAULT_PROPS: TableProps = {
  noEntriesMessage: "No entries to display.",
  isLoading: false,
  rowCount: 10,
  columnCount: 4,
};

export const Default = Template.bind({});
Default.args = {
  ...DEFAULT_PROPS,
  headers,
  rows,
};

export const NoEntries = Template.bind({});
NoEntries.args = {
  ...DEFAULT_PROPS,
};

export const Loading = Template.bind({});
Loading.args = {
  ...DEFAULT_PROPS,
  headers,
  rows,
  isLoading: true,
};
