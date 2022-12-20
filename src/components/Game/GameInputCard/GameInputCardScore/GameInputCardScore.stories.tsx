import React from "react";

import {
  GameInputCardScore,
  GameInputCardScoreProps,
} from "./GameInputCardScore";

export default {
  title: "Game/GameInputCardScore",
  component: GameInputCardScore,
};

const Template = (args: GameInputCardScoreProps) => (
  <GameInputCardScore {...args} />
);

export const Default = Template.bind({});
Default.args = {
  score: 69,
  maxScore: 197,
};
