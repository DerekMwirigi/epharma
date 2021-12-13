import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Title, TouchableRipple } from 'react-native-paper';
import Moment from 'moment';
import { theme } from '../../core/theme'

export const DatePicking = ({ style, onDateChange, maximumDate }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        onDateChange(currentDate);
    };

    const showMode = (currentMode: React.SetStateAction<string>) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={style}>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    maximumDate={maximumDate}
                    onChange={onChange}
                />
            )}
            <View style={styles.date_point}>
                <TouchableRipple style={styles.date}
                    rippleColor="#dedede"
                    onPress={() => { }}>
                    <Title style={styles.date_text} >{
                        (date !== undefined ? Moment(date).format('MMMM D, YYYY') : Moment().format('MMMM D, YYYY'))
                    }
                    </Title>
                </TouchableRipple>
                <TouchableRipple style={styles.icon}
                    rippleColor="#dedede"
                    onPress={showDatepicker}>
                    <Image style={styles.icon_text} source={require("../../../assets/core/calendar.png")} />
                </TouchableRipple>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    date_point: {
        flex: 1,
        flexDirection: 'row',
        borderColor: theme.colors.primary,
        borderWidth: 0.5,
        alignSelf: 'center'
    },
    date: {
        width: '90%',
        alignSelf: 'center',

    },
    date_text: {
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 5,
    },
    icon: {
        width: '10%',
        alignSelf: 'center',

    },
    icon_text: {
        width: 24,
        height: 24,
        margin: 5,
        alignSelf: 'flex-end'
    }
});

export default memo(DatePicking);


