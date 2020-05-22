import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import logo from '~/assets/logo.svg'

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <>
      <img src={logo} alt='GoBarber' />

      <Form onSubmit={handleSubmit}>
        <Input name='name' placeholder='Digite seu nome completo' />
        <Input name='email' type='email' placeholder='Digite seu email' />
        <Input name='password' type='password' placeholder='Digite sua senha' />

        <button type='submit'>Criar conta</button>
        <Link to='/'>Já tenho uma conta</Link>
      </Form>
    </>
  )
}

export default SignUp;