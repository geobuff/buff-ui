import React from "react";

import { LeaderboardEntry } from "../../Game.types";
import {
  GameOverModalExplainerText,
  GameOverModalExplainerTextProps,
} from "./GameOverModalExplainerText";

export default {
  title: "Game/GameOverModalExplainerText",
  component: GameOverModalExplainerText,
};

const Template = (args: GameOverModalExplainerTextProps) => (
  <GameOverModalExplainerText {...args} />
);

const existingEntry: LeaderboardEntry = {
  id: 0,
  quizId: 1,
  userId: 1,
  username: "testing",
  countryCode: "nz",
  score: 34,
  time: 500,
  added: new Date(),
  rank: 1,
};

export const Default = Template.bind({});
Default.args = {
  existingEntry,
  isLoggedIn: true,
  isLoading: false,
  explainerTextOne: "You must ",
  explainerActionOne: "login",
  explainerTextTwo: " or ",
  explainerActionTwo: "register",
  submitAScoreText: " to update your high score.",
  submitALeaderboardEntryText: " to submit a leaderboard entry.",
  scoreQuizLoggedInExplainer:
    "If this score is greater than your existing score, we will update it behind the scenes.",
  noExistingEntryExplainer:
    "No existing entry for this quiz. By clicking submit you will create a new leaderboard entry.",
  existingEntryText: "EXISTING ENTRY",
  existingEntryExplainer:
    "You have an existing entry for this quiz. By clicking submit you will update your existing entry.",
  rankText: "Rank",
  scoreText: "Score",
  timeText: "Time",
  usernameText: "Username",
};
