import React from "react";

import { FlexProps } from "@chakra-ui/react";

import { GameSpinner } from "./GameSpinner";

export default {
  title: "Components/GameSpinner",
  component: GameSpinner,
};

const Template = (args: FlexProps) => <GameSpinner {...args} />;
export const Default = Template.bind({});
