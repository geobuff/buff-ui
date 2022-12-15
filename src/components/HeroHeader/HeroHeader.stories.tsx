import React from "react";

import { HeroHeader, HeroHeaderProps } from "./HeroHeader";

export default {
  title: "Components/HeroHeader",
  component: HeroHeader,
};

const Template = (args: HeroHeaderProps) => <HeroHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Merch",
  subtitle: "Currently only available in NZ!",
  backgroundUrl: "",
};

export const Image = Template.bind({});
Image.args = {
  heading: "Merch",
  subtitle: "Currently only available in NZ!",
};
