import React from "react";

import { GameHeader, GameHeaderProps } from "./GameHeader";

export default {
  title: "Game/GameHeader",
  component: GameHeader,
};

const Template = (args: GameHeaderProps) => <GameHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  hasLeaderboard: true,
  quizId: 1,
  heading: "Game Header",
  shouldTruncateText: false,
  href: "/leaderboard?quizId=1",
};
