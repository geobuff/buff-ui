import React, { FC } from "react";

import { Flex, FlexProps, Link } from "@chakra-ui/react";

const activeLinkStyles = {
  textDecoration: "underline",
  color: "gray.700",
  fontWeight: "bold",
  _hover: {
    color: "gray.600",
  },
};

// These need to be separate to the styles above as Chakra doesn't support.
const textDecorationStyles = {
  textDecorationThickness: "2px",
  textUnderlineOffset: "0.5px",
};

export interface NavigationBarLinkProps extends FlexProps {
  href: string;
  isActive?: boolean;
  label: string;
}

export const NavigationBarLink: FC<NavigationBarLinkProps> = ({
  href,
  isActive = false,
  label,
  ...props
}) => (
  <Flex as="nav" {...props}>
    <Link
      {...(isActive ? activeLinkStyles : {})}
      href={href}
      fontSize="16px"
      fontWeight={600}
      color="gray.600"
      style={{
        ...(isActive ? textDecorationStyles : {}),
      }}
    >
      {label}
    </Link>
  </Flex>
);
