import * as Yup from 'yup';
export const formValidationSchema = {
  amount: Yup.number()
    .required('Amount is required')
    .integer('Please Provide Numbers only'),
  currency: Yup.string().required('Currency is required'),
};
