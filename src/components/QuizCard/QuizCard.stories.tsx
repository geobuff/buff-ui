import React from "react";

import { QuizCard, QuizCardProps } from "./QuizCard";
import { bottomLeftContent, bottomRightContent, image } from "./Templates";

export default {
  title: "Components/QuizCard",
  component: QuizCard,
};

const Template = (args: QuizCardProps) => <QuizCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  isEnabled: true,
  isVerified: false,
  href: "/quiz/countries-of-the-world",
  heading: "Countries of the World",
  image,
  bottomLeftContent,
  bottomRightContent,
};
