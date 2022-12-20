import React from "react";

import { MainView } from "../../MainView";
import { GameSidebar, GameSidebarProps } from "../GameSidebar";

export default {
  title: "Game/GameSidebar",
  component: GameSidebar,
};

const Template = (args: GameSidebarProps) => (
  <MainView>
    <GameSidebar {...args} />
  </MainView>
);

export const Default = Template.bind({});
Default.args = {
  heading: "Countries of the World",
  quizId: 1,
  hasLeaderboard: true,
};
