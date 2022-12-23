import React, { FC } from "react";

import { Box, Link, Text } from "@chakra-ui/react";

export interface TeamMemberCardProps {
  children?: React.ReactNode;
  title?: string;
  position?: string;
  city?: string;
  country?: string;
  link?: string;
}

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  children = null,
  title = "",
  position = "",
  city = "",
  country = "",
  link = "",
}) => (
  <Box textAlign="center">
    <Link href={link} isExternal>
      {children}
    </Link>
    <Box>
      <Box fontSize="16px" lineHeight="19px" mb={3}>
        <Text fontWeight="bold" mt={6}>
          {title}
        </Text>
        <Text mb={1}>{position}</Text>
      </Box>
      <Box color="#737373" fontSize="12px" lineHeight="14px">
        <Text>{city},</Text>
        <Text>{country}</Text>
      </Box>
    </Box>
  </Box>
);
