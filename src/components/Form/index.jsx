import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
} from '@chakra-ui/core';
const FormSection = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://blockchain.info/ticker');
      const data = await response.json();
      console.log(data);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <FormControl>
      <Input type='number' id='number' placeholder='Enter any amount' mb='2' />
      <Select placeholder='Select Currency'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
    </FormControl>
  );
};
export default FormSection;
