import React from "react";

import { ProfileUserAvatar } from "../ProfileUserAvatar";
import { TeamMemberCard, TeamMemberCardProps } from "./TeamMemberCard";

export default {
  title: "Components/TeamMemberCard",
  component: TeamMemberCard,
};

const Template = (args: TeamMemberCardProps) => (
  <TeamMemberCard {...args}>
    <ProfileUserAvatar
      primaryImageUrl="https://geobuff.sgp1.digitaloceanspaces.com/team/ash-primary.svg"
      secondaryImageUrl="https://geobuff.sgp1.digitaloceanspaces.com/team/ash-secondary.svg"
    />
  </TeamMemberCard>
);

export const Default = Template.bind({});
Default.args = {
  title: "Scrub",
  position: "Dogsbody",
  city: "Singapore",
  country: "Singapore",
  link: "https://geobuff.com",
};
