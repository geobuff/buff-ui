import React from "react";

import { AuthCard, AuthCardProps } from "./AuthCard";

export default {
  title: "Auth/AuthCard",
  component: AuthCard,
};

const Template = (args: AuthCardProps) => (
  <AuthCard {...args}>Testing</AuthCard>
);

export const Default = Template.bind({});
