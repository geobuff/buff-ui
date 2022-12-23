import React, { FC, Key } from "react";

import {
  FormControl,
  FormLabel,
  HStack,
  Text,
  VStack,
  useRadioGroup,
} from "@chakra-ui/react";
import { Field } from "formik";

import { FormOption, FormSetFieldValue, FormValue } from "../Form.types";
import { RadioButton } from "../RadioButton";

export interface RadioGroupProps {
  name: string;
  label?: string;
  isLabelVisible?: boolean;
  color?: string;
  options: FormOption[];
  selectedValue?: FormValue;
  setFieldHelper?: FormSetFieldValue;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  name,
  label,
  isLabelVisible = true,
  color = "green",
  options = [],
  selectedValue,
  setFieldHelper = () => {},
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    value: selectedValue.toString(),
    name,
    onChange: (value: FormValue) => setFieldHelper(name, value),
  });

  const radioGroup = getRootProps();

  return (
    <VStack>
      <Field name={name}>
        {({ form }) => (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            {label && isLabelVisible && (
              <FormLabel htmlFor={name} fontWeight="bold">
                {label}
              </FormLabel>
            )}
            <HStack spacing={3} minHeight="50px" {...radioGroup}>
              {!options.length ? (
                <Text width="347px" textAlign="center" color="gray.500">
                  {"Loading Types.."}
                </Text>
              ) : (
                options.map(({ label, value }) => {
                  //@ts-ignore
                  const radio = getRadioProps({ value });
                  return (
                    <RadioButton
                      key={value as Key}
                      radioProps={radio}
                      color={color}
                    >
                      {label}
                    </RadioButton>
                  );
                })
              )}
            </HStack>
          </FormControl>
        )}
      </Field>
    </VStack>
  );
};
