import React from "react";

import {
  GameInputBannerError,
  GameInputBannerErrorProps,
} from "./GameInputBannerError";

export default {
  title: "Game/GameInputBannerError",
  component: GameInputBannerError,
};

const Template = (args: GameInputBannerErrorProps) => (
  <GameInputBannerError {...args} />
);

export const Default = Template.bind({});
Default.args = {
  errorMessage: "Australia has already been selected!",
};
