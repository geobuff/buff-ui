import React from "react";

import { HStack } from "@chakra-ui/react";

import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { CloseLine } from "./CloseLine";
import { DeleteBinLine } from "./DeleteBinLine";
import { Discord } from "./Discord";
import { Earth } from "./Earth";
import { Facebook } from "./Facebook";
import { GeoBuffLogo } from "./GeoBuffLogo";
import { GitHub } from "./GitHub";
import { IconProps } from "./Icons.types";
import { Instagram } from "./Instagram";
import { LocationMarker } from "./LocationMarker";
import { OutlinedChevronRight } from "./OutlinedChevronRight";
import OutlinedZoomIn from "./OutlinedZoomIn";
import { OutlinedZoomOut } from "./OutlinedZoomOut";
import { QuestionMark } from "./QuestionMark";
import { Reddit } from "./Reddit";
import { SaveAlt } from "./SaveAlt";
import { Search } from "./Search";
import { Share } from "./Share";
import { SolidChevronDown } from "./SolidChevronDown";
import { SolidChevronUp } from "./SolidChevronUp";
import { SolidCloseCircle } from "./SolidCloseCircle";
import { SolidDotsVertical } from "./SolidDotsVertical";
import { SolidLock } from "./SolidLock";
import { SolidPencil } from "./SolidPencil";
import { SolidQuestionMarkCircle } from "./SolidQuestionMarkCircle";
import { SolidRefresh } from "./SolidRefresh";
import { SolidSubtractCircle } from "./SolidSubtractCircle";
import { SolidSuccessCircle } from "./SolidSuccessCircle";
import { Twitch } from "./Twitch";
import { Twitter } from "./Twitter";
import { User } from "./User";
import { YouTube } from "./YouTube";

export default {
  title: "Icons/Gallery",
};

const Template = (args: IconProps) => (
  <>
    <HStack mb={6}>
      <GeoBuffLogo />
      <Earth />
      <QuestionMark />
    </HStack>
    <HStack mb={6}>
      <Discord {...args} />
      <Facebook {...args} />
      <GitHub {...args} />
      <Instagram {...args} />
      <Reddit {...args} />
      <Twitch {...args} />
      <Twitter {...args} />
      <YouTube {...args} />
    </HStack>
    <HStack>
      <SolidSuccessCircle />
      <SolidSubtractCircle />
      <ArrowLeft />
      <ArrowRight />
      <Search />
      <SolidCloseCircle />
      <CloseLine />
      <DeleteBinLine />
      <LocationMarker />
      <OutlinedChevronRight />
      <OutlinedZoomIn />
      <OutlinedZoomOut />
      <SaveAlt />
      <Share />
      <SolidChevronDown />
      <SolidChevronUp />
      <SolidDotsVertical />
      <SolidLock />
      <SolidPencil />
      <SolidQuestionMarkCircle />
      <SolidRefresh />
      <User />
    </HStack>
  </>
);

export const Default = Template.bind({});
Default.args = {
  height: 25,
  width: 25,
  fill: "#C6C6C6",
};
