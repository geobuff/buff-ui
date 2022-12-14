import React from "react";

import { MainView } from "../../MainView";
import { ResetPasswordForm, ResetPasswordFormProps } from "./ResetPasswordForm";

export default {
  title: "Auth/ResetPasswordForm",
  component: ResetPasswordForm,
};

const Template = (args: ResetPasswordFormProps) => (
  <MainView>
    <ResetPasswordForm {...args}>Enter form content here...</ResetPasswordForm>
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  shouldRenderOnMobile: true,
  error: "",
  isSuccess: false,
  heading: "Reset Your Password",
  explainer:
    "Enter your new password. Make sure it's secure and different to your last one.",
  successHeading: "Successfully updated password!",
  descriptionOne: "Please ",
  action: "Login",
  descriptionTwo: " to continue.",
  href: "/login",
};
