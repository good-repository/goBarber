import React from 'react';
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.svg'

function SignIn() {
  return (
    <>
      <img src={logo} alt='GoBarber' />

      <form>
        <input type='email' placeholder='Digite seu email' />
        <input type='password' placeholder='Digite sua senha' />

        <button type='submit'>Acessar</button>
        <Link to='/register'>Crie sua conta</Link>
      </form>
    </>
  )
}

export default SignIn;