import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png'

import Background from '../../components/Background'

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles.js';

const SignUp = ({ navigation }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit() {

  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon='person-outline'
            autoCorrect={false}
            autoCaptalize='none'
            placeholder='Digite seu nome completo'
            returnKeyType='next'
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon='mail-outline'
            keyboardType='email-address'
            autoCorrect={false}
            autoCaptalize='none'
            placeholder='Digite seu email'
            ref={emailRef}
            returnKeyType='next'
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon='lock-outline'
            secureTextEntry
            placeholder='Digite sua senha'
            ref={passwordRef}
            returnKeyType='send'
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Ja tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

export default SignUp;