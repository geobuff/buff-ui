import React from "react";

import { FormikWrapper } from "../FormikWrapper";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

export default {
  title: "Form/RadioGroup",
  component: RadioGroup,
};

const Template = (args: RadioGroupProps) => (
  <FormikWrapper>
    <RadioGroup {...args} />
  </FormikWrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: "shippingId",
  label: "Shipping Option",
  isLabelVisible: true,
  color: "green",
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
  selectedValue: "1",
};
