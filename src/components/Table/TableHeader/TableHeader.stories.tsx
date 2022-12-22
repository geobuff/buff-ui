import React from "react";

import { Box, Heading } from "@chakra-ui/react";

import { Twemoji } from "../../Twemoji";
import { TableHeader, TableHeaderProps } from "./TableHeader";
import { Action } from "./TableHeader.types";

export default {
  title: "Table/TableHeader",
  component: TableHeader,
};

const Template = (args: TableHeaderProps) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  heading: "Leaderboard",
};

const actions: Action[] = [
  {
    name: "Create Entry",
    callback: (): void => {},
  },
  {
    name: "Delete Entry",
    callback: (): void => {},
  },
];

export const Actions = Template.bind({});
Actions.args = {
  isLoading: false,
  heading: "Leaderboard",
  actions,
};

const heading = (
  <Heading
    as="h1"
    ml={{ base: 2, md: 3 }}
    fontSize={{ base: "28px", sm: "36px", md: "48px" }}
    fontWeight="bold"
  >
    Leaderboard
  </Heading>
);

export const CustomHeading = Template.bind({});
CustomHeading.args = {
  heading,
  actions,
};

const leftContent = (
  <Box as="span" marginRight={3} paddingTop={1}>
    <Twemoji emoji="🏆" height="46px" width="46px" />
  </Box>
);

export const LeftContent = Template.bind({});
LeftContent.args = {
  isLoading: false,
  leftContent,
  heading,
  actions,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  heading: "Leaderboard",
  actions,
};
