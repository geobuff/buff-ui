import React from "react";

import {
  TablePaginationControls,
  TablePaginationControlsProps,
} from "./TablePaginationControls";

export default {
  title: "Table/TablePaginationControls",
  component: TablePaginationControls,
};

const Template = (args: TablePaginationControlsProps) => (
  <TablePaginationControls {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  isLoading: false,
  hasMoreEntries: true,
  page: 0,
  perPageText: "Per Page",
  previousText: "Previous",
  nextText: "Next",
};

export const Previous = Template.bind({});
Previous.args = {
  isMobile: false,
  isLoading: false,
  page: 1,
  perPageText: "Per Page",
  previousText: "Previous",
  nextText: "Next",
};
