import React from "react";

import { FlexProps } from "@chakra-ui/react";

import { MainView } from "../../MainView";
import { AuthCard } from "../AuthCard";
import { AuthView } from "./AuthView";

export default {
  title: "Auth/AuthView",
  component: AuthView,
};

const Template = (args: FlexProps) => (
  <MainView>
    <AuthView {...args}>
      <AuthCard height={478} width={375} marginX="auto" marginY={5}>
        Testing
      </AuthCard>
    </AuthView>
  </MainView>
);

export const Default = Template.bind({});
