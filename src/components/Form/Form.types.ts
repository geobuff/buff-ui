export type FormValue = string | number;

export interface FormOption {
  label: string;
  value: FormValue;
}

export type FormSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => void;
