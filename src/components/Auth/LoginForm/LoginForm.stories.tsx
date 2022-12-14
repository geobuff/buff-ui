import React from "react";

import { MainView } from "../../MainView";
import { LoginForm, LoginFormProps } from "./LoginForm";

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
};

const Template = (args: LoginFormProps) => (
  <MainView>
    <LoginForm {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  shouldRenderOnMobile: true,
  linkMessage: "Don't have an account?",
  linkAction: "Sign up today",
  children: "Form content goes here...",
};
