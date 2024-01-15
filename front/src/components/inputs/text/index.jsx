import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? meta.error : ''}
    />
  );
};

export default InputText;