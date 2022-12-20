import React from "react";

import { MainView } from "../../MainView";
import { GameInputBanner, GameInputBannerProps } from "./GameInputBanner";

export default {
  title: "Game/GameInputBanner",
  component: GameInputBanner,
};

const Template = (args: GameInputBannerProps) => (
  <MainView>
    <GameInputBanner {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  type: 1,
  plural: "countries",
  time: 900,
  errorMessage: "",
  expiryTimestamp: { minutes: 0, seconds: 0 },
  hasError: false,
  hasGameStarted: true,
  hasGameStopped: false,
  inputValue: "",
  scoreLabel: "69 of 197 countries",
  inputPlaceholder: "Enter a country...",
  closeCircleLabel: "Close circle",
};
