import React, { FC, useEffect, useState } from "react";

import {
  Image as ChakraImage,
  ImageProps,
  Skeleton,
  SkeletonProps,
} from "@chakra-ui/react";

export interface LoadingImageProps extends ImageProps {
  src?: string;
  hasSkeleton?: boolean;
}

export const LoadingImage: FC<LoadingImageProps> = ({
  src = "",
  height = "100px",
  width = "100px",
  hasSkeleton = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <>
      {isLoading && hasSkeleton && (
        <Skeleton height={height} width={width} {...(props as SkeletonProps)} />
      )}
      <ChakraImage
        display={isLoading && "none"}
        src={src}
        height={isLoading && !hasSkeleton ? 0 : height}
        width={width}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
};
