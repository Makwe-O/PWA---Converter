import React, { useEffect, useState } from 'react';
import { Input, Select, Button, Box, Text } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { formValidationSchema } from '../../validation';
import * as yup from 'yup';
const FormSection = () => {
  const [currencies, setCurrencies] = useState(null);
  const [bitCoin, setBitCoin] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://blockchain.info/ticker');
      const data = await response.json();
      let currencyData = Object.values(data);
      let currencyValues = Object.keys(data);
      const result = currencyData?.map(function (el, index) {
        let o = Object.assign({}, el);
        o.name = currencyValues[index];
        return o;
      });

      setCurrencies((prevState) => result);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Formik
        initialValues={{ currency: '', amount: 2 }}
        validationSchema={yup.object({
          ...formValidationSchema,
        })}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          const fetchBitCoinEquiv = await fetch(
            `https://blockchain.info/tobtc?currency=${values.currency}&value=${values.amount}`,
          );
          const parseBitCoinEquiv = await fetchBitCoinEquiv.json();
          setBitCoin(parseBitCoinEquiv);
          actions.setSubmitting(false);
        }}>
        {({ values, handleChange, errors, isSubmitting, initialValues }) => (
          <Form>
            <Input
              type='number'
              id='number'
              placeholder='Enter any amount'
              mb='2'
              onChange={handleChange}
              width='100%'
              name='amount'
              height='60px'
            />
            <Text color='red.500'>{errors.amount}</Text>

            <Select
              placeholder='Select Currency'
              height='60px'
              width='100%'
              name='currency'
              onChange={handleChange}>
              {currencies?.map((currency, index) => (
                <option key={index} value={currency?.name}>
                  {`${currency?.name} ${currency?.symbol}`}
                </option>
              ))}
            </Select>
            <Text color='red.500'>{errors.currency}</Text>
            <Box w='100%' textAlign='center'>
              <Button
                type='submit'
                isDisabled={
                  errors.amount || errors.currency || values === initialValues
                }
                isLoading={isSubmitting}
                loadingText='Converting'
                mt='8'
                textAlign='center'
                variantColor='blue'
                variant='outline'>
                Convert
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Box d='flex' alignItems='baseline' mt='8'>
        <Text fontSize='6xl'>{bitCoin}</Text>
        <Text fontSize='xl'>BTC</Text>
      </Box>
    </>
  );
};
export default FormSection;
