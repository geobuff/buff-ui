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
  shouldRenderOnMobile: true,
  isLoading: false,
  hasMoreEntries: true,
  page: 0,
  rank: "0",
  perPageText: "Per Page",
  previousText: "Previous",
  nextText: "Next",
};
