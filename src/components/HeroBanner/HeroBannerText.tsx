import React, { FC } from "react";

import { Link, Skeleton } from "@chakra-ui/react";

interface HeroBannerTextProps {
  isLoading?: boolean;
  href?: string;
  text?: string;
}

export const HeroBannerText: FC<HeroBannerTextProps> = ({
  isLoading = true,
  href = "",
  text = "",
}) => {
  if (isLoading) {
    return (
      <Skeleton
        height={{ base: "20px", md: "25px" }}
        width={{ base: "240px", md: "350px" }}
        mt={1}
      />
    );
  }

  return (
    <Link href={href} textDecoration="underline">
      {text}
    </Link>
  );
};
