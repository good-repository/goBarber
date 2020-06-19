import React, { useMemo } from 'react';
import { StackActions } from '@react-navigation/native'
import { formatRelative, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../../services/api'

import Background from '../../../components/Background'
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

const Confirm = ({ navigation, route }) => {
  const provider = route.params.provider
  const time = route.params.time

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  )

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time
    })

    navigation.dispatch(StackActions.popToTop());
    navigation.navigate('Dashboard')
  }

  return (
    <Background>
      <Container>
        <Avatar source={{
          uri: provider.avatar ? provider.avatar.url :
            `https://api.adorable.io/avatars/50/${provider.name}.png`
        }} />

        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={() => handleAddAppointment()}>Confirmar Agendamento</SubmitButton>

      </Container>
    </Background>
  );
}

export default Confirm;