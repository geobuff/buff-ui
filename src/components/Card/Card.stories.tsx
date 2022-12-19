import React from "react";

import { BoxProps, Text } from "@chakra-ui/react";

import { MainView } from "../MainView";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args: BoxProps) => (
  <MainView>
    <Card {...args} mx={6}>
      <Text>Content goes here...</Text>
    </Card>
  </MainView>
);

export const Default = Template.bind({});
