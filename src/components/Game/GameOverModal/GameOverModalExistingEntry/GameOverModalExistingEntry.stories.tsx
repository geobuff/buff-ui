import React from "react";

import {
  GameOverModalExistingEntry,
  GameOverModalExistingEntryProps,
} from "./GameOverModalExistingEntry";

export default {
  title: "Game/GameOverModalExistingEntry",
  component: GameOverModalExistingEntry,
};

const Template = (args: GameOverModalExistingEntryProps) => (
  <GameOverModalExistingEntry {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rank: 22943,
  score: 0,
  time: 900,
  username: "teamgeobuff",
  isLoading: false,
  rankText: "Rank",
  scoreText: "Score",
  timeText: "Time",
  usernameText: "Username",
};
