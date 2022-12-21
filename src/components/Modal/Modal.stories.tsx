import React from "react";

import { Button, Flex, Text } from "@chakra-ui/react";

import { MainView } from "../MainView";
import { Modal, ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => (
  <MainView>
    <Modal {...args}>
      <Flex justifyContent="center">
        <Text mb={6}>Would you like to eat french fries?</Text>
      </Flex>
    </Modal>
  </MainView>
);

const footer = (
  <Flex>
    <Button>Cancel</Button>
    <Button colorScheme="green" ml={3}>
      Submit
    </Button>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
  header: "Good Evening",
  footer: footer,
  hasCloseButton: false,
  maxHeight: 300,
  minWidth: 100,
  isOpen: true,
};
