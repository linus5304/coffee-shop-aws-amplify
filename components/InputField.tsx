import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
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

export const InputField: React.FC<InputFieldProps> = ({
  size,
  label,
  select,
  options,
  ...props
}) => {
  const [field, { error }] = useField(props);
  if (select) {
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Field as={Select}  {...field}>
          <option value=""></option>
          {options
            ? options.map((a: any) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))
            : null}
        </Field>
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
