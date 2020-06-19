import React, { useState, useMemo } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns'
import pt from 'date-fns/locale'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, DateButton, DateText } from './styles';

const DateInput = () => {
    const [date, setDate] = useState(new Date());
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

    return (
        <Container>
            <DateButton onPress={showPicker}>
                <Icon name='event' color='#fff' size={20} />
                <DateText>{dateFormatted}</DateText>
            </DateButton>
            {show && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode='date'
                    display="spinner"
                    onChange={onChange}
                    minimumDate={new Date()}
                    textColor="#fff"
                />
            )}
        </Container>
    )
}

export default DateInput;