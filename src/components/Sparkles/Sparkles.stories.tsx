import React from "react";

import { Sparkles, SparklesProps } from "./Sparkles";

export default {
  title: "Components/Sparkles",
  component: Sparkles,
};

const Template = (args: SparklesProps) => (
  <Sparkles {...args}>Testing...</Sparkles>
);

export const Default = Template.bind({});
Default.args = {
  color: "#FFC700",
  showSparkles: true,
};
