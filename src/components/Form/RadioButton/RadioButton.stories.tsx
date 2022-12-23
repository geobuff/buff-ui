import React from "react";

import { FormControl, HStack, Text, UseRadioProps } from "@chakra-ui/react";

import { RadioButton, RadioButtonProps } from "./RadioButton";

export default {
  title: "Form/RadioButton",
  component: RadioButton,
};

const Template = (args: RadioButtonProps) => (
  <FormControl>
    <HStack spacing={3}>
      <RadioButton {...args}>
        <Text fontWeight="bold">NZ-wide standard shipping</Text>
        <Text>$5.99 - Expect delivery in 5-7 days</Text>
      </RadioButton>
    </HStack>
  </FormControl>
);

const radioProps: UseRadioProps = {
  value: "1",
  "data-radiogroup": true,
  isChecked: true,
  name: "shippingId",
};

export const Default = Template.bind({});
Default.args = {
  radioProps,
  color: "green",
};
