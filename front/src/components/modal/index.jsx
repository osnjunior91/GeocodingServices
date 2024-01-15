import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import states from 'states-us';


const FormModal = ({open, setOpen, handleSubmit}) => {
 
 
  const formik = useFormik({
    initialValues: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      street: Yup.string().required('Street is required').max(100, 'Street cannot be more than 100 characters'),
      city: Yup.string().when('zip', {
        is: (zip) => !zip,
        then: () => Yup.string().required("Required if ZIP is empty."),
        otherwise:() => Yup.string().notRequired(),
      }),
      state: Yup.string().when('zip', {
        is: (zip) => !zip,
        then: () => Yup.string().required("Required if ZIP is empty."),
        otherwise:() => Yup.string().notRequired(),
      }),
    }),
  });

  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
  };



  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleSubmit(formik.values);
            handleClose();
          },
        }}
      >
        <DialogTitle>Address Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
                Please enter the address information to retrieve the weather for that location. City and state or ZIP code are mandatory fields.
          </DialogContentText>
          <div>
      <TextField
        label="Street"
        id="street"
        name="street"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('street')}
        error={formik.touched.street && Boolean(formik.errors.street)}
        helperText={formik.touched.street && formik.errors.street}
      />

      <TextField
        label="City"
        id="city"
        name="city"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('city')}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
      />

      <TextField
        select
        label="State"
        id="state"
        name="state"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('state')}
        error={formik.touched.state && Boolean(formik.errors.state)}
        helperText={formik.touched.state && formik.errors.state}
      >
        {states.map((state) => (
          <MenuItem key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="ZIP Code"
        id="zip"
        name="zip"
        type="number"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('zip')}
        error={formik.touched.zip && Boolean(formik.errors.zip)}
        helperText={formik.touched.zip && formik.errors.zip}
      />
    </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!formik.isValid} type="submit">Search</Button>
        </DialogActions>
      </Dialog>
  );
}

export default FormModal;