import React from "react";

import { HStack } from "@chakra-ui/react";

import { Discord } from "./Discord";
import { Facebook } from "./Facebook";
import { GeoBuffLogo } from "./GeoBuffLogo";
import { GitHub } from "./GitHub";
import { IconProps } from "./Icons.types";
import { Instagram } from "./Instagram";
import { Reddit } from "./Reddit";
import { Twitch } from "./Twitch";
import { Twitter } from "./Twitter";
import { YouTube } from "./YouTube";

export default {
  title: "Icons/Gallery",
};

const Template = (args: IconProps) => (
  <HStack>
    <GeoBuffLogo />
    <Discord {...args} />
    <Facebook {...args} />
    <GitHub {...args} />
    <Instagram {...args} />
    <Reddit {...args} />
    <Twitch {...args} />
    <Twitter {...args} />
    <YouTube {...args} />
  </HStack>
);

export const Default = Template.bind({});
Default.args = {
  height: 25,
  width: 25,
  fill: "#C6C6C6",
};
