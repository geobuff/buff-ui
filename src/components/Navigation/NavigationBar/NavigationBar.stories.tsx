import { NavigationBarTemplate } from "../Templates/NavigationBarTemplate";
import { NavigationBar } from "./NavigationBar";

export default {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
};

export const Default = NavigationBarTemplate.bind({});
Default.args = {
  isAppMobile: false,
  isMobile: false,
  isSidebarOpen: false,
};
