import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
  label?: string;
  textarea?: boolean;
  select?: boolean;
  options?: any;
};

export const InputField: React.FC<InputFieldProps> = ({ size, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl>
      <FormLabel htmlFor={field.name}></FormLabel>
      <Input {...field} {...props} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
