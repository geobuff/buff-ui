import React, { FC } from "react";
import { ChangeEvent } from "react";

import {
  Flex,
  FlexProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Field } from "formik";

import { FormOption } from "../Form.types";

export interface SelectFormFieldProps
  extends Omit<FlexProps, "defaultValue" | "onChange"> {
  options: FormOption[];
  defaultValue?: FormOption;
  name?: string;
  label?: string;
  helper?: string;
  defaultLabel?: string;
  isInvalid?: boolean;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectFormField: FC<SelectFormFieldProps> = ({
  options = [],
  name,
  label,
  helper,
  defaultLabel = "",
  isInvalid = false,
  defaultValue = null,
  onChange = () => {},
  ...props
}) => (
  <Flex {...props}>
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          {label && (
            <FormLabel htmlFor={name} fontWeight="bold">
              {label}
            </FormLabel>
          )}
          <Select
            {...field}
            id={name}
            fontSize="16px"
            fontWeight={400}
            isInvalid={isInvalid}
            background="#F6F6F6"
            minHeight="44px"
            borderRadius={6}
            color={"gray.600"}
            borderColor="transparent"
            _placeholder={{ color: "gray.500" }}
            _hover={{ background: "#e0e0e0" }}
            _invalid={{
              color: "red.500",
              borderColor: "red.500",
              borderWidth: 2,
            }}
            onChange={onChange}
          >
            <option value={defaultValue ? defaultValue.value : ""}>
              {defaultValue ? defaultValue.label : defaultLabel}
            </option>
            {options &&
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </Select>

          {helper && <FormHelperText marginTop={0}>{helper}</FormHelperText>}

          <FormErrorMessage fontSize="11px">
            {form.errors[name]}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  </Flex>
);
