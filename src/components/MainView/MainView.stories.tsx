import React from "react";

import { Text } from "@chakra-ui/react";

import { MainView, MainViewProps } from "./MainView";

export default {
  title: "Components/MainView",
  component: MainView,
};

const Template = (args: MainViewProps) => (
  <MainView {...args}>
    <Text ml={3}>Testing...</Text>
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  error: "",
};
