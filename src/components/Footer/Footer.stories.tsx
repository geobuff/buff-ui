import React from "react";

import { Text } from "@chakra-ui/react";

import { GeoBuffLogo } from "../Icons";
import { Footer, FooterProps } from "./Footer";
import { FooterVariant } from "./Footer.types";
import { socialIcons } from "./Templates/SocialIcons";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args: FooterProps) => <Footer {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  variant: FooterVariant.SIMPLE,
  legalStatement: "© 2022 GeoBuff. All rights reserved.",
};

const companyLinks = [
  {
    href: "/",
    text: "Our Mission",
    isExternal: false,
  },
  {
    href: "/",
    text: "Our Values",
    isExternal: false,
  },
  {
    href: "/",
    text: "Meet the Team",
    isExternal: false,
  },
  {
    href: "/",
    text: "Resources",
    isExternal: false,
  },
  {
    href: "/",
    text: "Support",
    isExternal: true,
  },
];

const furtherInfoLinks = [
  {
    href: "/",
    text: "Privacy Policy",
    isExternal: false,
  },
  {
    href: "/",
    text: "Terms of Service",
    isExternal: false,
  },
  {
    href: "/",
    text: "Cookie Policy",
    isExternal: false,
  },
];

const logo = <GeoBuffLogo isGrayScale />;

const extendedBottomRightContent = <Text>Testing...</Text>;

export const Extended = Template.bind({});
Extended.args = {
  variant: FooterVariant.EXTENDED,
  isMobile: false,
  isAppMobile: false,
  legalStatement: "© 2022 GeoBuff. All rights reserved.",
  columnOneHeading: "Company",
  columnOneLinks: companyLinks,
  columnTwoHeading: "Further Information",
  columnTwoLinks: furtherInfoLinks,
  logo,
  description:
    "GeoBuff is NZ's leading platform for Geography education and trivia.",
  socialIcons,
  extendedBottomRightContent,
};
