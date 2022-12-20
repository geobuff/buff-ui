import React from "react";

import { MainView } from "../../../MainView";
import {
  GameInputBannerTimer,
  GameInputBannerTimerProps,
} from "./GameInputBannerTimer";

export default {
  title: "Game/GameInputBannerTimer",
  component: GameInputBannerTimer,
};

const Template = (args: GameInputBannerTimerProps) => (
  <MainView>
    <GameInputBannerTimer {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  totalSeconds: 900,
  expiryTimestamp: { minutes: 15, seconds: 0 },
  hasGameStarted: false,
  hasGameStopped: false,
};
