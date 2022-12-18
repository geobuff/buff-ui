import React from "react";

import { GridItem } from "@chakra-ui/react";

import { QuizCard } from "../QuizCard";
import {
  bottomLeftContent,
  bottomRightContent,
  image,
} from "../QuizCard/Templates";
import { CardList, CardListProps } from "./CardList";

export default {
  title: "Components/CardList",
  component: CardList,
};

const ITEMS_LENGTH = 14;

const Template = (args: CardListProps) => (
  <CardList {...args}>
    {[...Array(ITEMS_LENGTH)].map((_, i) => (
      <GridItem
        key={i}
        paddingRight={{
          base: i === ITEMS_LENGTH - 1 && "12px",
          md: 0,
        }}
      >
        <QuizCard
          href={"/"}
          isMobile={args.isMobile}
          heading="Countries of the World"
          image={image}
          bottomLeftContent={bottomLeftContent}
          bottomRightContent={bottomRightContent}
          position={{ base: "relative", md: "absolute" }}
          marginLeft={{ base: 3, md: 0 }}
        />
      </GridItem>
    ))}
  </CardList>
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  lessItemsThanGrid: false,
};
