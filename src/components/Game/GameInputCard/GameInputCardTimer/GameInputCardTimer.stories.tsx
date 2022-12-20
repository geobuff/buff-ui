import React from "react";

import {
  GameInputCardTimer,
  GameInputCardTimerProps,
} from "./GameInputCardTimer";

export default {
  title: "Game/GameInputCardTimer",
  component: GameInputCardTimer,
};

const Template = (args: GameInputCardTimerProps) => (
  <GameInputCardTimer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  totalSeconds: 900,
  expiryTimestamp: { minutes: 15, seconds: 0 },
  hasGameStarted: false,
  hasGameStopped: false,
};
