import React from "react";

import { HeroBanner } from "../HeroBanner";
import { MainView } from "../MainView";
import { HomeHeader, HomeHeaderProps } from "./HomeHeader";

export default {
  title: "Components/HomeHeader",
  component: HomeHeader,
};

const Template = (args: HomeHeaderProps) => (
  <MainView>
    <HomeHeader {...args}>
      <HeroBanner
        title="Testing"
        subtitle="This is a test."
        isLoading={false}
      />
    </HomeHeader>
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  inputValue: "",
  placeholder: "Enter quiz name...",
};
