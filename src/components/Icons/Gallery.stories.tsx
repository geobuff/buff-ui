import React from "react";

import { HStack } from "@chakra-ui/react";

import { ArrowLeft } from "./ArrowLeft";
import { Discord } from "./Discord";
import { Earth } from "./Earth";
import { Facebook } from "./Facebook";
import { GeoBuffLogo } from "./GeoBuffLogo";
import { GitHub } from "./GitHub";
import { IconProps } from "./Icons.types";
import { Instagram } from "./Instagram";
import { QuestionMark } from "./QuestionMark";
import { Reddit } from "./Reddit";
import { SolidSubtractCircle } from "./SolidSubtractCircle";
import { SolidSuccessCircle } from "./SolidSuccessCircle";
import { Twitch } from "./Twitch";
import { Twitter } from "./Twitter";
import { YouTube } from "./YouTube";

export default {
  title: "Icons/Gallery",
};

const Template = (args: IconProps) => (
  <HStack>
    <GeoBuffLogo />
    <Earth />
    <QuestionMark />
    <Discord {...args} />
    <Facebook {...args} />
    <GitHub {...args} />
    <Instagram {...args} />
    <Reddit {...args} />
    <Twitch {...args} />
    <Twitter {...args} />
    <YouTube {...args} />
    <SolidSuccessCircle />
    <SolidSubtractCircle />
    <ArrowLeft />
  </HStack>
);

export const Default = Template.bind({});
Default.args = {
  height: 25,
  width: 25,
  fill: "#C6C6C6",
};
