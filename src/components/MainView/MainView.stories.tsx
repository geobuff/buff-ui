import React from "react";

import { MainView, MainViewProps } from "./MainView";

export default {
  title: "Components/MainView",
  component: MainView,
};

const Template = (args: MainViewProps) => <MainView {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: "",
};
