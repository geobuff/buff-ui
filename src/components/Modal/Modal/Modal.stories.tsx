import React from "react";

import { Button, Flex, Text } from "@chakra-ui/react";

import { MainView } from "../../MainView";
import { Modal, ModalProps } from "./Modal";

export default {
  title: "Modal/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => (
  <MainView>
    <Modal {...args}>
      <Text ml={6} mb={6}>
        Would you like to eat french fries?
      </Text>
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
