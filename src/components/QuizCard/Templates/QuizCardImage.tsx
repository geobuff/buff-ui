import React from "react";

import { Image } from "@chakra-ui/react";

export const image = (
  <Image
    src="https://geobuff.sgp1.digitaloceanspaces.com/headers/world-map-header.svg"
    height={100}
    width={260}
    objectFit="cover"
    backgroundColor="#E3E1E1"
    borderTopLeftRadius={12}
    borderTopRightRadius={12}
    transition="all 150ms ease-out"
  />
);
