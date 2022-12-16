import { ResponsiveType } from "react-multi-carousel";

export const ICON_PROPS = {
  color: "black",
  height: 5,
  width: 5,
};

export type CarouselButtonPosition = "left" | "right";

export const RESPONSIVE_CONFIG: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 5,
    slidesToSlide: 3,
  },
  largeMobile: {
    breakpoint: { max: 600, min: 500 },
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 370 },
    items: 3,
    slidesToSlide: 2,
  },
  smallMobile: {
    breakpoint: { max: 370, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};
