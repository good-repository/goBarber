import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input'
import Button from '~/components/Button'
import Background from '~/components/Background'

// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <Text>SignIn qualquer</Text>
      <Input
        style={{marginTop: 30}}
        icon='call'
        placeholder='Digite seu número'
      />
      <Button>Entrar</Button>
    </Background>
  )
}

export default SignIn;