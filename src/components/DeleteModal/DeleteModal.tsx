import React, { FC } from "react";

import { Alert, AlertIcon, Box, Button, Text } from "@chakra-ui/react";

import { Modal } from "../Modal";

export interface DeleteModalProps {
  isOpen?: boolean;
  header?: string;
  message?: string;
  action?: string;
  isSubmitting?: boolean;
  error?: string;
  cancelText?: string;
  deleteText?: string;
  onClose?: () => void;
  onSubmit?: () => void;
}

export const DeleteModal: FC<DeleteModalProps> = ({
  isOpen = false,
  header = "",
  message = "",
  action = "",
  isSubmitting = false,
  error = "",
  cancelText = "",
  deleteText = "",
  onClose = (): void => {},
  onSubmit = (): void => {},
}) => {
  const footer = (
    <>
      <Button onClick={onClose} disabled={isSubmitting}>
        {cancelText}
      </Button>
      <Button
        colorScheme="red"
        onClick={onSubmit}
        disabled={isSubmitting}
        ml={3}
      >
        {action ? action : deleteText}
      </Button>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} header={header} footer={footer}>
      <Box paddingX={6}>
        {error && (
          <Alert status="error" borderRadius={6} marginBottom={3}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Text>{message}</Text>
      </Box>
    </Modal>
  );
};
