import React from "react";

import { Flex, Text } from "@chakra-ui/react";

import { MainView } from "../MainView";
import { BottomSheet, BottomSheetProps } from "./BottomSheet";

export default {
  title: "Components/BottomSheet",
  component: BottomSheet,
};

const Template = (args: BottomSheetProps) => (
  <MainView>
    <BottomSheet {...args}>
      <Flex justifyContent="center">
        <Text>Content goes here...</Text>
      </Flex>
    </BottomSheet>
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  isMinimised: false,
};
