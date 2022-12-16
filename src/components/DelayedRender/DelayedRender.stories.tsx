import React from "react";

import { DelayedRender, DelayedRenderProps } from "./DelayedRender";

export default {
  title: "Components/DelayedRender",
  component: DelayedRender,
};

const Template = (args: DelayedRenderProps) => (
  <DelayedRender {...args}>Delayed content appears here...</DelayedRender>
);

export const Default = Template.bind({});
Default.args = {
  waitBeforeShow: 2000,
};
