import React, { FC } from "react";

import { FormSetFieldValue, FormValue } from "../Form.types";
import { RadioGroup } from "../RadioGroup";

export interface TrueFalseRadioGroupProps {
  name: string;
  label?: string;
  isLabelVisible?: boolean;
  color?: string;
  trueLabel?: string;
  falseLabel?: string;
  selectedValue?: FormValue;
  setFieldHelper?: FormSetFieldValue;
}

export const TrueFalseRadioGroup: FC<TrueFalseRadioGroupProps> = ({
  name = "",
  label = "",
  isLabelVisible = true,
  color = "green",
  trueLabel = "",
  falseLabel = "",
  selectedValue,
  setFieldHelper = (): void => {},
}) => (
  <RadioGroup
    name={name}
    label={label}
    isLabelVisible={isLabelVisible}
    color={color}
    selectedValue={selectedValue ?? "true"}
    options={[
      { label: trueLabel, value: "true" },
      { label: falseLabel, value: "false" },
    ]}
    setFieldHelper={setFieldHelper}
  />
);
