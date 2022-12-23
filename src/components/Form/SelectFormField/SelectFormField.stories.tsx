import React from "react";

import { Flex } from "@chakra-ui/react";

import { FormikWrapper } from "../FormikWrapper";
import { SelectFormField, SelectFormFieldProps } from "./SelectFormField";

export default {
  title: "Form/SelectFormField",
  component: SelectFormField,
};

const Template = (args: SelectFormFieldProps) => (
  <FormikWrapper>
    <Flex width={600}>
      <SelectFormField {...args} />
    </Flex>
  </FormikWrapper>
);

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: "NZ-wide Standard Shipping",
      value: "1",
    },
    {
      label: "International Shipping",
      value: "2",
    },
  ],
  name: "shippingId",
  label: "Shipping Option",
  helper: "Select your shipping option",
};
