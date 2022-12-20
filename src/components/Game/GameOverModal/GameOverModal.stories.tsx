import React from "react";

import { MainView } from "../../MainView";
import { GameOverModal, GameOverModalProps } from "./GameOverModal";

export default {
  title: "Game/GameOverModal",
  component: GameOverModal,
};

const Template = (args: GameOverModalProps) => (
  <MainView>
    <GameOverModal {...args} />
  </MainView>
);

const DEFAULT_PROPS = {
  quizName: "Countries of the World",
  maxScore: 197,
  score: 69,
  time: 900,
  isLoggedIn: false,
  isLoading: false,
  isOpen: true,
  isSubmitting: false,
  isNotchedIphone: false,
  submitText: "Submit",
  gameOverText: "GAME OVER",
  backToMapText: "View map & results",
  backToMapExplainer:
    "Feel free to close this modal to view the map and your results. Don't worry, you'll still be able to submit your score afterwards!",
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

export const ScoreQuizNotLoggedIn = Template.bind({});
ScoreQuizNotLoggedIn.args = {
  ...DEFAULT_PROPS,
};

export const ScoreQuizLoggedIn = Template.bind({});
ScoreQuizLoggedIn.args = {
  ...DEFAULT_PROPS,
  isLoggedIn: true,
};

export const LeaderboardQuizNotLoggedIn = Template.bind({});
LeaderboardQuizNotLoggedIn.args = {
  ...DEFAULT_PROPS,
  quizScoreType: "leaderboard",
};

export const LeaderboardQuizNoExistingEntry = Template.bind({});
LeaderboardQuizNoExistingEntry.args = {
  ...DEFAULT_PROPS,
  quizScoreType: "leaderboard",
  isLoggedIn: true,
};

export const LeaderboardQuizExistingEntry = Template.bind({});
LeaderboardQuizExistingEntry.args = {
  ...DEFAULT_PROPS,
  quizScoreType: "leaderboard",
  isLoggedIn: true,
  existingEntry: {
    id: 0,
    quizId: 1,
    userId: 1,
    username: "testing",
    countryCode: "nz",
    score: 34,
    time: 500,
    added: new Date(),
    rank: 1,
  },
};
