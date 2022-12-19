import React from "react";

import { Result } from "../Results.types";
import { ResultsList, ResultsListProps } from "./ResultsList";

export default {
  title: "Results/ResultsList",
  component: ResultsList,
};

const Template = (args: ResultsListProps) => <ResultsList {...args} />;

const results: Result[] = [
  {
    name: "afghanistan",
    code: "AS",
    flagUrl: "https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1eb.svg",
    svgName: "Afghanistan",
    isHidden: false,
    isMissedResult: false,
  },
  {
    name: "australia",
    code: "AU",
    flagUrl: "https://twemoji.maxcdn.com/v/13.0.1/svg/1f1e6-1f1fa.svg",
    svgName: "Australia",
    isHidden: false,
    isMissedResult: true,
  },
  {
    name: "new zealand",
    code: "NZ",
    flagUrl: "https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ff.svg",
    svgName: "New Zealand",
    isHidden: false,
    isMissedResult: true,
  },
];

export const HasFlags = Template.bind({});
HasFlags.args = {
  results,
  plural: "countries",
  hasFlags: true,
};

export const NoFlags = Template.bind({});
NoFlags.args = {
  results,
  plural: "countries",
  hasFlags: false,
};
