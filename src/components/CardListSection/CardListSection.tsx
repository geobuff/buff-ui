import React, { FC } from "react";

import { Flex, FlexProps, Heading, Link, Spinner } from "@chakra-ui/react";

import { CardList } from "../CardList";
import { OutlinedChevronRight } from "../Icons";

export interface CardListSectionProps extends FlexProps {
  isMobile?: boolean;
  isLoading?: boolean;
  lessItemsThanGrid?: boolean;
  title?: string;
  linkHref?: string;
  linkText?: string;
}

export const CardListSection: FC<CardListSectionProps> = ({
  children = null,
  isMobile = false,
  isLoading = false,
  lessItemsThanGrid = false,
  title = "",
  linkHref = "",
  linkText = "",
  ...props
}) => (
  <>
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      marginTop={{ base: 2.5, md: 12 }}
      marginBottom={{ base: 1, md: 5 }}
      {...props}
    >
      <Flex alignItems="center">
        <Heading fontSize={{ base: 18, md: "2xl" }}>{title}</Heading>
        {isLoading && (
          <Spinner
            marginLeft={2}
            size="sm"
            color="blue.500"
            emptyColor="green.500"
          />
        )}
      </Flex>
      {linkHref && (
        <Link
          href={linkHref}
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "medium" }}
        >
          {linkText}
          <OutlinedChevronRight height="16px" width="16px" mb="1px" />
        </Link>
      )}
    </Flex>
    <CardList isMobile={isMobile} lessItemsThanGrid={lessItemsThanGrid}>
      {children}
    </CardList>
  </>
);
