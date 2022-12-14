import React from "react";

import { MainView } from "../../MainView";
import {
  ForgotPasswordForm,
  ForgotPasswordFormProps,
} from "./ForgotPasswordForm";

export default {
  title: "Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
};

const Template = (args: ForgotPasswordFormProps) => (
  <MainView>
    <ForgotPasswordForm {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  children: "Form content goes here...",
  shouldRenderOnMobile: true,
  isSuccess: false,
  successMessage:
    "Successfully sent password reset link. Please check your email.",
  backToLoginText: "Back to Login",
  heading: "Forgot Password",
  explainer:
    "Enter the email address you used when you joined and we'll send you a link to reset your password.",
};
