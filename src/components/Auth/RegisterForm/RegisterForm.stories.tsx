import React from "react";

import { MainView } from "../../MainView";
import { RegisterForm, RegisterFormProps } from "./RegisterForm";

export default {
  title: "Auth/RegisterForm",
  component: RegisterForm,
};

const Template = (args: RegisterFormProps) => (
  <MainView>
    <RegisterForm {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  isFirstStep: true,
  children: "Testing...",
};
