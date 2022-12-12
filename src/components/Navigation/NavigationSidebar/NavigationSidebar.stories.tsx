import React from "react";

import { sidebarContent } from "../Templates/NavigationSidebarContent";
import { NavigationSidebar, NavigationSidebarProps } from "./NavigationSidebar";

export default {
  title: "Navigation/NavigationSidebar",
  component: NavigationSidebar,
};

const Template = (args: NavigationSidebarProps): React.ReactNode => (
  <NavigationSidebar isAppMobile {...args}>
    {sidebarContent}
  </NavigationSidebar>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
