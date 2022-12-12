import React from "react";

import { GeoBuffLogo, GeoBuffLogoProps } from "./GeoBuffLogo";

export default {
  title: "Icons/GeoBuffLogo",
  component: GeoBuffLogo,
};

const Template = (args: GeoBuffLogoProps) => <GeoBuffLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: 32,
  width: 140,
};
