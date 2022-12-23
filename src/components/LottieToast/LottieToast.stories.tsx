import React from "react";

import { LottieToast, LottieToastProps } from "./LottieToast";
import animationData from "./coin-spin.json";

export default {
  title: "Components/LottieToast",
  component: LottieToast,
};

const Template = (args: LottieToastProps) => <LottieToast {...args} />;

export const Default = Template.bind({});
Default.args = {
  animationData,
  message: "You have earned 1000 coins!",
  color: "yellow",
};
