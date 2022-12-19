import React from "react";

import { ResultsListItem, ResultsListItemProps } from "./ResultsListItem";

export default {
  title: "Results/ResultsListItem",
  component: ResultsListItem,
};

const Template = (args: ResultsListItemProps) => <ResultsListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: "nz",
  svgName: "New Zealand",
  isHidden: false,
  isMissedResult: false,
  hasFlag: true,
  shouldFadeIn: false,
};

export const FadeIn = Template.bind({});
FadeIn.args = {
  code: "nz",
  svgName: "New Zealand",
  isHidden: false,
  isMissedResult: false,
  hasFlag: true,
  shouldFadeIn: true,
};

export const NoFlag = Template.bind({});
NoFlag.args = {
  code: "nz",
  svgName: "New Zealand",
  isHidden: false,
  isMissedResult: false,
  hasFlag: false,
  shouldFadeIn: false,
};

export const IsHidden = Template.bind({});
IsHidden.args = {
  code: "nz",
  svgName: "New Zealand",
  isHidden: true,
  isMissedResult: false,
  hasFlag: true,
  shouldFadeIn: false,
};

export const IsMissedResult = Template.bind({});
IsMissedResult.args = {
  code: "nz",
  svgName: "New Zealand",
  isHidden: false,
  isMissedResult: true,
  hasFlag: true,
  shouldFadeIn: false,
};
