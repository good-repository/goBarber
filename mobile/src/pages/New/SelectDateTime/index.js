import React from 'react';

import DateInput from '../../../components/DateInput'

import Background from '../../../components/Background'
import { Container } from './styles';

const SelectProvider = () => {
  return (
    <Background>
      <Container>
        <DateInput />
      </Container>
    </Background>
  )
}

export default SelectProvider;