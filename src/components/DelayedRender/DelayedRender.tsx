import React, { FC, useEffect, useState } from "react";

import { Fade } from "@chakra-ui/react";

export interface DelayedRenderProps {
  children?: React.ReactNode;
  waitBeforeShow?: number;
  shouldFadeIn?: boolean;
}

export const DelayedRender: FC<DelayedRenderProps> = ({
  children = null,
  waitBeforeShow = 500,
  shouldFadeIn = false,
}) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  const mainContent = shouldFadeIn ? (
    <Fade in>{children}</Fade>
  ) : (
    <>{children}</>
  );

  return isShown ? mainContent : null;
};
