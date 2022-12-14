import React from "react";

import { ErrorAlertBanner, ErrorAlertBannerProps } from "./ErrorAlertBanner";

export default {
  title: "Components/ErrorAlertBanner",
  component: ErrorAlertBanner,
};

const Template = (args: ErrorAlertBannerProps) => (
  <ErrorAlertBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  error: "Error! Error! Error!",
};
