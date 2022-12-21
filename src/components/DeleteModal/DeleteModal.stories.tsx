import React from "react";

import { DeleteModal, DeleteModalProps } from "./DeleteModal";

export default {
  title: "Components/DeleteModal",
  component: DeleteModal,
};

const Template = (args: DeleteModalProps) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  header: "Delete Me",
  message: "Please confirm that you want to delete me.",
  action: "Delete",
  isSubmitting: false,
  error: "",
  cancelText: "Cancel",
};
