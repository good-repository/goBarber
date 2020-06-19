import React, { useState, useEffect, useMemo } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '../../../services/api'

import Background from '../../../components/Background'
import { Container, PickerContainer, DateButton, DateText, HourList, Hour, Title } from './styles';

const SelectDateTime = ({ navigation, route }) => {
  const provider = route.params.provider

  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([])
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }), [date]
  )

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime()
        }
      })
      setHours(response.data)
    }

    loadAvailable()
  }, [date, provider.id])

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time
    })
  }

  return (
    <Background>
      <Container>
        <PickerContainer>
          <DateButton onPress={showPicker}>
            <Icon name='event' color='#fff' size={20} />
            <DateText>{dateFormatted}</DateText>
          </DateButton>
          {show && (
            <DateTimePicker
              value={date}
              mode='date'
              display="spinner"
              onChange={onChange}
              minimumDate={new Date()}
            />
          )}
        </PickerContainer>

        <HourList
          data={hours}
          keyExtractor={item => item.item}
          renderItem={({ item }) => (
            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  )
}

export default SelectDateTime;