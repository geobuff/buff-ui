import React, { FC, MouseEventHandler, useState } from "react";

import { Box, BoxProps, Image } from "@chakra-ui/react";

export interface ProfileUserAvatarProps extends BoxProps {
  primaryImageUrl: string;
  secondaryImageUrl?: string;
  height?: number;
  width?: number;
  shape?: "circle" | "square";
  hasBorder?: boolean;
  isClickable?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const ProfileUserAvatar: FC<ProfileUserAvatarProps> = ({
  primaryImageUrl,
  secondaryImageUrl = "",
  height = 130,
  width = 130,
  shape = "circle",
  hasBorder = true,
  isClickable = true,
  onClick,
  ...props
}) => {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <Box
      alignItems="center"
      borderRadius={shape === "square" ? "8px" : "100%"}
      backgroundColor="#276f86"
      border={hasBorder ? "solid 5px #1A202C" : "none"}
      padding={3}
      height={height}
      width={width}
      marginBottom={2}
      overflow="hidden"
      marginX="auto"
      cursor={isClickable && "pointer"}
      zIndex={2}
      onMouseEnter={(): void => setShowSecondary(true)}
      onMouseOut={(): void => setShowSecondary(false)}
      onClick={isClickable && onClick}
      {...props}
    >
      {showSecondary ? (
        <Image
          src={secondaryImageUrl}
          alt={`Secondary version of current user avatar`}
          height={height - 24}
          width={width - 24}
          style={{
            marginTop: 0.5,
          }}
          onMouseEnter={(): void => setShowSecondary(true)}
        />
      ) : (
        <Image
          src={primaryImageUrl}
          alt={`Primary version of current user avatar`}
          height={height - 24}
          width={width - 24}
          style={{
            marginTop: 0.5,
          }}
        />
      )}
    </Box>
  );
};
