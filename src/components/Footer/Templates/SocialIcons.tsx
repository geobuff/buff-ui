import React from "react";

import { Flex, Link, SimpleGrid } from "@chakra-ui/react";

import {
  Discord,
  Facebook,
  GitHub,
  Instagram,
  Reddit,
  Twitch,
  Twitter,
  YouTube,
} from "../../Icons";

export const socialIcons = (
  <Flex justifyContent="center" mt={{ base: 12, md: 0 }}>
    <SimpleGrid columns={{ base: 4, lg: 8 }} spacingY={{ base: 6, lg: 0 }}>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Twitter link" isExternal>
          <Twitter />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Instagram link" isExternal>
          <Instagram />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Facebook link" isExternal>
          <Facebook />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Reddit link" isExternal>
          <Reddit />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Discord link" isExternal>
          <Discord />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="GitHub link" isExternal>
          <GitHub />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="YouTube link" isExternal>
          <YouTube />
        </Link>
      </Flex>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Link href="/" aria-label="Twitch link" isExternal>
          <Twitch />
        </Link>
      </Flex>
    </SimpleGrid>
  </Flex>
);
