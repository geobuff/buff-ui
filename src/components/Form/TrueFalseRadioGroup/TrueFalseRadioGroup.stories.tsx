import React from "react";

import { FormikWrapper } from "../FormikWrapper";
import {
  TrueFalseRadioGroup,
  TrueFalseRadioGroupProps,
} from "./TrueFalseRadioGroup";

export default {
  title: "Form/TrueFalseRadioGroup",
  component: TrueFalseRadioGroup,
};

const Template = (args: TrueFalseRadioGroupProps) => (
  <FormikWrapper>
    <TrueFalseRadioGroup {...args} />
  </FormikWrapper>
);

export const Default = Template.bind({});
Default.args = {
  name: "shippingId",
  label:
    "If a tree falls in the forest and no one is around to hear it, does it make a sound?",
  color: "green",
  trueLabel: "True",
  falseLabel: "False",
};
